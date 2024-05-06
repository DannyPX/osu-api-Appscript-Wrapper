/**
 * Made by DannyPX
 * Appscript library to request data from osu!api v2
 * 
 * Home
 * https://osu.ppy.sh/docs/index.html#home
 */

/// VARIABLES

let homeUrl = apiUrl + "search/"

/// ENDPOINTS

/**
 * ## Search (WIP)
 * Searches users and wiki pages.
 * https://osu.ppy.sh/docs/index.html#search
 * @public
 * @param {ENUM_SEARCH_MODE} mode `Optional (Leave "" if not used)` Either `all`, `user`, or `wiki_page`. Default is `all`.
 * 
 * `ENUM_SEARCH_MODE`: `ALL, USER, WIKI_PAGE`
 * 
 * ex. `OsuAPI.ENUM_SEARCH_MODE.ALL`
 * @param {String} query `Optional (Leave "" if not used)` Search keyword.
 * @param {Int} page `Optional (Leave "" if not used)` Search result page. Ignored for mode `all`.
 * @param {String} token Access Token.
 * @return {JSONObject}
 */
var getSearch = (mode, query, page, token) => getSearch_(mode, query, page, token)

function getSearch_(mode, query, page, token) {
  let queryParameters = queryBuilder_([
    parseParam_("mode", mode),
    parseParam_("query", query),
    parseParam_("page", page)
  ])

  let query2 = "?" + queryParameters
  return fetchData_(query2, token, homeUrl, parseJSON_)
}