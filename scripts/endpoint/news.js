/**
 * Made by DannyPX
 * Appscript library to request data from osu!api v2
 * 
 * News
 * https://osu.ppy.sh/docs/index.html#news
 */

/// VARIABLES

let newsUrl = apiUrl + "news/"

/// ENDPOINTS

/**
 * ## Get News Listing (WIP)
 * Returns a list of news posts and related metadata.
 * https://osu.ppy.sh/docs/index.html#get-news-listing
 * @public
 * @param {Int} limit `Optional (Leave "" if not used)` Maximum number of posts (12 default, 1 minimum, 21 maximum).
 * @param {Int} year `Optional (Leave "" if not used)` Year to return posts from.
 * @param {String} token Access Token.
 * @return {JSONObject}
 */
var getNewsListing = (limit, year, token) => getNewsListing_(limit, year, token)

function getNewsListing_(limit, year, token) {
  let queryParameters = queryBuilder_([
    parseParam_("limit", limit),
    parseParam_("year", year)
  ])

  let query = "?" + queryParameters
  return fetchData_(query, token, newsUrl, parseJSON_)
}

/**
 * ## Get News Post (WIP)
 * Returns details of the specified news post.
 * https://osu.ppy.sh/docs/index.html#get-news-post
 * @public
 * @param {String} news News post slug or ID.
 * @param {String} key `Optional (Leave "" if not used)` Unset to query by slug, or id to query by ID.
 * @param {String} token Access Token.
 * @return {JSONObject}
 */
var getNewsPost = (news, key, token) => getNewsPost_(news, key, token)

function getNewsPost_(news, key, token) {
  let queryParameters = queryBuilder_([
    parseParam_("key", key)
  ])

  let query = news + "?" + queryParameters
  return fetchData_(query, token, newsUrl, parseJSON_)
}
