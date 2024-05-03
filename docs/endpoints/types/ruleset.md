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

## Example Snippet

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