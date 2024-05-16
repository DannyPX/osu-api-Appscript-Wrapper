/**
 * Made by DannyPX
 * Appscript library to request data from osu!api v2
 * 
 * Multiplayer
 * https://osu.ppy.sh/docs/index.html#multiplayer
 */

/// VARIABLES

let matchUrl = apiUrl + "matches/"

let roomUrl = apiUrl + "rooms/"

/// ENDPOINTS

/**
 * ## GET api/v2/matches/{match}
 * Returns the match.
 * https://osu.ppy.sh/docs/index.html#get-apiv2matchesmatch
 * @public
 * @param {String} matchId The ID of the match.
 * @param {Int} before `Optional (Leave "" if not used)` Result before event id.
 * @param {Int} limit `Optional (Leave "" if not used)` Maximum number of results.
 * @param {String} token Access Token.
 * @return {Match}
 */
var getMatch = (matchId, before, limit, token) => getMatch_(matchId, before, limit, token)

function getMatch_(matchId, before, limit, token) {
  let queryParameters = queryBuilder_([
    parseParam_("before", before),
    parseParam_("limit", limit)
  ])

  let query = matchId + "?" + queryParameters
  return fetchData_(query, token, matchUrl, parseJSONMatch_)
}

/// LAZER

/**
 * ## GET api/v2/rooms/{room}
 * Returns the room.
 * https://osu.ppy.sh/docs/index.html#get-apiv2roomsroom
 * @public
 * @param {String} roomId Id of the room.
 * @param {String} token Access Token.
 * @return {Room}
 */
var getRoom = (roomId, token) => getRoom_(roomId, token)

function getRoom_(roomId, token) {
  let query = roomId
  return fetchData_(query, token, roomUrl, parseJSONRoom_)
}



/**
 * ## Get Scores
 * Returns a list of scores for specified playlist item.
 * https://osu.ppy.sh/docs/index.html#get-scores
 * @public
 * @param {String} roomId Id of the room.
 * @param {String} playlistId Id of the playlist item.
 * @param {Int} limit `Optional (Leave "" if not used)` Maximum number of results.
 * @param {ENUM_MULTIPLAYER_SCORES_SORT} sort `Optional (Leave "" if not used)` Sort option for multiplayer scores index.
 * 
 * `ENUM_MULTIPLAYER_SCORES_SORT`: SCORE_ASC, SCORE_DESC
 * 
 * ex. `OsuAPI.ENUM_MULTIPLAYER_SCORES_SORT.SCORE_ASC`
 * @param {String} token Access Token.
 * @return {Scores}
 */
var getScores = (roomId, playlistId, limit, sort, token) => getScores_(roomId, playlistId, limit, sort, token)

function getScores_(roomId, playlistId, limit, sort, token) {
  let queryParameters = queryBuilder_([
    parseParam_("limit", limit),
    parseParam_("sort", sort)
  ])

  let query = roomId + "/playlist/" + playlistId + "/scores?" + queryParameters

  return fetchData_(query, token, roomUrl, parseJSONScores_)
}

/// CUSTOM ENDPOINTS

/**
 * ## GET api/v2/matches/{match} (CUSTOM)
 * Returns the full match
 * `Custom Request`
 * @public
 * @param {String} matchId The ID of the match.
 * @param {String} token Access Token.
 * @return {Match}
 */
var getFullMatch = (matchId, token) => getFullMatch_(matchId, token)

function getFullMatch_(matchId, token) {
  let query = matchId 
  var response = fetchData_(query, token, matchUrl, parseJSONMatch_)
  
  return getAllEvents_(response, matchId, token)
}

function getAllEvents_(response, matchId, token) {
  var matchCreationTimestamp = new Date(response.match.start_time)

  var firstevent = new Date(parseMatch(response).events[0].timestamp)

  if(matchCreationTimestamp < firstevent) {
    var newResponse = getMatch_(matchId, parseMatch(response).events[0].id, LIMIT, token)

    newResponse = getAllEvents_(newResponse, matchId, token)

    response.events.unshift(...newResponse.events)
  }

  return response
}