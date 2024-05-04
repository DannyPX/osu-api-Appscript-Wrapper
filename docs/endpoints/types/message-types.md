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

## Example Snippet

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