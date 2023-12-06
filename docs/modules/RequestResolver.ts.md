---
title: RequestResolver.ts
nav_order: 3
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
export declare const persisted: ((
  storeId: string
) => <Req extends Schema.TaggedRequest.Any & PrimaryKey.PrimaryKey>(
  self: RequestResolver.RequestResolver<Req, never>
) => Effect.Effect<Scope.Scope | Persistence.ResultPersistence, never, RequestResolver.RequestResolver<Req, never>>) &
  (<Req extends Schema.TaggedRequest.Any & PrimaryKey.PrimaryKey>(
    self: RequestResolver.RequestResolver<Req, never>,
    storeId: string
  ) => Effect.Effect<Scope.Scope | Persistence.ResultPersistence, never, RequestResolver.RequestResolver<Req, never>>)
```

Added in v1.0.0
