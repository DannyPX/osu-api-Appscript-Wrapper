/**
 * ## Get User Kudosu
 * Returns kudosu history.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/users/get-user-kudosu/
 * @public
 * @param {string} token `token` Access Token.
 * @param {number} user `user` The ID of the user.
 * @param {number=} limit `limit?` Maximum number of results.
 * @param {number=} offset `offset?` Result offset for pagination.
 * @returns 
 */
const getUserKudosu = (
  token: string,
  user: number,
  limit?: number,
  offset?: number
) => {
  let queryParameters = queryBuilder_([
    parseParam_("limit", limit),
    parseParam_("offset", offset)
  ]);

  let query = `${user}/kudosu?${queryParameters}`;
  return fetchData_(query, RequestMethod_.Get, usersUrl_, token);
};

/**
 * ## Get User Scores
 * This endpoint returns the scores of specified user.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/users/get-user-scores/
 * @public
 * @param {string} token `token` Access Token.
 * @param {number} user `user` The ID of an user.
 * @param {ScoreType} type `type` Score type. Must be one of these: `Best`, `Dirsts`, `Recent`.
 * @param {number} legacy_only `legacy_only?` Whether or not to exclude lazer scores. Defaults to 0.
 * @param {boolean} include_fails `include_fails?` Only for recent scores, include scores of failed plays. Set to 1 to include them. Defaults to 0.
 * @param {Ruleset} mode `mode?` Ruleset of the scores to be returned. Defaults to the specified user's mode.
 * @param {number} limit `limit?` Maximum number of results.
 * @param {number} offset `offset?` Result offset for pagination.
 * @returns 
 */
const getUserScores = (
  token: string,
  user: number,
  type: string,
  legacy_only?: number,
  include_fails?: boolean,
  mode?: string,
  limit?: number,
  offset?: number
) => {
  let queryParameters = queryBuilder_([
    parseParam_("legacy_only", legacy_only),
    parseParam_("include_fails", include_fails),
    parseParam_("mode", mode),
    parseParam_("limit", limit),
    parseParam_("offset", offset),
  ]);

  let query = `${user}/scores/${type}?${queryParameters}`;
  return fetchData_(query, RequestMethod_.Get, usersUrl_, token);
};

/**
 * ## Get User Beatmaps
 * Returns the beatmaps of specified user.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/users/get-user-beatmaps/
 * @public
 * @param {string} token `token` Access Token.
 * @param {number} user `user` The ID of the user.
 * @param {BeatmapType} type `type` Beatmap type.
 * @param {number} limit `limit?` Maximum number of results.
 * @param {number} offset `offset?` Result offset for pagination.
 * @returns 
 */
const getUserBeatmaps = (
  token: string,
  user: number,
  type: string,
  limit?: number,
  offset?: number
) => {
  let queryParameters = queryBuilder_([
    parseParam_("limit", limit),
    parseParam_("offset", offset)
  ]);

  let query = `${user}/beatmapsets/${type}?${queryParameters}`;
  return fetchData_(query, RequestMethod_.Get, usersUrl_, token);
};

/**
 * ## Get User Recent Activity
 * Returns recent activity.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/users/get-user-recent-activity/
 * @public
 * @param {string} token `token` Access Token.
 * @param {number} user `user` The ID of the user.
 * @param {number=} limit `limit?` Maximum number of results.
 * @param {number=} offset `offset?` Result offset for pagination.
 * @returns
 */
const getUserRecentActivity = (
  token: string,
  user: number,
  limit?: number,
  offset?: number
) => {
  let queryParameters = queryBuilder_([
    parseParam_("limit", limit),
    parseParam_("offset", offset),
  ]);

  let query = `${user}/recent_activity?${queryParameters}`;
  return fetchData_(query, RequestMethod_.Get, usersUrl_, token);
};

/**
 * ## Get User
 * This endpoint returns the detail of specified user.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/users/get-user/
 * @public
 * @param {string} token `token` Access Token.
 * @param {number} user `user` The ID of the user.
 * @param {Ruleset=} mode `mode?` Ruleset. User default mode will be used if not specified.
 * @param {string=} key `key?` Type of `user` passed in url parameter. Can be either `id` or `username` to limit lookup by their respective type. Passing empty or invalid value will result in id lookup followed by username lookup if not found.
 * @returns 
 */
const getUser = (
  token: string,
  user: number,
  mode?: string,
  key?: string
) => {
  let queryParameters = queryBuilder_([
    parseParam_("key", key)
  ]);

  let query = `${user}/${returnUrlParamOrEmpty_(mode)}?${queryParameters}`;
  return fetchData_(query, RequestMethod_.Get, usersUrl_, token);
};

/**
 * ## Get Users
 * Returns list of users.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/users/get-users/
 * @public
 * @param {string} token `token` Access Token.
 * @param {number[]=} ids `ids?` User ID to be returned. Up to 50 users can be requested at once.
 * @returns 
 */
const getUsers = (
  token: string,
  ids?: number[]
) => {
  let arrayQueryParameters = [];

  if (ids !== undefined && ids !== Array.Empty) {
    ids.forEach(function (id: number) {
      arrayQueryParameters.push(parseParam_("ids[]", id));
    });
  }

  let queryParameters = queryBuilder_(arrayQueryParameters);

  let query = `?${queryParameters}`;
  return fetchData_(query, RequestMethod_.Get, usersUrl_, token);
};