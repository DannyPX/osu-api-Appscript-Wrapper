/**
 * ## Get Match
 * Returns the match.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/multiplayer/get-match/
 * @public
 * @param {string} token `token` Access Token.
 * @param {number} match `match` The ID of the match.
 * @param {number=} after `after?` Result after event `id`.
 * @param {number=} before `before?` Result before event `id`.
 * @param {number=} limit `limit?` Maximum number of results.
 * @returns 
 */
const getMatch = (
  token: string,
  match: number,
  after?: number,
  before?: number,
  limit?: number
) => {
  let queryParameters = queryBuilder_([
    parseParam_("after", after),
    parseParam_("before", before),
    parseParam_("limit", limit)
  ]);

  let query = `${match}?${queryParameters}`;
  return fetchData_(query, RequestMethod_.Get, matchUrl_, token);
};

/**
 * ## Get Room
 * Returns the room.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/multiplayer/get-room/
 * @public
 * @param {string} token `token` Access Token.
 * @param {number} room `room` The ID of the room.
 * @returns 
 */
const getRoom = (
  token: string,
  room: number
) => {
  let query = `${room}`;
  return fetchData_(query, RequestMethod_.Get, roomUrl_, token);
};

/**
 * ## Get Scores
 * Returns a list of scores for specified playlist item.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/multiplayer/get-scores/
 * @public
 * @param {string} token `token` Access Token.
 * @param {number} room `room` The ID of the room.
 * @param {number} playlist `playlist` The ID of the playlist item.
 * @param {number} limit `limit?` Maximum number of results.
 * @param {MultiplayerScoresSort} sort `sort?` Sort option for multiplayer scores index.
 * @param {string} cursor_string `cursor_string?` CursorString for pagination.
 * @returns 
 */
const getScores = (
  token: string,
  room: number,
  playlist: number,
  limit?: number,
  sort?: string,
  cursor_string?: string
) => {
  let queryParameters = queryBuilder_([
    parseParam_("limit", limit),
    parseParam_("sort", sort)
  ]);

  let query = `${room}/playlist/${playlist}/scores?${queryParameters}${parseCursor_(cursor_string)}`;
  return fetchData_(query, RequestMethod_.Get, roomUrl_, token);
};

/**
 * ## Get Full Match
 * Returns the full match.
 * 
 * @author DannyPX
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/multiplayer/get-full-match/
 * @public
 * @param {string} token `token` Access Token.
 * @param {number} match `match` The ID of the match.
 * @returns 
 */
const getFullMatch = (
  token: string,
  match: number
) => {
  let query = `${match}`;
  let response = fetchData_(query, RequestMethod_.Get, matchUrl_, token);

  return getAllEvents_(response, match, token);
};

const getAllEvents_ = (
  response: any,
  match: number,
  token: string
) => {
  let matchCreationTimestamp = new Date(response.match.start_time);
  let firstevent = new Date(response.events[0].timestamp);

  if (matchCreationTimestamp < firstevent) {
    let newResponse = getMatch(token, match, undefined, response.events[0].id, 100);
    newResponse = getAllEvents_(newResponse, match, token);
    response.events.unshift(...newResponse.events);
  }

  return response;
};