/**
 * Made by DannyPX
 * Appscript library to request data from osu!api v2
 * 
 * Beatmaps
 * https://osu.ppy.sh/docs/index.html#beatmaps
 */

/// VARIABLES

let beatmapUrl = apiUrl + "beatmaps/"

/// ENDPOINTS

/**
 * ## Lookup Beatmap (WIP)
 * Returns beatmap.
 * https://osu.ppy.sh/docs/index.html#lookup-beatmap
 * @public
 * @param {String} checksum `Optional (Leave "" if not used)` A beatmap checksum.
 * @param {String} filename `Optional (Leave "" if not used)` A filename to lookup.
 * @param {String} beatmapId `Optional (Leave "" if not used)` A beatmap ID to lookup.
 * @param {String} token Access Token.
 * @return {JSONObject}
 */
var getLookupBeatmap = (checksum, filename, beatmapId, token) => getLookupBeatmap_(checksum, filename, beatmapId, token)

function getLookupBeatmap_(checksum, filename, beatmapId, token) {
  let queryParameters = queryBuilder_([
    parseParam_("checksum", checksum),
    parseParam_("filename", filename),
    parseParam_("id", beatmapId)
  ])

  let query = "lookup" + "?" + queryParameters
  return fetchData_(query, token, beatmapUrl, parseJSON_)
}

/**
 * ## Get a User Beatmap score
 * Return a User's score on a Beatmap
 * https://osu.ppy.sh/docs/index.html#get-a-user-beatmap-score
 * @public
 * @param {String} userId The ID of an osu! user.
 * @param {String} beatmapId The ID of a beatmap.
 * @param {Int} legacy_only integer Whether or not to exclude lazer scores. Defaults to 0.
 * @param {ENUM_GAMEMODES} mode `Optional (Leave "" if not used)` The GameMode to get scores for.
 * 
 * `ENUM_GAMEMODES`: `CATCH, MANIA, STANDARD, TAIKO`
 * 
 * ex. `OsuAPI.ENUM_GAMEMODES.CATCH`
 * @param {String} token Access Token.
 * @return {BeatmapUserScore}
*/
var getUserBeatmapScore = (userId, beatmapId, legacy_only, mode, token) => getUserBeatmapScore_(userId, beatmapId, legacy_only, mode, token)

function getUserBeatmapScore_(userId, beatmapId, legacy_only, mode, token) {
  let queryParameters = queryBuilder_([
    parseParam_("legacy_only", legacy_only),
    parseParam_("mode", mode)
  ])

  let query = beatmapId + "/scores/users/" + userId + "?" + queryParameters
  return fetchData_(query, token, beatmapUrl, parseJSONBeatmapUserScore_)
}

/**
 * ## Get a User Beatmap scores
 * Return a User's scores on a Beatmap
 * @public
 * https://osu.ppy.sh/docs/index.html#get-a-user-beatmap-scores
 * @param {String} userId The ID of an osu! user.
 * @param {String} beatmapId The ID of a beatmap.
 * @param {Int} legacy_only integer Whether or not to exclude lazer scores. Defaults to 0.
 * @param {ENUM_GAMEMODES} mode `Optional (Leave "" if not used)` The GameMode to get scores for.
 * 
 * `ENUM_GAMEMODES`: `CATCH, MANIA, STANDARD, TAIKO`
 * 
 * ex. `OsuAPI.ENUM_GAMEMODES.CATCH`
 * @param {String} token Access Token.
 * @return {ScoresArray}
*/
var getUserBeatmapScores = (userId, beatmapId, legacy_only, mode, token) => getUserBeatmapScores_(userId, beatmapId, legacy_only, mode, token)

function getUserBeatmapScores_(userId, beatmapId, mode, token) {
  let queryParameters = queryBuilder_([
    parseParam_("legacy_only", legacy_only),
    parseParam_("mode", mode)
  ])

  let query = beatmapId + "/scores/users/" + userId + "/all" + "?" + queryParameters
  return fetchData_(query, token, beatmapUrl, parseJSONScoresArray_)
}

/**
 * ## Get Beatmap scores
 * Returns the top scores for a beatmap. Depending on user preferences, this may only show legacy scores.
 * @public
 * https://osu.ppy.sh/docs/index.html#get-a-user-beatmap-scores
 * @param {String} beatmapId The ID of a beatmap.
 * @param {Int} legacy_only integer Whether or not to exclude lazer scores. Defaults to 0.
 * @param {ENUM_GAMEMODES} mode `Optional (Leave "" if not used)` The GameMode to get scores for.
 * 
 * `ENUM_GAMEMODES`: `CATCH, MANIA, STANDARD, TAIKO`
 * 
 * ex. `OsuAPI.ENUM_GAMEMODES.CATCH`
 * @param {String} token Access Token.
 * @return {UserScoresArray}
*/
var getBeatmapScores = (beatmapId, legacy_only, mode, token) => getBeatmapScores_(beatmapId, legacy_only, mode, token)

function getBeatmapScores_(beatmapId, legacy_only, mode, token) {
  let queryParameters = queryBuilder_([
    parseParam_("legacy_only", legacy_only),
    parseParam_("mode", mode)
  ])

  let query = beatmapId + "/scores" + "?" + queryParameters
  return fetchData_(query, token, beatmapUrl, parseJSONUserScoresArray_)
}

/**
 * ## Get Beatmap scores (non-legacy) (WIP)
 * Returns the top scores for a beatmap
 * @public
 * https://osu.ppy.sh/docs/index.html#get-beatmap-scores-non-legacy
 * @param {String} beatmapId The ID of a beatmap.
 * @param {ENUM_GAMEMODES} mode `Optional (Leave "" if not used)` The GameMode to get scores for.
 * 
 * `ENUM_GAMEMODES`: `CATCH, MANIA, STANDARD, TAIKO`
 * 
 * ex. `OsuAPI.ENUM_GAMEMODES.CATCH`
 * @param {String} mods `Optional (Leave "" if not used)` An array of matching Mods, or none.
 * @param {String} type `Optional (Leave "" if not used)` Beatmap score ranking type.
 * @param {String} token Access Token.
 * @return {JSONObject}
*/
var getBeatmapScoresNonLegacy = (beatmapId, mode, mods, type, token) => getBeatmapScoresNonLegacy_(beatmapId, mode, mods, type, token)

function getBeatmapScoresNonLegacy_(beatmapId, mode, mods, type, token) {
  let queryParameters = queryBuilder_([
    parseParam_("mode", mode),
    parseParam_("mods", mods),
    parseParam_("type", type)
  ])

  let query = beatmapId + "/solo-scores" + "?" + queryParameters
  return fetchData_(query, token, beatmapUrl, parseJSON_)
}

/**
 * ## Get Beatmap
 * Gets beatmap data for the specified beatmap ID.
 * @public
 * https://osu.ppy.sh/docs/index.html#get-beatmap
 * @param {String} beatmapId The ID of a beatmap.
 * @param {String} token Access Token.
 * @return {Beatmap}
 */
var getBeatmap = (beatmapId, token) => getBeatmap_(beatmapId, token)

function getBeatmap_(beatmapId, token) {
  let query = beatmapId
  return fetchData_(query, token, beatmapUrl, parseJSONBeatmap_)
}

/**
 * ## Get Beatmaps
 * Returns a list of beatmaps.
 * @public
 * https://osu.ppy.sh/docs/index.html#get-beatmaps
 * @param {Array} ids[] Beatmap IDs to be returned. Specify once for each beatmap ID requested. Up to 50 beatmaps can be requested at once. Example `["1", "2"]`.
 * @param {String} token Access Token.
 * @return {Beatmaps}
 */
var getBeatmaps = (ids, token) => getBeatmaps_(ids, token)

function getBeatmaps_(ids, token) {
  let arrayQueryParameters = []

  ids.forEach(function (id) {
    arrayQueryParameters.push(parseParam_("ids[]", id))
  })

  let queryParameters = queryBuilder_(arrayQueryParameters)

  let query = "?" + queryParameters
  return fetchData_(query, token, beatmapUrl, parseJSONBeatmaps_)
}

/**
 * ## Get Beatmap Attributes (WIP)
 * Returns difficulty attributes of beatmap with specific mode and mods combination.
 * @public
 * https://osu.ppy.sh/docs/index.html#get-beatmap-attributes
 * @param {String} beatmapId The ID of a beatmap.
 * @param {Int|String[]|Mod[]} mods `Optional (Leave "" if not used)` Mod combination. Can be either a bitset of mods, array of mod acronyms, or array of mods.
 * @param {Ruleset} ruleest `Optional (Leave "" if not used)` Ruleset of the difficulty attributes. Only valid if it's the beatmap ruleset or the beatmap can be converted to the specified ruleset. Defaults to ruleset of the specified beatmap.
 * @param {Int} ruleset_id `Optional (Leave "" if not used)` The same as `ruleset` but in integer form.
 * @param {String} token Access Token.
 * @return {BeatmapAttributes}
 */
var getBeatmapAttributes = (beatmapId, mods, ruleset, ruleset_id, token) => getBeatmapAttributes_(beatmapId, mods, ruleset, ruleset_id, token)

function getBeatmapAttributes_(beatmapId, mods, ruleset, ruleset_id, token) {
  var payload = {}

  if(mods != _) payload.mods = mods
  if(ruleset != _) payload.ruleest = ruleset
  if(ruleset_id != _) payload.ruleset_id = ruleset_id

  let query = beatmapId + "/attributes"
  return postData_(query, payload, token, beatmapUrl, parseJSON_)
}
