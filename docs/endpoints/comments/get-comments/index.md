---
outline: deep
---

# Get Comments <Badge type="info" text="GET"/>

## `getComments`

Returns a list comments and their replies up to 2 levels deep.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-comments</small>

## Usage

`api.getComments(token, after, commentable_type, commentable_id, cursor, parent_id, sort)`

### Parameters

`token` <small>string</small><br>
Access Tokens.

`after` <small>string</small> <Badge type="tip" text="optional" /><br>
Return comments which come after the specified comment id as per sort option.

`commentable_type` <small>string</small> <Badge type="tip" text="optional" /><br>
The type of resource to get comments for.

`commentable_id` <small>number</small> <Badge type="tip" text="optional" /><br>
The id of the resource to get comments for.

`cursor` <small>string</small> <Badge type="tip" text="optional" /><br>
Pagination option. See [CommentSort](https://osu.ppy.sh/docs/index.html#commentsort) for detail. The format follows [Cursor](https://osu.ppy.sh/docs/index.html#cursor) except it's not currently included in the response.

`parent_id` <small>number</small> <Badge type="tip" text="optional" /><br>
Limit to comments which are reply to the specified id. Specify 0 to get top level comments.

`sort` <small>string</small> <Badge type="tip" text="optional" /><br>
Sort option as defined in [CommentSort](https://osu.ppy.sh/docs/index.html#commentsort). Defaults to `new` for guests and user-specified default when authenticated.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->