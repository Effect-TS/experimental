/**
 * @since 1.0.0
 */
import * as Context from "effect/Context"
import * as Data from "effect/Data"
import type * as Effect from "effect/Effect"
import type * as Scope from "effect/Scope"
import type * as Socket from "./Socket.js"

/**
 * @since 1.0.0
 * @category type ids
 */
export const SocketServerTypeId = Symbol.for("@effect/experimental/SocketServer")

/**
 * @since 1.0.0
 * @category type ids
 */
export type SocketServerTypeId = typeof SocketServerTypeId

/**
 * @since 1.0.0
 * @category tags
 */
export const SocketServer: Context.Tag<SocketServer, SocketServer> = Context.Tag<SocketServer>(
  "@effect/experimental/SocketServer"
)

/**
 * @since 1.0.0
 * @category models
 */
export interface SocketServer {
  readonly [SocketServerTypeId]: SocketServerTypeId
  readonly join: Effect.Effect<never, SocketServerError, never>
  readonly take: Effect.Effect<Scope.Scope, never, Socket.Socket>
}

/**
 * @since 1.0.0
 * @category errors
 */
export class SocketServerError extends Data.TaggedError("SocketServerError")<{
  readonly reason: "Open"
  readonly error: unknown
}> {
  /**
   * @since 1.0.0
   */
  toString(): string {
    return `SocketServerError: ${this.reason} - ${this.error}`
  }
}
