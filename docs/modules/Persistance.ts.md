---
title: Persistance.ts
nav_order: 1
parent: Modules
---

## Persistance overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [errors](#errors)
  - [PersistanceBackingError (class)](#persistancebackingerror-class)
  - [PersistanceError (type alias)](#persistanceerror-type-alias)
  - [PersistanceSchemaError (class)](#persistanceschemaerror-class)
- [layers](#layers)
  - [layerMemory](#layermemory)
  - [layerSchema](#layerschema)
  - [layerSchemaMemory](#layerschemamemory)
- [models](#models)
  - [BackingPersistance (interface)](#backingpersistance-interface)
  - [Persistance (interface)](#persistance-interface)
  - [SchemaPersistance (interface)](#schemapersistance-interface)
- [tags](#tags)
  - [BackingPersistance](#backingpersistance)
  - [SchemaPersistance](#schemapersistance)
- [type ids](#type-ids)
  - [BackingPersistanceTypeId](#backingpersistancetypeid)
  - [BackingPersistanceTypeId (type alias)](#backingpersistancetypeid-type-alias)
  - [SchemaPersistanceTypeId](#schemapersistancetypeid)
  - [SchemaPersistanceTypeId (type alias)](#schemapersistancetypeid-type-alias)
- [utils](#utils)
  - [Persistance](#persistance)

---

# errors

## PersistanceBackingError (class)

**Signature**

```ts
export declare class PersistanceBackingError
```

Added in v1.0.0

## PersistanceError (type alias)

**Signature**

```ts
export type PersistanceError = PersistanceSchemaError | PersistanceBackingError
```

Added in v1.0.0

## PersistanceSchemaError (class)

**Signature**

```ts
export declare class PersistanceSchemaError
```

Added in v1.0.0

# layers

## layerMemory

**Signature**

```ts
export declare const layerMemory: Layer.Layer<never, never, BackingPersistance>
```

Added in v1.0.0

## layerSchema

**Signature**

```ts
export declare const layerSchema: Layer.Layer<BackingPersistance, never, SchemaPersistance>
```

Added in v1.0.0

## layerSchemaMemory

**Signature**

```ts
export declare const layerSchemaMemory: Layer.Layer<never, never, SchemaPersistance>
```

Added in v1.0.0

# models

## BackingPersistance (interface)

**Signature**

```ts
export interface BackingPersistance {
  readonly [BackingPersistanceTypeId]: BackingPersistanceTypeId
  readonly make: (storeId: string) => Effect.Effect<never, never, Persistance<unknown>>
}
```

Added in v1.0.0

## Persistance (interface)

**Signature**

```ts
export interface Persistance<A> {
  readonly get: (key: string) => Effect.Effect<never, PersistanceError, Option.Option<A>>
  readonly getMany: (key: Array<string>) => Effect.Effect<never, PersistanceError, Array<Option.Option<A>>>
  readonly set: (key: string, value: A) => Effect.Effect<never, PersistanceError, void>
  readonly remove: (key: string) => Effect.Effect<never, PersistanceError, void>
}
```

Added in v1.0.0

## SchemaPersistance (interface)

**Signature**

```ts
export interface SchemaPersistance {
  readonly [SchemaPersistanceTypeId]: SchemaPersistanceTypeId
  readonly make: <I, A>(storeId: string, schema: Schema.Schema<I, A>) => Effect.Effect<never, never, Persistance<A>>
}
```

Added in v1.0.0

# tags

## BackingPersistance

**Signature**

```ts
export declare const BackingPersistance: Context.Tag<BackingPersistance, BackingPersistance>
```

Added in v1.0.0

## SchemaPersistance

**Signature**

```ts
export declare const SchemaPersistance: Context.Tag<SchemaPersistance, SchemaPersistance>
```

Added in v1.0.0

# type ids

## BackingPersistanceTypeId

**Signature**

```ts
export declare const BackingPersistanceTypeId: typeof BackingPersistanceTypeId
```

Added in v1.0.0

## BackingPersistanceTypeId (type alias)

**Signature**

```ts
export type BackingPersistanceTypeId = typeof BackingPersistanceTypeId
```

Added in v1.0.0

## SchemaPersistanceTypeId

**Signature**

```ts
export declare const SchemaPersistanceTypeId: typeof SchemaPersistanceTypeId
```

Added in v1.0.0

## SchemaPersistanceTypeId (type alias)

**Signature**

```ts
export type SchemaPersistanceTypeId = typeof SchemaPersistanceTypeId
```

Added in v1.0.0

# utils

## Persistance

**Signature**

```ts
export declare const Persistance: <A>(_: Persistance<A>) => Persistance<A>
```

Added in v1.0.0
