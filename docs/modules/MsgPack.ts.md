---
title: MsgPack.ts
nav_order: 1
parent: Modules
---

## MsgPack overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [combinators](#combinators)
  - [socket](#socket)
  - [socketSchema](#socketschema)
- [constructors](#constructors)
  - [pack](#pack)
  - [packSchema](#packschema)
  - [unpack](#unpack)
  - [unpackSchema](#unpackschema)
- [errors](#errors)
  - [MsgPackError (class)](#msgpackerror-class)

---

# combinators

## socket

**Signature**

```ts
export declare const socket: (
  self: Socket
) => Channel.Channel<
  never,
  never,
  Chunk.Chunk<unknown>,
  unknown,
  MsgPackError | SocketError,
  Chunk.Chunk<unknown>,
  void
>
```

Added in v1.0.0

## socketSchema

**Signature**

```ts
export declare const socketSchema: (<II, IA, OI, OA>(options: {
  readonly inputSchema: Schema.Schema<II, IA>
  readonly outputSchema: Schema.Schema<OI, OA>
}) => (
  self: Socket
) => <IE>() => Channel.Channel<
  never,
  IE,
  Chunk.Chunk<IA>,
  unknown,
  ParseError | MsgPackError | SocketError | IE,
  Chunk.Chunk<OA>,
  void
>) &
  (<II, IA, OI, OA>(
    self: Socket,
    options: { readonly inputSchema: Schema.Schema<II, IA>; readonly outputSchema: Schema.Schema<OI, OA> }
  ) => <IE>() => Channel.Channel<
    never,
    IE,
    Chunk.Chunk<IA>,
    unknown,
    ParseError | MsgPackError | SocketError | IE,
    Chunk.Chunk<OA>,
    void
  >)
```

Added in v1.0.0

# constructors

## pack

**Signature**

```ts
export declare const pack: <IE = never>() => Channel.Channel<
  never,
  IE,
  Chunk.Chunk<unknown>,
  unknown,
  IE | MsgPackError,
  Chunk.Chunk<Uint8Array>,
  void
>
```

Added in v1.0.0

## packSchema

**Signature**

```ts
export declare const packSchema: <I, A>(
  schema: Schema.Schema<I, A>
) => <IE>() => Channel.Channel<
  never,
  IE,
  Chunk.Chunk<A>,
  unknown,
  ParseError | MsgPackError | IE,
  Chunk.Chunk<Uint8Array>,
  void
>
```

Added in v1.0.0

## unpack

**Signature**

```ts
export declare const unpack: <IE = never>() => Channel.Channel<
  never,
  IE,
  Chunk.Chunk<Uint8Array>,
  unknown,
  MsgPackError | IE,
  Chunk.Chunk<unknown>,
  void
>
```

Added in v1.0.0

## unpackSchema

**Signature**

```ts
export declare const unpackSchema: <I, A>(
  schema: Schema.Schema<I, A>
) => <IE>() => Channel.Channel<
  never,
  IE,
  Chunk.Chunk<Uint8Array>,
  unknown,
  ParseError | MsgPackError | IE,
  Chunk.Chunk<A>,
  void
>
```

Added in v1.0.0

# errors

## MsgPackError (class)

**Signature**

```ts
export declare class MsgPackError
```

Added in v1.0.0
