/**
 * ## Get Topic and Posts
 * Get topic and its posts.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/forum/get-topic-and-points/
 * @public
 * @param {string} token `token` Access Token.
 * @param {number} topic `topic` The ID of the topic.
 * @param {Sort=} sort `sort?` `Descending` for newest first; `Ascending` for oldest first. Defaults to `Ascending`.
 * @param {number=} limit `limit?` Maximum number of posts to be returned (20 default, 50 at most).
 * @param {number=} start `start?` First post id to be returned with `sort` set to `Ascending`. This parameter is ignored if `cursor_string` is specified.
 * @param {number=} end `end?` First post id to be returned with `sort` set to `Descending`. This parameter is ignored if `cursor_string` is specified.
 * @param {string=} cursor_string `cursor_string?` CursorString for pagination.
 * @returns 
 */
const getTopicAndPosts = (
  token: string,
  topic: number,
  sort?: string,
  limit?: number,
  start?: number,
  end?: number,
  cursor_string?: string
) => {
  let queryParameters = queryBuilder_([
    parseParam_("sort", sort),
    parseParam_("limit", limit),
    parseParam_("start", start),
    parseParam_("end", end)
  ]);

  let query = `topics/${topic}?${queryParameters}${parseCursor_(cursor_string)}`;
  return fetchData_(query, RequestMethod_.Get, forumUrl_, token);
};