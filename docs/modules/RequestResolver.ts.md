---
title: RequestResolver.ts
nav_order: 2
parent: Modules
---

## RequestResolver overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [combinators](#combinators)
  - [dataLoader](#dataloader)
  - [persisted](#persisted)

---

# combinators

## dataLoader

**Signature**

```ts
export declare const dataLoader: ((options: {
  readonly window: Duration.DurationInput
  readonly maxBatchSize?: number
}) => <A extends Request.Request<any, any>>(
  self: RequestResolver.RequestResolver<A, never>
) => Effect.Effect<Scope.Scope, never, RequestResolver.RequestResolver<A, never>>) &
  (<A extends Request.Request<any, any>>(
    self: RequestResolver.RequestResolver<A, never>,
    options: { readonly window: Duration.DurationInput; readonly maxBatchSize?: number }
  ) => Effect.Effect<Scope.Scope, never, RequestResolver.RequestResolver<A, never>>)
```

Added in v1.0.0

## persisted

**Signature**

```ts
export declare const persisted: (<EI, EA, AI, AA>(options: {
  readonly storeId: string
  readonly failureSchema: Schema.Schema<EI, EA>
  readonly successSchema: Schema.Schema<AI, AA>
}) => <Req extends Request.Request<EA, AA> & { readonly _tag: string } & PrimaryKey.PrimaryKey>(
  self: RequestResolver.RequestResolver<Req, never>
) => Effect.Effect<Scope.Scope | Persistance.SchemaPersistance, never, RequestResolver.RequestResolver<Req, never>>) &
  (<Req extends Request.Request<EA, AA> & { readonly _tag: string } & PrimaryKey.PrimaryKey, EI, EA, AI, AA>(
    self: RequestResolver.RequestResolver<Req, never>,
    options: {
      readonly storeId: string
      readonly failureSchema: Schema.Schema<EI, EA>
      readonly successSchema: Schema.Schema<AI, AA>
    }
  ) => Effect.Effect<Scope.Scope | Persistance.SchemaPersistance, never, RequestResolver.RequestResolver<Req, never>>)
```

Added in v1.0.0
