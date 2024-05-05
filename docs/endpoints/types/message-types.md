---
outline: deep
---

# MessageTypes

## Available message types

| Name          | Description |
|---------------|-------------|
| `suggestion`  | Suggestion  |
| `problem`     | Problem     |
| `mapper_note` | Mapper Note |
| `praise`      | Praise      |
| `hype`        | Hype        |
| `review`      | Review      |

## Exale Snippet

::: code-group

```js [enum.gs]
// MessageTypes Enum
const MessageTypes = {
  Suggestion: 'suggestion',
  Problem: 'problem',
  MapperNote: 'mapper_note',
  Praise: 'praise',
  Hype: 'hype',
  Review: 'review'
}

console.log(Suggestion.suggestion) // value
```

:::
Can also be found in [Snippets/Types.gs](../../snippets/snippets/types)