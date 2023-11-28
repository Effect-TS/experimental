---
title: Persistence.ts
nav_order: 2
parent: Modules
---

## Persistence overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [errors](#errors)
  - [PersistenceBackingError (class)](#persistencebackingerror-class)
  - [PersistenceError (type alias)](#persistenceerror-type-alias)
  - [PersistenceSchemaError (class)](#persistenceschemaerror-class)
- [layers](#layers)
  - [layerMemory](#layermemory)
  - [layerSchema](#layerschema)
  - [layerSchemaMemory](#layerschemamemory)
- [models](#models)
  - [BackingPersistence (interface)](#backingpersistence-interface)
  - [Persistence (interface)](#persistence-interface)
  - [SchemaPersistence (interface)](#schemapersistence-interface)
- [tags](#tags)
  - [BackingPersistence](#backingpersistence)
  - [SchemaPersistence](#schemapersistence)
- [type ids](#type-ids)
  - [BackingPersistenceTypeId](#backingpersistencetypeid)
  - [BackingPersistenceTypeId (type alias)](#backingpersistencetypeid-type-alias)
  - [SchemaPersistenceTypeId](#schemapersistencetypeid)
  - [SchemaPersistenceTypeId (type alias)](#schemapersistencetypeid-type-alias)
- [utils](#utils)
  - [Persistence](#persistence)

---

# errors

## PersistenceBackingError (class)

**Signature**

```ts
export declare class PersistenceBackingError
```

Added in v1.0.0

## PersistenceError (type alias)

**Signature**

```ts
export type PersistenceError = PersistenceSchemaError | PersistenceBackingError
```

Added in v1.0.0

## PersistenceSchemaError (class)

**Signature**

```ts
export declare class PersistenceSchemaError
```

Added in v1.0.0

# layers

## layerMemory

**Signature**

```ts
export declare const layerMemory: Layer.Layer<never, never, BackingPersistence>
```

Added in v1.0.0

## layerSchema

**Signature**

```ts
export declare const layerSchema: Layer.Layer<BackingPersistence, never, SchemaPersistence>
```

Added in v1.0.0

## layerSchemaMemory

**Signature**

```ts
export declare const layerSchemaMemory: Layer.Layer<never, never, SchemaPersistence>
```

Added in v1.0.0

# models

## BackingPersistence (interface)

**Signature**

```ts
export interface BackingPersistence {
  readonly [BackingPersistenceTypeId]: BackingPersistenceTypeId
  readonly make: (storeId: string) => Effect.Effect<never, never, Persistence<unknown>>
}
```

Added in v1.0.0

## Persistence (interface)

**Signature**

```ts
export interface Persistence<A> {
  readonly get: (key: string) => Effect.Effect<never, PersistenceError, Option.Option<A>>
  readonly getMany: (key: Array<string>) => Effect.Effect<never, PersistenceError, Array<Option.Option<A>>>
  readonly set: (key: string, value: A) => Effect.Effect<never, PersistenceError, void>
  readonly remove: (key: string) => Effect.Effect<never, PersistenceError, void>
}
```

Added in v1.0.0

## SchemaPersistence (interface)

**Signature**

```ts
export interface SchemaPersistence {
  readonly [SchemaPersistenceTypeId]: SchemaPersistenceTypeId
  readonly make: <I, A>(storeId: string, schema: Schema.Schema<I, A>) => Effect.Effect<never, never, Persistence<A>>
}
```

Added in v1.0.0

# tags

## BackingPersistence

**Signature**

```ts
export declare const BackingPersistence: Context.Tag<BackingPersistence, BackingPersistence>
```

Added in v1.0.0

## SchemaPersistence

**Signature**

```ts
export declare const SchemaPersistence: Context.Tag<SchemaPersistence, SchemaPersistence>
```

Added in v1.0.0

# type ids

## BackingPersistenceTypeId

**Signature**

```ts
export declare const BackingPersistenceTypeId: typeof BackingPersistenceTypeId
```

Added in v1.0.0

## BackingPersistenceTypeId (type alias)

**Signature**

```ts
export type BackingPersistenceTypeId = typeof BackingPersistenceTypeId
```

Added in v1.0.0

## SchemaPersistenceTypeId

**Signature**

```ts
export declare const SchemaPersistenceTypeId: typeof SchemaPersistenceTypeId
```

Added in v1.0.0

## SchemaPersistenceTypeId (type alias)

**Signature**

```ts
export type SchemaPersistenceTypeId = typeof SchemaPersistenceTypeId
```

Added in v1.0.0

# utils

## Persistence

**Signature**

```ts
export declare const Persistence: <A>(_: Persistence<A>) => Persistence<A>
```

Added in v1.0.0
