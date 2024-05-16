---
outline: deep
---

# Scope

## Available scopes

| Name                | Description                                                                          |
| ------------------- | ------------------------------------------------------------------------------------ |
| `chat.read`         | Allows read chat messages on a user's behalf.                                        |
| `chat.write`        | Allows sending chat messages on a user's behalf.                                     |
| `chat.write_manage` | Allows joining and leaving chat channels on a user's behalf.                         |
| `delegate`          | Allows acting as the owner of a client; only available for Client Credentials Grant. |
| `forum.write`       | Allows creating and editing forum posts on a user's behalf.                          |
| `friends.read`      | Allows reading of the user's friend list.                                            |
| `identify`          | Allows reading of the public profile of the user (`/me`).                            |
| `public`            | Allows reading of publicly available data on behalf of the user.                     |

## Snippet

::: code-group

```js [enum.gs]
// Scope Enum
const Scope = {
  ChatRead: 'chat.read',
  ChatWrite: 'chat.write',
  ChatWriteManage: 'chat.write_manage',
  Delegate: 'delegate',
  ForumWrite: 'forum.write',
  FriendsRead: 'friends.read',
  Identify: 'identify',
  Public: 'public'
}

console.log(Scope.ChatRead) // chat.read
```

:::
Can also be found in [Snippets/Types.gs](../../snippets/snippets/types)