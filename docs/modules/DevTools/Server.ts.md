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
  {
    readonly run: Effect.Effect<never, SocketServer.SocketServerError, never>
    readonly clients: Queue.Queue<Queue.Dequeue<Domain.Span>>
  }
>
```

Added in v1.0.0

# models

## ServerImpl (interface)

**Signature**

```ts
export interface ServerImpl {
  readonly run: Effect.Effect<never, SocketServer.SocketServerError, never>
  readonly clients: Queue.Dequeue<Queue.Dequeue<Domain.Span>>
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
