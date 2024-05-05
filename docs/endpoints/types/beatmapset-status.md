---
outline: deep
---

# BeatmapsetStatus

## Available beatmapset statuses

| Name              | Description     |
|-------------------|-----------------|
| `all`             | All             |
| `ranked`          | Ranked          |
| `qualified`       | Qualified       |
| `disqualified`    | Disqualified    |
| `never_qualified` | Never Qualified |

## Snippet

::: code-group

```js [enum.gs]
// BeatmapsetStatus Enum
const BeatmapsetStatus = {
  All: 'all',
  Ranked: 'ranked',
  Qualified: 'qualified',
  Disqualified: 'disqualified',
  NeverQualified: 'never_qualified'
}

console.log(BeatmapsetStatus.Ranked) // ranked
```

:::
Can also be found in [Snippets/Types.gs](../../snippets/snippets/types)