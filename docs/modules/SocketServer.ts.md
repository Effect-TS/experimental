---
title: SocketServer.ts
nav_order: 6
parent: Modules
---

## SocketServer overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [errors](#errors)
  - [SocketServerError (class)](#socketservererror-class)
    - [toString (method)](#tostring-method)
- [models](#models)
  - [Address (type alias)](#address-type-alias)
  - [SocketServer (interface)](#socketserver-interface)
  - [TcpAddress (interface)](#tcpaddress-interface)
  - [UnixAddress (interface)](#unixaddress-interface)
- [tags](#tags)
  - [SocketServer](#socketserver)
- [type ids](#type-ids)
  - [SocketServerTypeId](#socketservertypeid)
  - [SocketServerTypeId (type alias)](#socketservertypeid-type-alias)

---

# errors

## SocketServerError (class)

**Signature**

```ts
export declare class SocketServerError
```

Added in v1.0.0

### toString (method)

**Signature**

```ts
toString(): string
```

Added in v1.0.0

# models

## Address (type alias)

**Signature**

```ts
export type Address = UnixAddress | TcpAddress
```

Added in v1.0.0

## SocketServer (interface)

**Signature**

```ts
export interface SocketServer {
  readonly [SocketServerTypeId]: SocketServerTypeId
  readonly address: Address
  readonly join: Effect.Effect<never, SocketServerError, never>
  readonly take: Effect.Effect<Scope.Scope, never, Socket.Socket>
}
```

Added in v1.0.0

## TcpAddress (interface)

**Signature**

```ts
export interface TcpAddress {
  readonly _tag: "TcpAddress"
  readonly hostname: string
  readonly port: number
}
```

Added in v1.0.0

## UnixAddress (interface)

**Signature**

```ts
export interface UnixAddress {
  readonly _tag: "UnixAddress"
  readonly path: string
}
```

Added in v1.0.0

# tags

## SocketServer

**Signature**

```ts
export declare const SocketServer: Context.Tag<SocketServer, SocketServer>
```

Added in v1.0.0

# type ids

## SocketServerTypeId

**Signature**

```ts
export declare const SocketServerTypeId: typeof SocketServerTypeId
```

Added in v1.0.0

## SocketServerTypeId (type alias)

**Signature**

```ts
export type SocketServerTypeId = typeof SocketServerTypeId
```

Added in v1.0.0
