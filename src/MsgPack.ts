/**
 * @since 1.0.0
 */
import type { ParseError } from "@effect/schema/ParseResult"
import * as Schema from "@effect/schema/Schema"
import type * as Cause from "effect/Cause"
import * as Channel from "effect/Channel"
import * as Chunk from "effect/Chunk"
import * as Data from "effect/Data"
import * as Effect from "effect/Effect"
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
export const pack = <IE = never>(): Channel.Channel<
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
        onFailure: (cause) => Channel.failCause(cause),
        onDone: () => Channel.unit
      })
      return loop
    }
  )

/**
 * @since 1.0.0
 * @category constructors
 */
export const packSchema = <I, A>(
  schema: Schema.Schema<I, A>
) =>
<IE>(): Channel.Channel<
  never,
  IE,
  Chunk.Chunk<A>,
  unknown,
  IE | MsgPackError | ParseError,
  Chunk.Chunk<Uint8Array>,
  void
> => {
  const encode = Schema.encode(Schema.chunkFromSelf(schema))
  const loop: Channel.Channel<never, IE, Chunk.Chunk<A>, unknown, IE | ParseError, Chunk.Chunk<I>, unknown> = Channel
    .readWithCause({
      onInput: (input: Chunk.Chunk<A>) =>
        Channel.zipRight(
          Channel.flatMap(encode(input), Channel.write),
          loop
        ),
      onFailure: (cause: Cause.Cause<IE>) => Channel.failCause(cause),
      onDone: Channel.succeed
    })
  return Channel.pipeTo(loop, pack())
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const unpack = <IE = never>(): Channel.Channel<
  never,
  IE,
  Chunk.Chunk<Uint8Array>,
  unknown,
  IE | MsgPackError,
  Chunk.Chunk<unknown>,
  void
> =>
  Channel.flatMap(
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
        IE,
        Chunk.Chunk<Uint8Array>,
        unknown,
        IE | MsgPackError,
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

/**
 * @since 1.0.0
 * @category constructors
 */
export const unpackSchema = <I, A>(
  schema: Schema.Schema<I, A>
) =>
<IE>(): Channel.Channel<
  never,
  IE,
  Chunk.Chunk<Uint8Array>,
  unknown,
  MsgPackError | ParseError | IE,
  Chunk.Chunk<A>,
  void
> => {
  const parse = Schema.parse(Schema.chunkFromSelf(schema))
  return Channel.mapOutEffect(unpack<IE>(), parse)
}
