---
title: SocketServer/Node.ts
nav_order: 11
parent: Modules
---

## Node overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [constructors](#constructors)
  - [make](#make)
  - [makeWebSocket](#makewebsocket)
- [exports](#exports)
  - [From "../SocketServer.js"](#from-socketserverjs)
- [layers](#layers)
  - [layer](#layer)
  - [layerWebSocket](#layerwebsocket)

---

# constructors

## make

**Signature**

```ts
export declare const make: (
  options: Net.ServerOpts & Net.ListenOptions
) => Effect.Effect<Scope.Scope, SocketServer.SocketServerError, SocketServer.SocketServer>
```

Added in v1.0.0

## makeWebSocket

**Signature**

```ts
export declare const makeWebSocket: (
  options: WS.ServerOptions
) => Effect.Effect<Scope.Scope, SocketServer.SocketServerError, SocketServer.SocketServer>
```

Added in v1.0.0

# exports

## From "../SocketServer.js"

Re-exports all named exports from the "../SocketServer.js" module.

**Signature**

```ts
export * from "../SocketServer.js"
```

Added in v1.0.0

# layers

## layer

**Signature**

```ts
export declare const layer: (
  options: Net.ServerOpts & Net.ListenOptions
) => Layer.Layer<never, SocketServer.SocketServerError, SocketServer.SocketServer>
```

Added in v1.0.0

## layerWebSocket

**Signature**

```ts
export declare const layerWebSocket: (
  options: WS.ServerOptions
) => Layer.Layer<never, SocketServer.SocketServerError, SocketServer.SocketServer>
```

Added in v1.0.0
