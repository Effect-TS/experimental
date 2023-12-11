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
  - [Counter](#counter)
  - [ExternalSpan](#externalspan)
  - [ExternalSpan (interface)](#externalspan-interface)
  - [ExternalSpanFrom (interface)](#externalspanfrom-interface)
  - [Frequency](#frequency)
  - [Gauge](#gauge)
  - [Histogram](#histogram)
  - [Metric](#metric)
  - [Metric (type alias)](#metric-type-alias)
  - [MetricFrom (type alias)](#metricfrom-type-alias)
  - [MetricLabel](#metriclabel)
  - [MetricsRequest](#metricsrequest)
  - [MetricsSnapshot](#metricssnapshot)
  - [MetricsSnapshot (type alias)](#metricssnapshot-type-alias)
  - [MetricsSnapshotFrom (type alias)](#metricssnapshotfrom-type-alias)
  - [ParentSpan](#parentspan)
  - [ParentSpan (type alias)](#parentspan-type-alias)
  - [ParentSpanFrom (type alias)](#parentspanfrom-type-alias)
  - [Ping](#ping)
  - [Pong](#pong)
  - [Request](#request)
  - [Request (type alias)](#request-type-alias)
  - [Request (namespace)](#request-namespace)
    - [WithoutPing (type alias)](#withoutping-type-alias)
  - [Response](#response)
  - [Response (type alias)](#response-type-alias)
  - [Response (namespace)](#response-namespace)
    - [WithoutPong (type alias)](#withoutpong-type-alias)
  - [Span](#span)
  - [Span (interface)](#span-interface)
  - [SpanFrom (interface)](#spanfrom-interface)
  - [SpanStatus](#spanstatus)
  - [SpanStatusEnded](#spanstatusended)
  - [SpanStatusStarted](#spanstatusstarted)
  - [Summary](#summary)
  - [metric](#metric-1)

---

# schemas

## Counter

**Signature**

```ts
export declare const Counter: Schema.Schema<
  {
    readonly _tag: "Counter"
    readonly name: string
    readonly tags: readonly { readonly value: string; readonly key: string }[]
    readonly state: { readonly count: string | number }
    readonly description?: string | undefined
  },
  {
    readonly _tag: "Counter"
    readonly name: string
    readonly description: Option<string>
    readonly tags: readonly { readonly value: string; readonly key: string }[]
    readonly state: { readonly count: number | bigint }
  }
>
```

Added in v1.0.0

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

## Frequency

**Signature**

```ts
export declare const Frequency: Schema.Schema<
  {
    readonly _tag: "Frequency"
    readonly name: string
    readonly tags: readonly { readonly value: string; readonly key: string }[]
    readonly state: { readonly occurrences: { readonly [x: string]: number } }
    readonly description?: string | undefined
  },
  {
    readonly _tag: "Frequency"
    readonly name: string
    readonly description: Option<string>
    readonly tags: readonly { readonly value: string; readonly key: string }[]
    readonly state: { readonly occurrences: { readonly [x: string]: number } }
  }
>
```

Added in v1.0.0

## Gauge

**Signature**

```ts
export declare const Gauge: Schema.Schema<
  {
    readonly _tag: "Gauge"
    readonly name: string
    readonly tags: readonly { readonly value: string; readonly key: string }[]
    readonly state: { readonly value: string | number }
    readonly description?: string | undefined
  },
  {
    readonly _tag: "Gauge"
    readonly name: string
    readonly description: Option<string>
    readonly tags: readonly { readonly value: string; readonly key: string }[]
    readonly state: { readonly value: number | bigint }
  }
>
```

Added in v1.0.0

## Histogram

**Signature**

```ts
export declare const Histogram: Schema.Schema<
  {
    readonly _tag: "Histogram"
    readonly name: string
    readonly tags: readonly { readonly value: string; readonly key: string }[]
    readonly state: {
      readonly count: number
      readonly buckets: readonly (readonly [number, number])[]
      readonly min: number
      readonly max: number
      readonly sum: number
    }
    readonly description?: string | undefined
  },
  {
    readonly _tag: "Histogram"
    readonly name: string
    readonly description: Option<string>
    readonly tags: readonly { readonly value: string; readonly key: string }[]
    readonly state: {
      readonly count: number
      readonly buckets: readonly (readonly [number, number])[]
      readonly min: number
      readonly max: number
      readonly sum: number
    }
  }
>
```

Added in v1.0.0

## Metric

**Signature**

```ts
export declare const Metric: Schema.Schema<
  | {
      readonly _tag: "Counter"
      readonly name: string
      readonly tags: readonly { readonly value: string; readonly key: string }[]
      readonly state: { readonly count: string | number }
      readonly description?: string | undefined
    }
  | {
      readonly _tag: "Frequency"
      readonly name: string
      readonly tags: readonly { readonly value: string; readonly key: string }[]
      readonly state: { readonly occurrences: { readonly [x: string]: number } }
      readonly description?: string | undefined
    }
  | {
      readonly _tag: "Gauge"
      readonly name: string
      readonly tags: readonly { readonly value: string; readonly key: string }[]
      readonly state: { readonly value: string | number }
      readonly description?: string | undefined
    }
  | {
      readonly _tag: "Histogram"
      readonly name: string
      readonly tags: readonly { readonly value: string; readonly key: string }[]
      readonly state: {
        readonly count: number
        readonly buckets: readonly (readonly [number, number])[]
        readonly min: number
        readonly max: number
        readonly sum: number
      }
      readonly description?: string | undefined
    }
  | {
      readonly _tag: "Summary"
      readonly name: string
      readonly tags: readonly { readonly value: string; readonly key: string }[]
      readonly state: {
        readonly error: number
        readonly count: number
        readonly min: number
        readonly max: number
        readonly sum: number
        readonly quantiles: readonly (readonly [number, Schema.OptionFrom<number>])[]
      }
      readonly description?: string | undefined
    },
  | {
      readonly _tag: "Counter"
      readonly name: string
      readonly description: Option<string>
      readonly tags: readonly { readonly value: string; readonly key: string }[]
      readonly state: { readonly count: number | bigint }
    }
  | {
      readonly _tag: "Frequency"
      readonly name: string
      readonly description: Option<string>
      readonly tags: readonly { readonly value: string; readonly key: string }[]
      readonly state: { readonly occurrences: { readonly [x: string]: number } }
    }
  | {
      readonly _tag: "Gauge"
      readonly name: string
      readonly description: Option<string>
      readonly tags: readonly { readonly value: string; readonly key: string }[]
      readonly state: { readonly value: number | bigint }
    }
  | {
      readonly _tag: "Histogram"
      readonly name: string
      readonly description: Option<string>
      readonly tags: readonly { readonly value: string; readonly key: string }[]
      readonly state: {
        readonly count: number
        readonly buckets: readonly (readonly [number, number])[]
        readonly min: number
        readonly max: number
        readonly sum: number
      }
    }
  | {
      readonly _tag: "Summary"
      readonly name: string
      readonly description: Option<string>
      readonly tags: readonly { readonly value: string; readonly key: string }[]
      readonly state: {
        readonly error: number
        readonly count: number
        readonly min: number
        readonly max: number
        readonly sum: number
        readonly quantiles: readonly (readonly [number, Option<number>])[]
      }
    }
>
```

Added in v1.0.0

## Metric (type alias)

**Signature**

```ts
export type Metric = Schema.Schema.To<typeof Metric>
```

Added in v1.0.0

## MetricFrom (type alias)

**Signature**

```ts
export type MetricFrom = Schema.Schema.From<typeof Metric>
```

Added in v1.0.0

## MetricLabel

**Signature**

```ts
export declare const MetricLabel: Schema.Schema<
  { readonly value: string; readonly key: string },
  { readonly value: string; readonly key: string }
>
```

Added in v1.0.0

## MetricsRequest

**Signature**

```ts
export declare const MetricsRequest: Schema.Schema<
  { readonly _tag: "MetricsRequest" },
  { readonly _tag: "MetricsRequest" }
>
```

Added in v1.0.0

## MetricsSnapshot

**Signature**

```ts
export declare const MetricsSnapshot: Schema.Schema<
  {
    readonly _tag: "MetricsSnapshot"
    readonly metrics: readonly (
      | {
          readonly _tag: "Counter"
          readonly name: string
          readonly tags: readonly { readonly value: string; readonly key: string }[]
          readonly state: { readonly count: string | number }
          readonly description?: string | undefined
        }
      | {
          readonly _tag: "Frequency"
          readonly name: string
          readonly tags: readonly { readonly value: string; readonly key: string }[]
          readonly state: { readonly occurrences: { readonly [x: string]: number } }
          readonly description?: string | undefined
        }
      | {
          readonly _tag: "Gauge"
          readonly name: string
          readonly tags: readonly { readonly value: string; readonly key: string }[]
          readonly state: { readonly value: string | number }
          readonly description?: string | undefined
        }
      | {
          readonly _tag: "Histogram"
          readonly name: string
          readonly tags: readonly { readonly value: string; readonly key: string }[]
          readonly state: {
            readonly count: number
            readonly buckets: readonly (readonly [number, number])[]
            readonly min: number
            readonly max: number
            readonly sum: number
          }
          readonly description?: string | undefined
        }
      | {
          readonly _tag: "Summary"
          readonly name: string
          readonly tags: readonly { readonly value: string; readonly key: string }[]
          readonly state: {
            readonly error: number
            readonly count: number
            readonly min: number
            readonly max: number
            readonly sum: number
            readonly quantiles: readonly (readonly [number, Schema.OptionFrom<number>])[]
          }
          readonly description?: string | undefined
        }
    )[]
  },
  {
    readonly _tag: "MetricsSnapshot"
    readonly metrics: readonly (
      | {
          readonly _tag: "Counter"
          readonly name: string
          readonly description: Option<string>
          readonly tags: readonly { readonly value: string; readonly key: string }[]
          readonly state: { readonly count: number | bigint }
        }
      | {
          readonly _tag: "Frequency"
          readonly name: string
          readonly description: Option<string>
          readonly tags: readonly { readonly value: string; readonly key: string }[]
          readonly state: { readonly occurrences: { readonly [x: string]: number } }
        }
      | {
          readonly _tag: "Gauge"
          readonly name: string
          readonly description: Option<string>
          readonly tags: readonly { readonly value: string; readonly key: string }[]
          readonly state: { readonly value: number | bigint }
        }
      | {
          readonly _tag: "Histogram"
          readonly name: string
          readonly description: Option<string>
          readonly tags: readonly { readonly value: string; readonly key: string }[]
          readonly state: {
            readonly count: number
            readonly buckets: readonly (readonly [number, number])[]
            readonly min: number
            readonly max: number
            readonly sum: number
          }
        }
      | {
          readonly _tag: "Summary"
          readonly name: string
          readonly description: Option<string>
          readonly tags: readonly { readonly value: string; readonly key: string }[]
          readonly state: {
            readonly error: number
            readonly count: number
            readonly min: number
            readonly max: number
            readonly sum: number
            readonly quantiles: readonly (readonly [number, Option<number>])[]
          }
        }
    )[]
  }
>
```

Added in v1.0.0

## MetricsSnapshot (type alias)

**Signature**

```ts
export type MetricsSnapshot = Schema.Schema.To<typeof MetricsSnapshot>
```

Added in v1.0.0

## MetricsSnapshotFrom (type alias)

**Signature**

```ts
export type MetricsSnapshotFrom = Schema.Schema.From<typeof MetricsSnapshot>
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
export declare const Request: Schema.Schema<
  | { readonly _tag: "Ping" }
  | SpanFrom
  | {
      readonly _tag: "MetricsSnapshot"
      readonly metrics: readonly (
        | {
            readonly _tag: "Counter"
            readonly name: string
            readonly tags: readonly { readonly value: string; readonly key: string }[]
            readonly state: { readonly count: string | number }
            readonly description?: string | undefined
          }
        | {
            readonly _tag: "Frequency"
            readonly name: string
            readonly tags: readonly { readonly value: string; readonly key: string }[]
            readonly state: { readonly occurrences: { readonly [x: string]: number } }
            readonly description?: string | undefined
          }
        | {
            readonly _tag: "Gauge"
            readonly name: string
            readonly tags: readonly { readonly value: string; readonly key: string }[]
            readonly state: { readonly value: string | number }
            readonly description?: string | undefined
          }
        | {
            readonly _tag: "Histogram"
            readonly name: string
            readonly tags: readonly { readonly value: string; readonly key: string }[]
            readonly state: {
              readonly count: number
              readonly buckets: readonly (readonly [number, number])[]
              readonly min: number
              readonly max: number
              readonly sum: number
            }
            readonly description?: string | undefined
          }
        | {
            readonly _tag: "Summary"
            readonly name: string
            readonly tags: readonly { readonly value: string; readonly key: string }[]
            readonly state: {
              readonly error: number
              readonly count: number
              readonly min: number
              readonly max: number
              readonly sum: number
              readonly quantiles: readonly (readonly [number, Schema.OptionFrom<number>])[]
            }
            readonly description?: string | undefined
          }
      )[]
    },
  | { readonly _tag: "Ping" }
  | Span
  | {
      readonly _tag: "MetricsSnapshot"
      readonly metrics: readonly (
        | {
            readonly _tag: "Counter"
            readonly name: string
            readonly description: Option<string>
            readonly tags: readonly { readonly value: string; readonly key: string }[]
            readonly state: { readonly count: number | bigint }
          }
        | {
            readonly _tag: "Frequency"
            readonly name: string
            readonly description: Option<string>
            readonly tags: readonly { readonly value: string; readonly key: string }[]
            readonly state: { readonly occurrences: { readonly [x: string]: number } }
          }
        | {
            readonly _tag: "Gauge"
            readonly name: string
            readonly description: Option<string>
            readonly tags: readonly { readonly value: string; readonly key: string }[]
            readonly state: { readonly value: number | bigint }
          }
        | {
            readonly _tag: "Histogram"
            readonly name: string
            readonly description: Option<string>
            readonly tags: readonly { readonly value: string; readonly key: string }[]
            readonly state: {
              readonly count: number
              readonly buckets: readonly (readonly [number, number])[]
              readonly min: number
              readonly max: number
              readonly sum: number
            }
          }
        | {
            readonly _tag: "Summary"
            readonly name: string
            readonly description: Option<string>
            readonly tags: readonly { readonly value: string; readonly key: string }[]
            readonly state: {
              readonly error: number
              readonly count: number
              readonly min: number
              readonly max: number
              readonly sum: number
              readonly quantiles: readonly (readonly [number, Option<number>])[]
            }
          }
      )[]
    }
>
```

Added in v1.0.0

## Request (type alias)

**Signature**

```ts
export type Request = Schema.Schema.To<typeof Request>
```

Added in v1.0.0

## Request (namespace)

Added in v1.0.0

### WithoutPing (type alias)

**Signature**

```ts
export type WithoutPing = Exclude<Request, { readonly _tag: "Ping" }>
```

Added in v1.0.0

## Response

**Signature**

```ts
export declare const Response: Schema.Schema<
  { readonly _tag: "Pong" } | { readonly _tag: "MetricsRequest" },
  { readonly _tag: "Pong" } | { readonly _tag: "MetricsRequest" }
>
```

Added in v1.0.0

## Response (type alias)

**Signature**

```ts
export type Response = Schema.Schema.To<typeof Response>
```

Added in v1.0.0

## Response (namespace)

Added in v1.0.0

### WithoutPong (type alias)

**Signature**

```ts
export type WithoutPong = Exclude<Response, { readonly _tag: "Pong" }>
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

## Summary

**Signature**

```ts
export declare const Summary: Schema.Schema<
  {
    readonly _tag: "Summary"
    readonly name: string
    readonly tags: readonly { readonly value: string; readonly key: string }[]
    readonly state: {
      readonly error: number
      readonly count: number
      readonly min: number
      readonly max: number
      readonly sum: number
      readonly quantiles: readonly (readonly [number, Schema.OptionFrom<number>])[]
    }
    readonly description?: string | undefined
  },
  {
    readonly _tag: "Summary"
    readonly name: string
    readonly description: Option<string>
    readonly tags: readonly { readonly value: string; readonly key: string }[]
    readonly state: {
      readonly error: number
      readonly count: number
      readonly min: number
      readonly max: number
      readonly sum: number
      readonly quantiles: readonly (readonly [number, Option<number>])[]
    }
  }
>
```

Added in v1.0.0

## metric

**Signature**

```ts
export declare const metric: <Tag extends string, IS, S>(
  tag: Tag,
  state: Schema.Schema<IS, S>
) => Schema.Schema<
  {
    readonly _tag: Tag
    readonly name: string
    readonly tags: readonly { readonly value: string; readonly key: string }[]
    readonly state: IS
    readonly description?: string | undefined
  },
  {
    readonly _tag: Tag
    readonly name: string
    readonly description: Option<string>
    readonly tags: readonly { readonly value: string; readonly key: string }[]
    readonly state: S
  }
>
```

Added in v1.0.0
