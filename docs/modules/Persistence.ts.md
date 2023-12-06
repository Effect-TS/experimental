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
  - [layerResult](#layerresult)
  - [layerResultMemory](#layerresultmemory)
- [models](#models)
  - [BackingPersistence (interface)](#backingpersistence-interface)
  - [BackingPersistenceStore (interface)](#backingpersistencestore-interface)
  - [ResultPersistence (interface)](#resultpersistence-interface)
  - [ResultPersistence (namespace)](#resultpersistence-namespace)
    - [Key (interface)](#key-interface)
  - [ResultPersistenceStore (interface)](#resultpersistencestore-interface)
- [tags](#tags)
  - [BackingPersistence](#backingpersistence)
  - [ResultPersistence](#resultpersistence)
- [type ids](#type-ids)
  - [BackingPersistenceTypeId](#backingpersistencetypeid)
  - [BackingPersistenceTypeId (type alias)](#backingpersistencetypeid-type-alias)
  - [ResultPersistenceTypeId](#resultpersistencetypeid)
  - [ResultPersistenceTypeId (type alias)](#resultpersistencetypeid-type-alias)

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

## layerResult

**Signature**

```ts
export declare const layerResult: Layer.Layer<BackingPersistence, never, ResultPersistence>
```

Added in v1.0.0

## layerResultMemory

**Signature**

```ts
export declare const layerResultMemory: Layer.Layer<never, never, ResultPersistence>
```

Added in v1.0.0

# models

## BackingPersistence (interface)

**Signature**

```ts
export interface BackingPersistence {
  readonly [BackingPersistenceTypeId]: BackingPersistenceTypeId
  readonly make: (storeId: string) => Effect.Effect<never, never, BackingPersistenceStore>
}
```

Added in v1.0.0

## BackingPersistenceStore (interface)

**Signature**

```ts
export interface BackingPersistenceStore {
  readonly get: (key: string) => Effect.Effect<never, PersistenceError, Option.Option<unknown>>
  readonly getMany: (key: Array<string>) => Effect.Effect<never, PersistenceError, Array<Option.Option<unknown>>>
  readonly set: (key: string, value: unknown) => Effect.Effect<never, PersistenceError, void>
  readonly remove: (key: string) => Effect.Effect<never, PersistenceError, void>
}
```

Added in v1.0.0

## ResultPersistence (interface)

**Signature**

```ts
export interface ResultPersistence {
  readonly [ResultPersistenceTypeId]: ResultPersistenceTypeId
  readonly make: (storeId: string) => Effect.Effect<never, never, ResultPersistenceStore>
}
```

Added in v1.0.0

## ResultPersistence (namespace)

Added in v1.0.0

### Key (interface)

**Signature**

```ts
export interface Key<IE, E, IA, A> extends PrimaryKey.PrimaryKey, Serializable.WithResult<IE, E, IA, A> {
  readonly _tag: string
}
```

Added in v1.0.0

## ResultPersistenceStore (interface)

**Signature**

```ts
export interface ResultPersistenceStore {
  readonly get: <IE, E, IA, A>(
    key: ResultPersistence.Key<IE, E, IA, A>
  ) => Effect.Effect<never, PersistenceError, Option.Option<Exit.Exit<E, A>>>
  readonly getMany: <IE, E, IA, A>(
    key: ReadonlyArray<ResultPersistence.Key<IE, E, IA, A>>
  ) => Effect.Effect<never, PersistenceError, Array<Option.Option<Exit.Exit<E, A>>>>
  readonly set: <IE, E, IA, A>(
    key: ResultPersistence.Key<IE, E, IA, A>,
    value: Exit.Exit<E, A>
  ) => Effect.Effect<never, PersistenceError, void>
  readonly remove: <IE, E, IA, A>(
    key: ResultPersistence.Key<IE, E, IA, A>
  ) => Effect.Effect<never, PersistenceError, void>
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

## ResultPersistence

**Signature**

```ts
export declare const ResultPersistence: Context.Tag<ResultPersistence, ResultPersistence>
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

## ResultPersistenceTypeId

**Signature**

```ts
export declare const ResultPersistenceTypeId: typeof ResultPersistenceTypeId
```

Added in v1.0.0

## ResultPersistenceTypeId (type alias)

**Signature**

```ts
export type ResultPersistenceTypeId = typeof ResultPersistenceTypeId
```

Added in v1.0.0
