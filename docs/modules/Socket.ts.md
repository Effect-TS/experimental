---
title: Socket.ts
nav_order: 8
parent: Modules
---

## Socket overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [combinators](#combinators)
  - [toChannel](#tochannel)
  - [toChannelWith](#tochannelwith)
- [constructors](#constructors)
  - [fromWebSocket](#fromwebsocket)
  - [makeChannel](#makechannel)
  - [makeWebSocket](#makewebsocket)
  - [makeWebSocketChannel](#makewebsocketchannel)
- [errors](#errors)
  - [SocketError (class)](#socketerror-class)
    - [toString (method)](#tostring-method)
- [layers](#layers)
  - [layerWebSocket](#layerwebsocket)
- [models](#models)
  - [Socket (interface)](#socket-interface)
- [tags](#tags)
  - [Socket](#socket)
  - [WebSocket](#websocket)
  - [WebSocket (interface)](#websocket-interface)
- [type ids](#type-ids)
  - [SocketTypeId](#sockettypeid)
  - [SocketTypeId (type alias)](#sockettypeid-type-alias)
- [utils](#utils)
  - [defaultCloseCodeIsError](#defaultclosecodeiserror)

---

# combinators

## toChannel

**Signature**

```ts
export declare const toChannel: <IE>(
  self: Socket
) => Channel.Channel<never, IE, Chunk.Chunk<Uint8Array>, unknown, IE | SocketError, Chunk.Chunk<Uint8Array>, void>
```

Added in v1.0.0

## toChannelWith

**Signature**

```ts
export declare const toChannelWith: <IE = never>() => (
  self: Socket
) => Channel.Channel<never, IE, Chunk.Chunk<Uint8Array>, unknown, SocketError | IE, Chunk.Chunk<Uint8Array>, void>
```

Added in v1.0.0

# constructors

## fromWebSocket

**Signature**

```ts
export declare const fromWebSocket: (
  acquire: Effect.Effect<Scope.Scope, SocketError, globalThis.WebSocket>,
  options?: { readonly closeCodeIsError?: ((code: number) => boolean) | undefined } | undefined
) => Effect.Effect<never, never, Socket>
```

Added in v1.0.0

## makeChannel

**Signature**

```ts
export declare const makeChannel: <IE = never>() => Channel.Channel<
  Socket,
  IE,
  Chunk.Chunk<Uint8Array>,
  unknown,
  SocketError | IE,
  Chunk.Chunk<Uint8Array>,
  void
>
```

Added in v1.0.0

## makeWebSocket

**Signature**

```ts
export declare const makeWebSocket: (
  url: string | Effect.Effect<never, never, string>,
  options?: { readonly closeCodeIsError?: ((code: number) => boolean) | undefined } | undefined
) => Effect.Effect<never, never, Socket>
```

Added in v1.0.0

## makeWebSocketChannel

**Signature**

```ts
export declare const makeWebSocketChannel: <IE = never>(
  url: string,
  options?: { readonly closeCodeIsError?: ((code: number) => boolean) | undefined } | undefined
) => Channel.Channel<never, IE, Chunk.Chunk<Uint8Array>, unknown, SocketError | IE, Chunk.Chunk<Uint8Array>, void>
```

Added in v1.0.0

# errors

## SocketError (class)

**Signature**

```ts
export declare class SocketError
```

Added in v1.0.0

### toString (method)

**Signature**

```ts
toString(): string
```

Added in v1.0.0

# layers

## layerWebSocket

**Signature**

```ts
export declare const layerWebSocket: (
  url: string,
  options?: { readonly closeCodeIsError?: ((code: number) => boolean) | undefined } | undefined
) => Layer.Layer<never, never, Socket>
```

Added in v1.0.0

# models

## Socket (interface)

**Signature**

```ts
export interface Socket {
  readonly [SocketTypeId]: SocketTypeId
  readonly run: <R, E, _>(handler: (_: Uint8Array) => Effect.Effect<R, E, _>) => Effect.Effect<R, SocketError, void>
  readonly writer: Effect.Effect<Scope.Scope, never, (chunk: Uint8Array) => Effect.Effect<never, never, void>>
  // readonly messages: Queue.Dequeue<Uint8Array>
}
```

Added in v1.0.0

# tags

## Socket

**Signature**

```ts
export declare const Socket: Context.Tag<Socket, Socket>
```

Added in v1.0.0

## WebSocket

**Signature**

```ts
export declare const WebSocket: Context.Tag<WebSocket, globalThis.WebSocket>
```

Added in v1.0.0

## WebSocket (interface)

**Signature**

```ts
export interface WebSocket {
  readonly _: unique symbol
}
```

Added in v1.0.0

# type ids

## SocketTypeId

**Signature**

```ts
export declare const SocketTypeId: typeof SocketTypeId
```

Added in v1.0.0

## SocketTypeId (type alias)

**Signature**

```ts
export type SocketTypeId = typeof SocketTypeId
```

Added in v1.0.0

# utils

## defaultCloseCodeIsError

**Signature**

```ts
export declare const defaultCloseCodeIsError: (code: number) => boolean
```

Added in v1.0.0
