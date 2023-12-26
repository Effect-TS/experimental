---
title: DevTools/Server.ts
nav_order: 4
parent: Modules
---

## Server overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [constructors](#constructors)
  - [make](#make)
- [models](#models)
  - [Client (interface)](#client-interface)
  - [ServerImpl (interface)](#serverimpl-interface)
- [tags](#tags)
  - [Server](#server)
  - [Server (interface)](#server-interface)

---

# constructors

## make

**Signature**

```ts
export declare const make: Effect.Effect<
  SocketServer.SocketServer,
  never,
  {
    run: <R, E, _>(
      handle: (client: Client) => Effect.Effect<R, E, _>
    ) => Effect.Effect<R, SocketServer.SocketServerError, never>
  }
>
```

Added in v1.0.0

# models

## Client (interface)

**Signature**

```ts
export interface Client {
  readonly queue: Queue.Dequeue<Domain.Request.WithoutPing>
  readonly request: (_: Domain.Response.WithoutPong) => Effect.Effect<never, never, void>
}
```

Added in v1.0.0

## ServerImpl (interface)

**Signature**

```ts
export interface ServerImpl {
  readonly run: <R, E, _>(
    handle: (client: Client) => Effect.Effect<R, E, _>
  ) => Effect.Effect<R, SocketServer.SocketServerError | E, never>
}
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
