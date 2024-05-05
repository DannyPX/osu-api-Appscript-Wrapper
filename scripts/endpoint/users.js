/**
 * Made by DannyPX
 * Appscript library to request data from osu!api v2
 * 
 * Users
 * https://osu.ppy.sh/docs/index.html#users
 */

/// VARIABLES

let userUrl = apiUrl + "users/"

/// ENDPOINTS

/**
 * ## Get User Kudosu
 * Returns kudosu history.
 * https://osu.ppy.sh/docs/index.html#get-user-kudosu
 * @public
 * @param {String} userId The ID of an osu! user.
 * @param {String} token Access Token.
 * @return {KudosuHistoryArray}
 */
var getUserKudosu = (userId, limit, offset, token) => getUserKudosu_(userId, limit, offset, token)

function getUserKudosu_(userId, limit, offset, token) {
  let queryParameters = queryBuilder_([
    parseParam_("limit", limit),
    parseParam_("offset", offset)
  ])

  let query = userId + "/kudosu" + "?" + queryParameters
  return fetchData_(query, token, userUrl, parseJSONKudosuHistoryArray_)
}



/**
 * ## Get User Scores
 * Returns the scores of specified user.
 * https://osu.ppy.sh/docs/index.html#get-user-scores
 * @public
 * @param {String} userId The ID of an osu! user.
 * @param {ENUM_SCORE_TYPE} scoreType Score type. Must be one of these: best, firsts, recent.
 * 
 * `ENUM_SCORE_TYPE`: `BEST, FIRSTS, RECENT`
 * 
 * ex. `OsuAPI.ENUM_SCORE_TYPE.BEST`
 * @param {ENUM_INCLUDE_FAILS} includeFails`Optional (Leave "" if not used)` Only for recent scores, include scores of failed plays. Set to 1 to include them. Defaults to 0.
 * 
 * `ENUM_INCLUDE_FAILS`: `TRUE, FALSE`
 * 
 * ex. `OsuAPI.ENUM_INCLUDE_FAILS.TRUE`
 * @param {ENUM_GAMEMODES} mode `Optional (Leave "" if not used)` GameMode of the scores to be returned. Defaults to the specified user's mode.
 * 
 * `ENUM_GAMEMODES`: `CATCH, MANIA, STANDARD, TAIKO`
 * 
 * ex. `OsuAPI.ENUM_GAMEMODES.CATCH`
 * @param {Int} legacy_only integer Whether or not to exclude lazer scores. Defaults to 0.
 * @param {Int} limit `Optional (Leave "" if not used)` Maximum number of results.
 * @param {Int} offset `Optional (Leave "" if not used)` Result offset for pagination.
 * @param {String} token Access Token.
 * @return {ScoresArray2}
 */
var getUserScores = (userId, scoreType, legacy_only, includeFails, mode, limit, offset, token) => getUserScores_(userId, scoreType, legacy_only, includeFails, mode, limit, offset, token)

function getUserScores_(userId, scoreType, includeFails, mode, limit, offset, token) {
  let queryParameters = queryBuilder_([
    parseParam_("include_fails", includeFails),
    parseParam_("mode", mode),
    parseParam_("limit", limit),
    parseParam_("offset", offset)
  ])

  let query = userId + "/scores/" + scoreType + "?" + queryParameters
  return fetchData_(query, token, userUrl, parseJSONScoresArray2_)
}



/**
 * ## Get User Beatmaps
 * Returns the beatmaps of specified user.
 * https://osu.ppy.sh/docs/index.html#get-user-beatmaps
 * @public
 * @param {String} userId The ID of an osu! user.
 * @param {ENUM_BEATMAP_TYPE} beatmapType Beatmap type.
 * 
 * `ENUM_BEATMAP_TYPE`: `FAVOURITE, GRAVEYARD, LOVED, MOST_PLAYED, PENDING, RANKED`
 * 
 * ex. `OsuAPI.ENUM_BEATMAP_TYPE.FAVOURITE`
 * @param {Int} limit `Optional (Leave "" if not used)` Maximum number of results.
 * @param {Int} offset `Optional (Leave "" if not used)` Result offset for pagination.
 * @param {String} token Access Token.
 * @return {BeatmapSetArray}
 */
var getUserBeatmaps = (userId, beatmapType, limit, offset, token) => getUserBeatmaps_(userId, beatmapType, limit, offset, token)

function getUserBeatmaps_(userId, beatmapType, limit, offset, token) {
  let queryParameters = queryBuilder_([
    parseParam_("legacy_only", legacy_only),
    parseParam_("limit", limit),
    parseParam_("offset", offset)
  ])

  let query = userId + "/beatmapsets/" + beatmapType + "?" + queryParameters
  return fetchData_(query, token, userUrl, parseJSONBeatmapSetArray_)
}



/**
 * ## Get User Recent Activity
 * Returns recent activity.
 * https://osu.ppy.sh/docs/index.html#get-user-recent-activity
 * @public
 * @param {String} userId The ID of an osu! user.
 * @param {Int} limit `Optional (Leave "" if not used)` Maximum number of results.
 * @param {Int} offset `Optional (Leave "" if not used)` Result offset for pagination.
 * @return {UserRecentActivity}
 */
var getUserRecentActivity = (userId, limit, offset, token) => getUserRecentActivity_(userId, limit, offset, token)

function getUserRecentActivity_(userId, limit, offset, token) {
  let queryParameters = queryBuilder_([
    parseParam_("limit", limit),
    parseParam_("offset", offset)
  ])

  let query = userId + "/recent_activity/" + "?" + queryParameters
  return fetchData_(query, token, userUrl, parseJSONUserRecentActivity_)
}



/**
 * ## Get User
 * This endpoint returns the detail of specified user.
 *   * It's highly recommended to pass `key` parameter to avoid getting unexpected result (mainly when looking up user with numeric username or nonexistent user id).
 * https://osu.ppy.sh/docs/index.html#get-user
 * @public
 * @param {String} userId The ID of an osu! user.
 * @param {ENUM_GAMEMODES} mode `Optional (Leave "" if not used)` GameMode of the user to be returned. Defaults to the specified user's mode.
 * 
 * `ENUM_GAMEMODES`: `CATCH, MANIA, STANDARD, TAIKO`
 * 
 * ex. `OsuAPI.ENUM_GAMEMODES.CATCH`
 * @param {ENUM_KEY} key `Optional (Leave "" if not used)` Type of user passed in url parameter. Can be either id or username to limit lookup by their respective type.
 *     Passing empty or invalid value will result in id lookup followed by username lookup if not found.
 * 
 * `ENUM_KEY`: `ID, USERNAME`
 * 
 * ex. `OsuAPI.ENUM_KEY.ID`
 * @param {String} token Access Token.
 * @return {User}
 */
var getUser = (userId, mode, key, token) => getUser_(userId, mode, key, token)

function getUser_(userId, mode, key, token) {
  let queryParameters = queryBuilder_([
    parseParam_("key", key)
  ])

  let query = userId + returnEmptyOr_(mode) + "?" + queryParameters
  return fetchData_(query, token, userUrl, parseJSONUser_)
}



/**
 * ## Get Users
 * Returns list of users.
 * https://osu.ppy.sh/docs/index.html#get-users
 * @public
 * @param {Array} ids[] User id to be returned. Specify once for each user id requested. Up to 50 users can be requested at once. Example `["1", "2"]`.
 * @param {String} token Access Token.
 * @return {UserCompact}
 */
var getUsers = (ids, token) => getUsers_(ids, token)

function getUsers_(ids, token) {
  let arrayQueryParameters = []

  ids.forEach(function (id) {
    arrayQueryParameters.push(parseParam_("ids[]", id))
  })

  let queryParameters = queryBuilder_(arrayQueryParameters)

  let query = "?" + queryParameters
  return fetchData_(query, token, userUrl, parseJSONUserCompact_)
}
