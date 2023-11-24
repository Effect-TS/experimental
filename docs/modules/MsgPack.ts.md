---
title: MsgPack.ts
nav_order: 1
parent: Modules
---

## MsgPack overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [constructors](#constructors)
  - [pack](#pack)
  - [unpack](#unpack)
- [errors](#errors)
  - [MsgPackError (class)](#msgpackerror-class)

---

# constructors

## pack

**Signature**

```ts
export declare const pack: <IE>() => Channel.Channel<
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

## unpack

**Signature**

```ts
export declare const unpack: Channel.Channel<
  never,
  never,
  Chunk.Chunk<Uint8Array>,
  unknown,
  MsgPackError,
  Chunk.Chunk<unknown>,
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
