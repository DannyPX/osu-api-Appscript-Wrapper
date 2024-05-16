---
outline: deep
---

# Get Beatmapset Discussions <Badge type="info" text="GET"/>

## `getBeatmapsetDiscussions`

Returns a list of beatmapset discussions.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-beatmapset-discussions</small>

## Usage

`api.getBeatmapsetDiscussions(token, beatmap_id, beatmapset_id, beatmapset_status, limit, message_types, only_unresolved, page, sort, user, with_deleted, cursor_string)`

### Parameters

`token` <small>string</small><br>
Access Token.

`beatmap_id` <small>number</small> <Badge type="tip" text="optional" /><br>
The ID of the Beatmap.

`beatmapset_id` <small>number</small> <Badge type="tip" text="optional" /><br>
The ID of the Beatmapset.

`beatmapset_status` <small>[BeatmapsetStatus](../../types/beatmapset-status)</small> <Badge type="tip" text="optional" /><br>
One of `All`, `Ranked`, `Qualified`, `Disqualified`, `NeverQualified`. Defaults to `All`.

`limit` <small>number</small> <Badge type="tip" text="optional" /><br>
Maximum number of results.

`message_types` <small>[MessageTypes](../../types/message-types)[]</small> <Badge type="tip" text="optional" /><br>
`Suggestion`, `Problem`, `MapperNote`, `Praise`, `Hype`, `Review`. Blank defaults to all types.

`only_unresolved` <small>boolean</small> <Badge type="tip" text="optional" /><br>
`true` to show only unresolved issues; `false`, otherwise. Defaults to `false`.

`page` <small>number</small> <Badge type="tip" text="optional" /><br>
Search result page.

`sort` <small>[Sort](../../types/sort)</small> <Badge type="tip" text="optional" /><br>
`Descending` for newest first; `Ascending` for oldest first. Defaults to `Descending`.

`user` <small>number</small> <Badge type="tip" text="optional" /><br>
The ID of the User.

`with_deleted` <small>string</small> <Badge type="tip" text="optional" /><br>
This param has no effect as api calls do not currently receive group permissions.

`cursor_string` <small>string</small> <Badge type="tip" text="optional" /><br>
CursorString for pagination.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->