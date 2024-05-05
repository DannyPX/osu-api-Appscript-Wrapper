---
outline: deep
---

# Ruleset

## Available rulesets

| Name     | Description  |
|----------|--------------|
| `fruits` | osu!catch    |
| `mania`  | osu!mania    |
| `osu`    | osu!standard |
| `taiko`  | osu!taiko    |

## Snippet

::: code-group

```js [enum.gs]
// Ruleset Enum
const Ruleset = {
  Catch: 'fruits',
  Mania: 'mania',
  Standard: 'osu',
  Taiko: 'taiko'
}

console.log(Ruleset.Standard) // osu
```

:::
Can also be found in [Snippets/Types.gs](../../snippets/snippets/types)