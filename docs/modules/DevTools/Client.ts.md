---
title: DevTools/Client.ts
nav_order: 2
parent: Modules
---

## Client overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [constructors](#constructors)
  - [make](#make)
  - [makeTracer](#maketracer)
- [layers](#layers)
  - [layer](#layer)
  - [layerTracer](#layertracer)
- [models](#models)
  - [Client (interface)](#client-interface)
  - [ClientImpl (interface)](#clientimpl-interface)
- [tags](#tags)
  - [Client](#client)

---

# constructors

## make

**Signature**

```ts
export declare const make: Effect.Effect<Socket.Socket | Scope.Scope, never, ClientImpl>
```

Added in v1.0.0

## makeTracer

**Signature**

```ts
export declare const makeTracer: Effect.Effect<Client, never, Tracer.Tracer>
```

Added in v1.0.0

# layers

## layer

**Signature**

```ts
export declare const layer: Layer.Layer<Socket.Socket, never, Client>
```

Added in v1.0.0

## layerTracer

**Signature**

```ts
export declare const layerTracer: (url?: string) => Layer.Layer<never, never, never>
```

Added in v1.0.0

# models

## Client (interface)

**Signature**

```ts
export interface Client {
  readonly _: unique symbol
}
```

Added in v1.0.0

## ClientImpl (interface)

**Signature**

```ts
export interface ClientImpl {
  readonly unsafeAddSpan: (_: Domain.Span) => void
}
```

Added in v1.0.0

# tags

## Client

**Signature**

```ts
export declare const Client: Context.Tag<Client, ClientImpl>
```

Added in v1.0.0
