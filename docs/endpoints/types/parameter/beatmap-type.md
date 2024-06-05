---
outline: deep
---

# BeatmapType

## Available beatmap types

| Name          | Description |
| ------------- | ----------- |
| `favourite`   | Favourite   |
| `graveyard`   | Graveyard   |
| `guest`       | Guest       |
| `loved`       | Loved       |
| `most_played` | Most Played |
| `nominated`   | Nominated   |
| `pending`     | Pending     |
| `ranked`      | Ranked      |

## Snippet

::: code-group

```js [enum.gs]
// BeatmapType Enum
const BeatmapType = {
  Favourite: "favourite",
  Graveyard: "graveyard",
  Guest: "guest",
  Loved: "loved",
  MostPlayed: "most_played",
  Nominated: "nominated",
  Pending: "pending",
  Ranked: "ranked"
}

console.log(BeatmapType.Favourite) // favourite
```

:::
Can also be found in [Snippets/Types.gs](../../../snippets/snippets/types)