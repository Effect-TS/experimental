---
title: Socket.ts
nav_order: 4
parent: Modules
---

## Socket overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [combinators](#combinators)
  - [toChannel](#tochannel)
- [constructors](#constructors)
  - [makeChannel](#makechannel)
- [errors](#errors)
  - [SocketError (class)](#socketerror-class)
- [models](#models)
  - [Socket (interface)](#socket-interface)
- [tags](#tags)
  - [Socket](#socket)
- [type ids](#type-ids)
  - [SocketTypeId](#sockettypeid)
  - [SocketTypeId (type alias)](#sockettypeid-type-alias)

---

# combinators

## toChannel

**Signature**

```ts
export declare const toChannel: <IE = never>() => (
  self: Socket
) => Channel.Channel<never, IE, Chunk.Chunk<Uint8Array>, unknown, IE | SocketError, Chunk.Chunk<Uint8Array>, void>
```

Added in v1.0.0

# constructors

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

# errors

## SocketError (class)

**Signature**

```ts
export declare class SocketError
```

Added in v1.0.0

# models

## Socket (interface)

**Signature**

```ts
export interface Socket {
  readonly [SocketTypeId]: SocketTypeId
  readonly writer: Effect.Effect<Scope.Scope, never, (chunk: Uint8Array) => Effect.Effect<never, SocketError, void>>
  readonly pull: Effect.Effect<never, Option.Option<SocketError>, Uint8Array>
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
