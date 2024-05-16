/**
 * ## Get a comment
 * Gets a comment and its replies up to 2 levels deep.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/comments/get-a-comment/
 * @public
 * @param {string} token `token` Access Token.
 * @param {string} comment `comment` The comment.
 * @returns 
 */
const getComment = (
  token: string,
  comment: string
) => {
  let query = `${comment}`;
  return fetchData_(query, RequestMethod_.Get, commentsUrl_, token);
};

/**
 * ## Get Comments
 * Returns a list comments and their replies up to 2 levels deep.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/comments/get-comments/
 * @public
 * @param {string} token `token` Access Token.
 * @param {string=} after `after?` Return comments which come after the specified comment id as per sort option.
 * @param {string=} commentable_type `commentable_type?` The type of resource to get comments for.
 * @param {number=} commentable_id `commentable_id?` The id of the resource to get comments for.
 * @param {string=} cursor `cursor?` Pagination option. See `CommentSort` for detail. The format follows `Cursor` except it's not currently included in the response.
 * @param {number=} parent_id `parent_id?` Limit to comments which are reply to the specified id. Specify 0 to get top level comments.
 * @param {string=} sort `sort?` Sort option as defined in `CommentSort`. Defaults to `new` for guests and user-specified default when authenticated.
 * @returns 
 */
const getComments = (
  token: string,
  after?: string,
  commentable_type?: string,
  commentable_id?: string,
  cursor?: string,
  parent_id?: string,
  sort?: string
) => {
  let queryParameters = queryBuilder_([
    parseParam_("after", after),
    parseParam_("commentable_type", commentable_type),
    parseParam_("commentable_id", commentable_id),
    parseParam_("parent_id", parent_id),
    parseParam_("sort", sort),
  ]);

  let query = `?${queryParameters}${parseCursor_(cursor)}`;
  return fetchData_(query, RequestMethod_.Get, commentsUrl_, token);
};