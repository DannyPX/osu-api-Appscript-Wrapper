---
outline: deep
---

# BeatmapPackType

## Available beatmap pack types

| Name         | Tag | Description     |
|--------------|-----|-----------------|
| `standard`   | S   | Standard        |
| `featured`   | F   | Featured Artist |
| `tournament` | P   | Tournament      |
| `loved`      | L   | Project Loved   |
| `chart`      | R   | Spotlights      |
| `theme`      | T   | Theme           |
| `artist`     | A   | Artist/Album    |

## Example Snippet

::: code-group

```js [enum.gs]
// BeatmapPackType Enum
const BeatmapPackType = {
  Standard: 'standard',
  Featured_Artist: 'featured',
  Tournament: 'tournament',
  Project_Loved: 'loved',
  Spotlights: 'chart',
  Theme: 'theme',
  Artist: 'artist'
}

console.log(BeatmapPackType.Tournament) // tournament
```

:::