/**
 * Made by DannyPX
 * Appscript library to request data from osu!api v2
 * 
 * Ranking
 * https://osu.ppy.sh/docs/index.html#ranking
 */

/// VARIABLES

let rankingUrl = apiUrl + "rankings/"

let spotlightsUrl = apiUrl + "spotlights/"

/// ENDPOINTS

/**
 * ## Get Kudosu Ranking (WIP)
 * Gets the kudosu ranking.
 * https://osu.ppy.sh/docs/index.html#get-kudosu-ranking
 * @public
 * @param {Int} page `Optional (Leave "" if not used)` Ranking page.
 * @param {String} token Access Token.
 * @return {JSONObject}
 */
var getKudosuRanking = (page, token) => getKudosuRanking_(page, token)

function getKudosuRanking_(page, token) {
  let queryParameters = queryBuilder_([
    parseParam_("page", page)
  ])

  let query = "kudosu" + "?" + queryParameters
  return fetchData_(query, token, rankingUrl, parseJSON_)
}

/**
 * ## Get Ranking
 * Gets the current ranking for the specified type and game mode.
 * https://osu.ppy.sh/docs/index.html#get-ranking
 * @public
 * @param {ENUM_GAMEMODES} mode GameMode.
 * 
 * `ENUM_GAMEMODES`: `CATCH, MANIA, STANDARD, TAIKO`
 * 
 * ex. `OsuAPI.ENUM_GAMEMODES.CATCH`
 * @param {ENUM_RANKING_TYPE} type RankingType.
 * 
 * `ENUM_RANKING_TYPE`: `CHARTS, COUNTRY, PERFORMANCE, SCORE`
 * 
 * ex. `OsuAPI.ENUM_RANKING_TYPE.CHARTS`
 * @param {String} country `Optional (Leave "" if not used)` Filter ranking by country code. Only available for `type` of `PERFORMANCE`.
 * @param {FILTER} filter `Optional (Leave "" if not used)` Either `all` (default) or `friends`.
 * @param {String} spotlight `Optional (Leave "" if not used)` The id of the spotlight if `type` is `CHARTS`. Ranking for latest spotlight will be returned if not specified.
 * @param {ENUM_MANIA_VARIANT} variant `Optional (Leave "" if not used)` Filter ranking to specified mode variant. For `mode` of `MANIA`, it's either `KEY_4` or `KEY_7`. 
 *     Only available for `type` of `PERFORMANCE`.
 * 
 * `ENUM_MANIA_VARIANT`: `KEY_4, KEY_7`
 * 
 * ex. `OsuAPI.ENUM_MANIA_VARIANT.KEY_4`
 * @param {Int} page `Optional (Leave "" if not used)` Page number. Starts at 1.
 * @param {String} token Access Token.
 * @return {Rankings}
 */
var getRanking = (mode, type, country, filter, spotlight, variant, page, token) => getRanking_(mode, type, country, filter, spotlight, variant, page, token)

function getRanking_(mode, type, country, filter, spotlight, variant, page, token) {
  let queryParameters = queryBuilder_([
    parseParam_("country", country),
    parseParam_("filter", filter),
    parseParam_("spotlight", spotlight),
    parseParam_("variant", variant),
    parseParam_("cursor[page]", page)
  ])

  let query = mode + "/" + type + "?" + queryParameters
  return fetchData_(query, token, rankingUrl, parseJSONRankings_)
}

/**
 * ## Get Spotlights (WIP)
 * Gets the list of spotlights.
 * https://osu.ppy.sh/docs/index.html#get-spotlights
 * @public
 * @param {String} token Access Token.
 * @return {JSONObject}
 */
var getSpotlights = (token) => getSpotlights_(token)

function getSpotlights_(token) {
  let query = ""
  return fetchData_(query, token, spotlightsUrl, parseJSON_)
}

// CUSTOM ENDPOINTS

/**
 * ## Get Ranking (CUSTOM)
 * Returns the full rankings between set pages
 * `Custom Request`
 * @public
 * mode, type, country, filter, spotlight, variant, pageStart, pageEnd
 * @param {ENUM_GAMEMODES} mode GameMode.
 * 
 * `ENUM_GAMEMODES`: `CATCH, MANIA, STANDARD, TAIKO`
 * 
 * ex. `OsuAPI.ENUM_GAMEMODES.CATCH`
 * @param {ENUM_RANKING_TYPE} type RankingType.
 * 
 * `ENUM_RANKING_TYPE`: `CHARTS, COUNTRY, PERFORMANCE, SCORE`
 * 
 * ex. `OsuAPI.ENUM_RANKING_TYPE.CHARTS`
 * @param {String} country `Optional (Leave "" if not used)` Filter ranking by country code. Only available for `type` of `PERFORMANCE`.
 * @param {FILTER} filter `Optional (Leave "" if not used)` Either `all` (default) or `friends`.
 * @param {String} spotlight `Optional (Leave "" if not used)` The id of the spotlight if `type` is `CHARTS`. Ranking for latest spotlight will be returned if not specified.
 * @param {ENUM_MANIA_VARIANT} variant `Optional (Leave "" if not used)` Filter ranking to specified mode variant. For `mode` of `MANIA`, it's either `KEY_4` or `KEY_7`. 
 *     Only available for `type` of `PERFORMANCE`.
 * 
 * `ENUM_MANIA_VARIANT`: `KEY_4, KEY_7`
 * 
 * ex. `OsuAPI.ENUM_MANIA_VARIANT.KEY_4`
 * @param {Int} pageStart Start page. Includes this page in result. Starts at 1.
 * @param {Int} pageEnd End page. Includes this page in result.
 * @param {String} token Access Token.
 * @return {Rankings}
 */
var getFullRanking = (mode, type, country, filter, spotlight, variant, pageStart, pageEnd, token) => getFullRanking_(mode, type, country, filter, spotlight, variant, pageStart, pageEnd, token)

function getFullRanking_(mode, type, country, filter, spotlight, variant, pageStart, pageEnd, token) {

  var ranking = []
  var page_error = []

  for (var i = pageStart; i <= pageEnd; i++) {

    var result

    try {

      let queryParameters = queryBuilder_([
        parseParam_("country", country),
        parseParam_("filter", filter),
        parseParam_("spotlight", spotlight),
        parseParam_("variant", variant),
        parseParam_("cursor[page]", i)
      ])

      let query = mode + "/" + type + "?" + queryParameters
      result = fetchData_(query, token, rankingUrl, parseJSONRankings_)

      ranking.push(...result.ranking)

    } catch {
      page_error.push(i)
      break;
    }

    Utilities.sleep(60)
  }

  return {
    ranking: ranking,
    item_count: ranking.length,
    page_error: page_error,
  }
}