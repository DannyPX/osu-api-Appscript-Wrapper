---
outline: deep
---

# Get Comments <Badge type="info" text="GET"/>

## `Function`

Returns a list comments and their replies up to 2 levels deep.

<small>osu!api documentation: https://osu.ppy.sh/docs/index.html#get-comments</small>

## Usage

`api.Function(after, commentable_type, commentable_id, parent_id, sort, token)`

### Parameters

`after` <small>String</small> <Badge type="tip" text="optional" /><br>
Return comments which come after the specified comment id as per sort option.

`commentable_type` <small>String</small> <Badge type="tip" text="optional" /><br>
The type of resource to get comments for.

`commentable_id` <small>String</small> <Badge type="tip" text="optional" /><br>
The id of the resource to get comments for.

`parent_id` <small>String</small> <Badge type="tip" text="optional" /><br>
Limit to comments which are reply to the specified id. Specify 0 to get top level comments.

`sort` <small>String</small> <Badge type="tip" text="optional" /><br>
Sort option as defined in [CommentSort](https://osu.ppy.sh/docs/index.html#commentsort). Defaults to `new` for guests and user-specified default when authenticated.

`token` <small>String</small><br>
Access Tokens.

`cursor` <small>String</small> <Badge type="tip" text="optional" /> <Badge type="danger" text="not implemented" /><br>
Pagination option. See [CommentSort](../../types/comment-sort) for detail. The format follows [Cursor](https://osu.ppy.sh/docs/index.html#cursor) except it's not currently included in the response.

## Example

### Code
<<< ./code.js

### Output
<<< ./output.json

## Response Format

<!--@include: ./response.md-->