---
title: MsgPack.ts
nav_order: 2
parent: Modules
---

## MsgPack overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [combinators](#combinators)
  - [duplex](#duplex)
  - [duplexSchema](#duplexschema)
- [constructors](#constructors)
  - [pack](#pack)
  - [packSchema](#packschema)
  - [unpack](#unpack)
  - [unpackSchema](#unpackschema)
- [errors](#errors)
  - [MsgPackError (class)](#msgpackerror-class)

---

# combinators

## duplex

**Signature**

```ts
export declare const duplex: <R, IE, OE>(
  self: Channel.Channel<R, MsgPackError | IE, Chunk.Chunk<Uint8Array>, unknown, OE, Chunk.Chunk<Uint8Array>, void>
) => Channel.Channel<R, IE, Chunk.Chunk<unknown>, unknown, MsgPackError | OE, Chunk.Chunk<unknown>, void>
```

Added in v1.0.0

## duplexSchema

**Signature**

```ts
export declare const duplexSchema: {
  <II, IA, OI, OA>(options: {
    readonly inputSchema: Schema.Schema<II, IA>
    readonly outputSchema: Schema.Schema<OI, OA>
  }): <R, InErr, OutErr>(
    self: Channel.Channel<
      R,
      ParseError | MsgPackError | InErr,
      Chunk.Chunk<Uint8Array>,
      unknown,
      OutErr,
      Chunk.Chunk<Uint8Array>,
      void
    >
  ) => Channel.Channel<R, InErr, Chunk.Chunk<IA>, unknown, ParseError | MsgPackError | OutErr, Chunk.Chunk<OA>, void>
  <R, InErr, OutErr, II, IA, OI, OA>(
    self: Channel.Channel<
      R,
      ParseError | MsgPackError | InErr,
      Chunk.Chunk<Uint8Array>,
      unknown,
      OutErr,
      Chunk.Chunk<Uint8Array>,
      void
    >,
    options: { readonly inputSchema: Schema.Schema<II, IA>; readonly outputSchema: Schema.Schema<OI, OA> }
  ): Channel.Channel<R, InErr, Chunk.Chunk<IA>, unknown, ParseError | MsgPackError | OutErr, Chunk.Chunk<OA>, void>
}
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
) => <IE = never>() => Channel.Channel<
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
) => <IE = never>() => Channel.Channel<
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
