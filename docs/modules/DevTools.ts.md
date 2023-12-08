---
title: DevTools.ts
nav_order: 1
parent: Modules
---

## DevTools overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [constructors](#constructors)
  - [makeClient](#makeclient)
  - [makeServer](#makeserver)
  - [makeTracer](#maketracer)
- [layers](#layers)
  - [layerTracer](#layertracer)
- [models](#models)
  - [HostPortConfig (interface)](#hostportconfig-interface)
  - [ServerImpl (interface)](#serverimpl-interface)
- [schemas](#schemas)
  - [ExternalSpan](#externalspan)
  - [ExternalSpan (interface)](#externalspan-interface)
  - [ExternalSpanFrom (interface)](#externalspanfrom-interface)
  - [ParentSpan](#parentspan)
  - [ParentSpan (type alias)](#parentspan-type-alias)
  - [ParentSpanFrom (type alias)](#parentspanfrom-type-alias)
  - [Ping](#ping)
  - [Pong](#pong)
  - [Request](#request)
  - [Request (type alias)](#request-type-alias)
  - [Response](#response)
  - [Response (type alias)](#response-type-alias)
  - [Span](#span)
  - [Span (interface)](#span-interface)
  - [SpanFrom (interface)](#spanfrom-interface)
  - [SpanStatus](#spanstatus)
  - [SpanStatusEnded](#spanstatusended)
  - [SpanStatusStarted](#spanstatusstarted)
- [tags](#tags)
  - [Server](#server)
  - [Server (interface)](#server-interface)

---

# constructors

## makeClient

**Signature**

```ts
export declare const makeClient: ({
  host,
  port
}?: HostPortConfig) => Stream.Stream<never, Socket.SocketError | ParseError | MsgPack.MsgPackError, Span>
```

Added in v1.0.0

## makeServer

**Signature**

```ts
export declare const makeServer: ({
  host,
  port
}?: HostPortConfig) => Effect.Effect<Scope.Scope, SocketServer.SocketServerError, ServerImpl>
```

Added in v1.0.0

## makeTracer

**Signature**

```ts
export declare const makeTracer: Effect.Effect<Scope.Scope | Server, never, Tracer.Tracer>
```

Added in v1.0.0

# layers

## layerTracer

**Signature**

```ts
export declare const layerTracer: (hostPortConfig?: HostPortConfig) => Layer.Layer<never, never, never>
```

Added in v1.0.0

# models

## HostPortConfig (interface)

**Signature**

```ts
export interface HostPortConfig {
  /** defaults to 34437 */
  readonly port?: number
  /** defaults to 127.0.0.1 */
  readonly host?: string
}
```

Added in v1.0.0

## ServerImpl (interface)

**Signature**

```ts
export interface ServerImpl {
  readonly run: Effect.Effect<never, SocketServer.SocketServerError, never>
  readonly responses: Queue.Enqueue<Response>
}
```

Added in v1.0.0

# schemas

## ExternalSpan

**Signature**

```ts
export declare const ExternalSpan: Schema.Schema<
  { readonly _tag: "ExternalSpan"; readonly spanId: string; readonly traceId: string; readonly sampled: boolean },
  { readonly _tag: "ExternalSpan"; readonly spanId: string; readonly traceId: string; readonly sampled: boolean }
>
```

Added in v1.0.0

## ExternalSpan (interface)

**Signature**

```ts
export interface ExternalSpan extends Schema.Schema.To<typeof ExternalSpan> {}
```

Added in v1.0.0

## ExternalSpanFrom (interface)

**Signature**

```ts
export interface ExternalSpanFrom extends Schema.Schema.From<typeof ExternalSpan> {}
```

Added in v1.0.0

## ParentSpan

**Signature**

```ts
export declare const ParentSpan: Schema.Schema<
  | SpanFrom
  | { readonly _tag: "ExternalSpan"; readonly spanId: string; readonly traceId: string; readonly sampled: boolean },
  Span | { readonly _tag: "ExternalSpan"; readonly spanId: string; readonly traceId: string; readonly sampled: boolean }
>
```

Added in v1.0.0

## ParentSpan (type alias)

**Signature**

```ts
export type ParentSpan = Span | ExternalSpan
```

Added in v1.0.0

## ParentSpanFrom (type alias)

**Signature**

```ts
export type ParentSpanFrom = SpanFrom | ExternalSpanFrom
```

Added in v1.0.0

## Ping

**Signature**

```ts
export declare const Ping: Schema.Schema<{ readonly _tag: "Ping" }, { readonly _tag: "Ping" }>
```

Added in v1.0.0

## Pong

**Signature**

```ts
export declare const Pong: Schema.Schema<{ readonly _tag: "Pong" }, { readonly _tag: "Pong" }>
```

Added in v1.0.0

## Request

**Signature**

```ts
export declare const Request: Schema.Schema<{ readonly _tag: "Ping" }, { readonly _tag: "Ping" }>
```

Added in v1.0.0

## Request (type alias)

**Signature**

```ts
export type Request = Schema.Schema.To<typeof Request>
```

Added in v1.0.0

## Response

**Signature**

```ts
export declare const Response: Schema.Schema<SpanFrom | { readonly _tag: "Pong" }, Span | { readonly _tag: "Pong" }>
```

Added in v1.0.0

## Response (type alias)

**Signature**

```ts
export type Response = Schema.Schema.To<typeof Response>
```

Added in v1.0.0

## Span

**Signature**

```ts
export declare const Span: Schema.Schema<SpanFrom, Span>
```

Added in v1.0.0

## Span (interface)

**Signature**

```ts
export interface Span {
  readonly _tag: "Span"
  readonly spanId: string
  readonly traceId: string
  readonly name: string
  readonly sampled: boolean
  readonly attributes: ReadonlyMap<string, unknown>
  readonly parent: Option<ParentSpan>
  readonly status:
    | {
        readonly _tag: "Started"
        readonly startTime: bigint
      }
    | {
        readonly _tag: "Ended"
        readonly startTime: bigint
        readonly endTime: bigint
      }
}
```

Added in v1.0.0

## SpanFrom (interface)

**Signature**

```ts
export interface SpanFrom {
  readonly _tag: "Span"
  readonly spanId: string
  readonly traceId: string
  readonly name: string
  readonly sampled: boolean
  readonly attributes: ReadonlyArray<readonly [string, unknown]>
  readonly parent: Schema.OptionFrom<ParentSpanFrom>
  readonly status:
    | {
        readonly _tag: "Started"
        readonly startTime: string
      }
    | {
        readonly _tag: "Ended"
        readonly startTime: string
        readonly endTime: string
      }
}
```

Added in v1.0.0

## SpanStatus

**Signature**

```ts
export declare const SpanStatus: Schema.Schema<
  | { readonly _tag: "Started"; readonly startTime: string }
  | { readonly _tag: "Ended"; readonly startTime: string; readonly endTime: string },
  | { readonly _tag: "Started"; readonly startTime: bigint }
  | { readonly _tag: "Ended"; readonly startTime: bigint; readonly endTime: bigint }
>
```

Added in v1.0.0

## SpanStatusEnded

**Signature**

```ts
export declare const SpanStatusEnded: Schema.Schema<
  { readonly _tag: "Ended"; readonly startTime: string; readonly endTime: string },
  { readonly _tag: "Ended"; readonly startTime: bigint; readonly endTime: bigint }
>
```

Added in v1.0.0

## SpanStatusStarted

**Signature**

```ts
export declare const SpanStatusStarted: Schema.Schema<
  { readonly _tag: "Started"; readonly startTime: string },
  { readonly _tag: "Started"; readonly startTime: bigint }
>
```

Added in v1.0.0

# tags

## Server

**Signature**

```ts
export declare const Server: Context.Tag<Server, ServerImpl>
```

Added in v1.0.0

## Server (interface)

**Signature**

```ts
export interface Server {
  readonly _: unique symbol
}
```

Added in v1.0.0
