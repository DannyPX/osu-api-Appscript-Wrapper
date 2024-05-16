/**
 * Made by DannyPX
 * Appscript library to request data from osu!api v2
 * 
 * Forum
 * https://osu.ppy.sh/docs/index.html#forum
 */

/// VARIABLES

let forumUrl = apiUrl + "forums/"

/// ENDPOINTS

/**
 * ## Get Topic and Posts (WIP)
 * Get topic and its posts.
 * https://osu.ppy.sh/docs/index.html#get-topic-and-posts
 * @public
 * @param {String} sort `Optional (Leave "" if not used)` Sorting option. Valid values are `id_desc` (default) and `id_asc`.
 * @param {String} token Access Token.
 * @return {JSONObject}
 */
var getTopicAndPosts = (sort, token) => getEvgetTopicAndPosts_ents_(sort, token)

function getEvgetTopicAndPosts_ents_(sort, token) {
  let queryParameters = queryBuilder_([
    parseParam_("sort", sort)
  ])

  let query = "?" + queryParameters
  return fetchData_(query, token, forumUrl, parseJSON_)
}
