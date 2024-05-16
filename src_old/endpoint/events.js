/**
 * Made by DannyPX
 * Appscript library to request data from osu!api v2
 * 
 * Events
 * https://osu.ppy.sh/docs/index.html#events
 */

/// VARIABLES

let eventsUrl = apiUrl + "events/"

/// ENDPOINTS

/**
 * ## Get Events (WIP)
 * Returns a collection of Events in order of creation time.
 * https://osu.ppy.sh/docs/index.html#get-events
 * @public
 * @param {String} sort `Optional (Leave "" if not used)` Sorting option. Valid values are `id_desc` (default) and `id_asc`.
 * @param {String} token Access Token.
 * @return {JSONObject}
 */
var getEvents = (sort, token) => getEvents_(sort, token)

function getEvents_(sort, token) {
  let queryParameters = queryBuilder_([
    parseParam_("sort", sort)
  ])

  let query = "?" + queryParameters
  return fetchData_(query, token, eventsUrl, parseJSON_)
}