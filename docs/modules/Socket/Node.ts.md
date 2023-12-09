---
title: Socket/Node.ts
nav_order: 9
parent: Modules
---

## Node overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [constructors](#constructors)
  - [fromNetSocket](#fromnetsocket)
  - [makeNet](#makenet)
  - [makeNetChannel](#makenetchannel)
- [exports](#exports)
  - [From "../Socket.js"](#from-socketjs)
- [layers](#layers)
  - [layerNet](#layernet)

---

# constructors

## fromNetSocket

**Signature**

```ts
export declare const fromNetSocket: (
  open: Effect.Effect<Scope.Scope, Socket.SocketError, Net.Socket>
) => Effect.Effect<never, never, Socket.Socket>
```

Added in v1.0.0

## makeNet

**Signature**

```ts
export declare const makeNet: (
  options: Net.NetConnectOpts
) => Effect.Effect<Scope.Scope, Socket.SocketError, Socket.Socket>
```

Added in v1.0.0

## makeNetChannel

**Signature**

```ts
export declare const makeNetChannel: <IE = never>(
  options: Net.NetConnectOpts
) => Channel.Channel<
  never,
  IE,
  Chunk.Chunk<Uint8Array>,
  unknown,
  Socket.SocketError | IE,
  Chunk.Chunk<Uint8Array>,
  void
>
```

Added in v1.0.0

# exports

## From "../Socket.js"

Re-exports all named exports from the "../Socket.js" module.

**Signature**

```ts
export * from "../Socket.js"
```

Added in v1.0.0

# layers

## layerNet

**Signature**

```ts
export declare const layerNet: (options: Net.NetConnectOpts) => Layer.Layer<never, Socket.SocketError, Socket.Socket>
```

Added in v1.0.0
