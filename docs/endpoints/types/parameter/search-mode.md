---
outline: deep
---

# SearchMode

## Available searching modes.

| Name          | Description |
|---------------|-------------|
| `all`         | All         |
| `user`        | User        |
| `wiki_page`   | Wiki Page   |

## Snippet

::: code-group

```js [enum.gs]
// SearchMode Enum
const SearchMode = {
  All: "all",
  User: "user",
  WikiPage: "wiki_page"
}

console.log(SearchMode.WikiPage) // wiki_page
```

:::
Can also be found in [Snippets/Types.gs](../../../snippets/snippets/types)