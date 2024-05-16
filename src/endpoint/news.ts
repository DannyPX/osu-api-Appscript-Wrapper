/**
 * ## Get News Listing
 * Returns a list of news posts and related metadata.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/news/get-news-listing/
 * @public
 * @param {string} token `token` Access Token.
 * @param {number} limit `limit?` Maximum number of posts (12 default, 1 minimum, 21 maximum).
 * @param {number} year `year?` Year to return posts from.
 * @param {string} cursor_string? `cursor_string` CursorString for pagination.
 * @returns 
 */
const getNewsListing = (
  token: string,
  limit?: number,
  year?: number,
  cursor_string?: string
) => {
  let queryParameters = queryBuilder_([
    parseParam_("limit", limit),
    parseParam_("year", year)
  ]);

  let query = `?${queryParameters}${parseCursor_(cursor_string)}`;
  return fetchData_(query, RequestMethod_.Get, newsUrl_, token);
};

/**
 * ## Get News Post
 * Returns details of the specified news post.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/news/get-news-post/
 * @public
 * @param {string} token `token` Access Token.
 * @param {string} news `news` News post slug or ID.
 * @param {string=} key `key?` Unset to query by slug, or `id` to query by ID.
 * @returns 
 */
const getNewsPost = (
  token: string,
  news: string,
  key?: string
) => {
  let queryParameters = queryBuilder_([
    parseParam_("key", key),
  ]);

  let query = `${news}?${queryParameters}`;
  return fetchData_(query, RequestMethod_.Get, newsUrl_, token);
};