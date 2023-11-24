/**
 * @since 1.0.0
 */
import { Effect } from "effect"
import type * as Cause from "effect/Cause"
import * as Channel from "effect/Channel"
import * as Chunk from "effect/Chunk"
import * as Data from "effect/Data"
import { Packr, Unpackr } from "msgpackr"

/**
 * @since 1.0.0
 * @category errors
 */
export class MsgPackError extends Data.TaggedError("MsgPackError")<{
  readonly reason: "Pack" | "Unpack"
  readonly error: unknown
}> {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const pack = <IE>(): Channel.Channel<
  never,
  IE,
  Chunk.Chunk<unknown>,
  unknown,
  IE | MsgPackError,
  Chunk.Chunk<Uint8Array>,
  void
> =>
  Channel.flatMap(
    Channel.sync(() => new Packr()),
    (packr) => {
      const pack = (value: Chunk.Chunk<unknown>) =>
        Channel.flatMap(
          Effect.try({
            try: () => Chunk.map(value, (_) => packr.pack(_) as Uint8Array),
            catch: (error) => new MsgPackError({ reason: "Pack", error })
          }),
          Channel.write
        )

      const loop: Channel.Channel<
        never,
        IE,
        Chunk.Chunk<unknown>,
        unknown,
        IE | MsgPackError,
        Chunk.Chunk<Uint8Array>,
        void
      > = Channel.readWithCause({
        onInput: (input: Chunk.Chunk<unknown>) => Channel.zipRight(pack(input), loop),
        onFailure: (cause: Cause.Cause<IE>) => Channel.failCause(cause),
        onDone: () => Channel.unit
      })
      return loop
    }
  )

/**
 * @since 1.0.0
 * @category constructors
 */
export const unpack: Channel.Channel<
  never,
  never,
  Chunk.Chunk<Uint8Array>,
  unknown,
  MsgPackError,
  Chunk.Chunk<unknown>,
  void
> = Channel.flatMap(
  Channel.sync(() => new Unpackr()),
  (packr) => {
    let incomplete: Uint8Array | undefined = undefined
    const unpack = (value: Chunk.Chunk<Uint8Array>) =>
      Channel.flatMap(
        Effect.try({
          try: () =>
            Chunk.flatMap(value, (buf) => {
              if (incomplete !== undefined) {
                const chunk = new Uint8Array(incomplete.length + buf.length)
                chunk.set(incomplete)
                chunk.set(buf, incomplete.length)
                buf = chunk
                incomplete = undefined
              }
              try {
                return Chunk.unsafeFromArray(packr.unpackMultiple(buf))
              } catch (error_) {
                const error: any = error_
                if (error.incomplete) {
                  incomplete = buf.subarray(error.lastPosition)
                  return Chunk.unsafeFromArray(error.values ?? [])
                }
                throw error
              }
            }),
          catch: (error) => new MsgPackError({ reason: "Unpack", error })
        }),
        Channel.write
      )

    const loop: Channel.Channel<
      never,
      never,
      Chunk.Chunk<Uint8Array>,
      unknown,
      MsgPackError,
      Chunk.Chunk<unknown>,
      void
    > = Channel.readWithCause({
      onInput: (input: Chunk.Chunk<Uint8Array>) => Channel.zipRight(unpack(input), loop),
      onFailure: (cause) => Channel.failCause(cause),
      onDone: () => Channel.unit
    })

    return loop
  }
)
