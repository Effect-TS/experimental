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
  - [withInputError](#withinputerror)
- [errors](#errors)
  - [SocketError (class)](#socketerror-class)
- [models](#models)
  - [Socket (interface)](#socket-interface)
  - [SocketPlatform (interface)](#socketplatform-interface)
- [tags](#tags)
  - [SocketPlatform](#socketplatform)
- [type ids](#type-ids)
  - [SocketPlatformTypeId](#socketplatformtypeid)
  - [SocketPlatformTypeId (type alias)](#socketplatformtypeid-type-alias)

---

# combinators

## withInputError

**Signature**

```ts
export declare const withInputError: <IE>(self: Socket) => Socket<IE>
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
export interface Socket<IE = never>
  extends Channel<never, IE, Chunk<Uint8Array>, unknown, IE | SocketError, Chunk<Uint8Array>, void> {}
```

Added in v1.0.0

## SocketPlatform (interface)

**Signature**

```ts
export interface SocketPlatform {
  readonly [SocketPlatformTypeId]: SocketPlatformTypeId
  readonly open: (
    options:
      | {
          readonly port: number
          readonly host: string
        }
      | {
          readonly path: string
        }
  ) => Socket
}
```

Added in v1.0.0

# tags

## SocketPlatform

**Signature**

```ts
export declare const SocketPlatform: Context.Tag<SocketPlatform, SocketPlatform>
```

Added in v1.0.0

# type ids

## SocketPlatformTypeId

**Signature**

```ts
export declare const SocketPlatformTypeId: typeof SocketPlatformTypeId
```

Added in v1.0.0

## SocketPlatformTypeId (type alias)

**Signature**

```ts
export type SocketPlatformTypeId = typeof SocketPlatformTypeId
```

Added in v1.0.0
