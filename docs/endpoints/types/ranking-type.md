---
outline: deep
---

# RankingType

## Available ranking types.

| Name          | Description |
|---------------|-------------|
| `charts`      | Spotlight   |
| `country`     | Country     |
| `performance` | Performance |
| `score`       | Score       |

## Snippet

::: code-group

```js [enum.gs]
// RankingType Enum
const RankingType = {
  Spotlight: "charts",
  Country: "country",
  Performance: "performance",
  Score: "score"
}

console.log(RankingType.Spotlight) // charts
```

:::
Can also be found in [Snippets/Types.gs](../../snippets/snippets/types)