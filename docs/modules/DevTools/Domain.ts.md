---
title: DevTools/Domain.ts
nav_order: 3
parent: Modules
---

## Domain overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [schemas](#schemas)
  - [ExternalSpan](#externalspan)
  - [ExternalSpan (interface)](#externalspan-interface)
  - [ExternalSpanFrom (interface)](#externalspanfrom-interface)
  - [ParentSpan](#parentspan)
  - [ParentSpan (type alias)](#parentspan-type-alias)
  - [ParentSpanFrom (type alias)](#parentspanfrom-type-alias)
  - [Ping](#ping)
  - [Pong](#pong)
  - [Request](#request)
  - [Request (type alias)](#request-type-alias)
  - [Response](#response)
  - [Response (type alias)](#response-type-alias)
  - [Span](#span)
  - [Span (interface)](#span-interface)
  - [SpanFrom (interface)](#spanfrom-interface)
  - [SpanStatus](#spanstatus)
  - [SpanStatusEnded](#spanstatusended)
  - [SpanStatusStarted](#spanstatusstarted)

---

# schemas

## ExternalSpan

**Signature**

```ts
export declare const ExternalSpan: Schema.Schema<
  { readonly _tag: "ExternalSpan"; readonly spanId: string; readonly traceId: string; readonly sampled: boolean },
  { readonly _tag: "ExternalSpan"; readonly spanId: string; readonly traceId: string; readonly sampled: boolean }
>
```

Added in v1.0.0

## ExternalSpan (interface)

**Signature**

```ts
export interface ExternalSpan extends Schema.Schema.To<typeof ExternalSpan> {}
```

Added in v1.0.0

## ExternalSpanFrom (interface)

**Signature**

```ts
export interface ExternalSpanFrom extends Schema.Schema.From<typeof ExternalSpan> {}
```

Added in v1.0.0

## ParentSpan

**Signature**

```ts
export declare const ParentSpan: Schema.Schema<
  | SpanFrom
  | { readonly _tag: "ExternalSpan"; readonly spanId: string; readonly traceId: string; readonly sampled: boolean },
  Span | { readonly _tag: "ExternalSpan"; readonly spanId: string; readonly traceId: string; readonly sampled: boolean }
>
```

Added in v1.0.0

## ParentSpan (type alias)

**Signature**

```ts
export type ParentSpan = Span | ExternalSpan
```

Added in v1.0.0

## ParentSpanFrom (type alias)

**Signature**

```ts
export type ParentSpanFrom = SpanFrom | ExternalSpanFrom
```

Added in v1.0.0

## Ping

**Signature**

```ts
export declare const Ping: Schema.Schema<{ readonly _tag: "Ping" }, { readonly _tag: "Ping" }>
```

Added in v1.0.0

## Pong

**Signature**

```ts
export declare const Pong: Schema.Schema<{ readonly _tag: "Pong" }, { readonly _tag: "Pong" }>
```

Added in v1.0.0

## Request

**Signature**

```ts
export declare const Request: Schema.Schema<{ readonly _tag: "Ping" } | SpanFrom, Span | { readonly _tag: "Ping" }>
```

Added in v1.0.0

## Request (type alias)

**Signature**

```ts
export type Request = Schema.Schema.To<typeof Request>
```

Added in v1.0.0

## Response

**Signature**

```ts
export declare const Response: Schema.Schema<{ readonly _tag: "Pong" }, { readonly _tag: "Pong" }>
```

Added in v1.0.0

## Response (type alias)

**Signature**

```ts
export type Response = Schema.Schema.To<typeof Response>
```

Added in v1.0.0

## Span

**Signature**

```ts
export declare const Span: Schema.Schema<SpanFrom, Span>
```

Added in v1.0.0

## Span (interface)

**Signature**

```ts
export interface Span {
  readonly _tag: "Span"
  readonly spanId: string
  readonly traceId: string
  readonly name: string
  readonly sampled: boolean
  readonly attributes: ReadonlyMap<string, unknown>
  readonly parent: Option<ParentSpan>
  readonly status:
    | {
        readonly _tag: "Started"
        readonly startTime: bigint
      }
    | {
        readonly _tag: "Ended"
        readonly startTime: bigint
        readonly endTime: bigint
      }
}
```

Added in v1.0.0

## SpanFrom (interface)

**Signature**

```ts
export interface SpanFrom {
  readonly _tag: "Span"
  readonly spanId: string
  readonly traceId: string
  readonly name: string
  readonly sampled: boolean
  readonly attributes: ReadonlyArray<readonly [string, unknown]>
  readonly parent: Schema.OptionFrom<ParentSpanFrom>
  readonly status:
    | {
        readonly _tag: "Started"
        readonly startTime: string
      }
    | {
        readonly _tag: "Ended"
        readonly startTime: string
        readonly endTime: string
      }
}
```

Added in v1.0.0

## SpanStatus

**Signature**

```ts
export declare const SpanStatus: Schema.Schema<
  | { readonly _tag: "Started"; readonly startTime: string }
  | { readonly _tag: "Ended"; readonly startTime: string; readonly endTime: string },
  | { readonly _tag: "Started"; readonly startTime: bigint }
  | { readonly _tag: "Ended"; readonly startTime: bigint; readonly endTime: bigint }
>
```

Added in v1.0.0

## SpanStatusEnded

**Signature**

```ts
export declare const SpanStatusEnded: Schema.Schema<
  { readonly _tag: "Ended"; readonly startTime: string; readonly endTime: string },
  { readonly _tag: "Ended"; readonly startTime: bigint; readonly endTime: bigint }
>
```

Added in v1.0.0

## SpanStatusStarted

**Signature**

```ts
export declare const SpanStatusStarted: Schema.Schema<
  { readonly _tag: "Started"; readonly startTime: string },
  { readonly _tag: "Started"; readonly startTime: bigint }
>
```

Added in v1.0.0
