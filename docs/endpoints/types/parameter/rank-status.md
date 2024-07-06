---
outline: deep
---

# RankStatus

## Available ranking types

| Name | Description |
| ---- | ----------- |
| `-2` | Graveyard   |
| `-1` | Wip         |
| `0`  | Pending     |
| `1`  | Ranked      |
| `2`  | Approved    |
| `3`  | Qualified   |
| `4`  | Loved       |

## Snippet

::: code-group

```js [enum.gs]
// RankStatus Enum
const RankStatus = {
  Graveyard: '-2',
  Wip: '-1',
  Pending: '0',
  Ranked: '1',
  Approved: '2',
  Qualified: '3',
  Loved: '4',
}

console.log(RankStatus.Pending) // 0
```

:::