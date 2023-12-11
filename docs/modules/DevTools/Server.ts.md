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
  SocketServer.SocketServer | Scope,
  never,
  { run: Effect.Effect<never, SocketServer.SocketServerError, never>; clients: Queue.Queue<Client> }
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
  readonly run: Effect.Effect<never, SocketServer.SocketServerError, never>
  readonly clients: Queue.Dequeue<Client>
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
