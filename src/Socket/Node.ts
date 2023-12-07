/**
 * @since 1.0.0
 */
import * as Channel from "effect/Channel"
import type * as Chunk from "effect/Chunk"
import * as Effect from "effect/Effect"
import * as Layer from "effect/Layer"
import * as Option from "effect/Option"
import * as Queue from "effect/Queue"
import type * as Scope from "effect/Scope"
import * as Net from "node:net"
import * as Socket from "../Socket.js"

/**
 * @since 1.0.0
 */
export * from "../Socket.js"

const EOF = Symbol.for("@effect/experimental/Socket/Node/EOF")

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeNet = (
  options: Net.NetConnectOpts
): Effect.Effect<Scope.Scope, Socket.SocketError, Socket.Socket> =>
  Effect.gen(function*(_) {
    const conn = yield* _(Effect.acquireRelease(
      Effect.async<never, Socket.SocketError, Net.Socket>((resume) => {
        const conn = Net.createConnection(options)
        conn.on("connect", () => {
          conn.removeAllListeners()
          resume(Effect.succeed(conn))
        })
        conn.on("error", (error) => {
          resume(Effect.fail(new Socket.SocketError({ reason: "Open", error })))
        })
        return Effect.sync(() => {
          conn.destroy()
        })
      }),
      (conn) =>
        Effect.sync(() => {
          if (conn.closed === false) {
            conn.destroySoon()
          }
          conn.removeAllListeners()
        })
    ))
    return yield* _(fromNetSocket(conn))
  })

/**
 * @since 1.0.0
 * @category constructors
 */
export const fromNetSocket = (
  conn: Net.Socket
): Effect.Effect<never, never, Socket.Socket> =>
  Effect.gen(function*(_) {
    const queue = yield* _(Queue.unbounded<Uint8Array | typeof EOF>())
    let error: Socket.SocketError | undefined

    conn.on("data", (chunk) => {
      Queue.unsafeOffer(queue, chunk)
    })
    conn.on("end", () => {
      Queue.unsafeOffer(queue, EOF)
    })
    conn.on("error", (error_) => {
      error = new Socket.SocketError({ reason: "Open", error: error_ })
      Queue.unsafeOffer(queue, EOF)
    })

    const write = (chunk: Uint8Array) =>
      Effect.async<never, Socket.SocketError, void>((resume) => {
        conn.write(chunk, (error) => {
          if (error) {
            resume(Effect.fail(new Socket.SocketError({ reason: "Write", error })))
          } else {
            resume(Effect.unit)
          }
        })
      })
    const writer = Effect.acquireRelease(
      Effect.succeed(write),
      () => Effect.sync(() => conn.end())
    )

    const pull = Effect.flatMap(
      Queue.take(queue),
      (item) => {
        if (item === EOF) {
          return error ? Effect.fail(Option.some(error)) : Effect.fail(Option.none())
        }
        return Effect.succeed(item as Uint8Array)
      }
    )

    return Socket.Socket.of({
      [Socket.SocketTypeId]: Socket.SocketTypeId,
      writer,
      pull
    })
  })

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeNetChannel = <IE = never>(
  options: Net.NetConnectOpts
): Channel.Channel<
  never,
  IE,
  Chunk.Chunk<Uint8Array>,
  unknown,
  Socket.SocketError | IE,
  Chunk.Chunk<Uint8Array>,
  void
> =>
  Channel.unwrapScoped(
    Effect.map(makeNet(options), Socket.toChannel<IE>())
  )

/**
 * @since 1.0.0
 * @category layers
 */
export const layerNet = (options: Net.NetConnectOpts): Layer.Layer<never, Socket.SocketError, Socket.Socket> =>
  Layer.scoped(
    Socket.Socket,
    makeNet(options)
  )
