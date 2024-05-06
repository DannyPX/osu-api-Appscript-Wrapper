/**
 * Made by DannyPX
 * Appscript library to request data from osu!api v2
 * 
 * Comments
 * https://osu.ppy.sh/docs/index.html#comments
 */

/// VARIABLES

let commentsUrl = apiUrl + "comments/"

/// ENDPOINTS

/**
 * ## Get Comments (WIP)
 * Returns a list comments and their replies up to 2 levels deep.
 * https://osu.ppy.sh/docs/index.html#get-comments
 * @public
 * @param {String} after `Optional (Leave "" if not used)` Return comments which come after the specified comment id as per sort option.
 * @param {String} commentable_type `Optional (Leave "" if not used)` The type of resource to get comments for.
 * @param {String} commentable_id `Optional (Leave "" if not used)` The id of the resource to get comments for.
 * @param {String} parent_id `Optional (Leave "" if not used)` Limit to comments which are reply to the specified id. Specify 0 to get top level comments.
 * @param {String} sort `Optional (Leave "" if not used)` Sort option as defined in CommentSort. Defaults to `new` for guests and user-specified default when authenticated.
 * @param {String} token Access Token.
 * @return {JSONObject}
 */
var getComments = (after, commentable_type, commentable_id, parent_id, sort, token) => getComments_(after, commentable_type, commentable_id, parent_id, sort, token)

function getComments_(after, commentable_type, commentable_id, parent_id, sort, token) {
  let queryParameters = queryBuilder_([
    parseParam_("after", after),
    parseParam_("commentable_type", commentable_type),
    parseParam_("commentable_id", commentable_id),
    parseParam_("parent_id", parent_id),
    parseParam_("sort", sort),
  ])

  let query = "?" + queryParameters
  return fetchData_(query, token, commentsUrl, parseJSON_)
}

/**
 * ## Get a Comment (WIP)
 * Gets a comment and its replies up to 2 levels deep.
 * https://osu.ppy.sh/docs/index.html#get-a-comment
 * @public
 * @param {String} comment The comment. 
 * @param {String} token Access Token.
 * @return {JSONObject}
 */
var getComment = (comment, token) => getComment_(comment, token)

function getComment_(comment, token) {
  let query = comment
  return fetchData_(query, token, commentsUrl, parseJSON_)
}