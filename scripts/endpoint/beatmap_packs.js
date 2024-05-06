/**
 * Made by DannyPX
 * Appscript library to request data from osu!api v2
 * 
 * Beatmap Packs
 * https://osu.ppy.sh/docs/index.html#beatmap-packs
 */

/// VARIABLES

let beatmapsUrl = apiUrl + "beatmaps/"

/// ENDPOINTS

/**
 * ## Get Beatmap Packs (WIP)
 * Returns a list of beatmap packs.
 * https://osu.ppy.sh/docs/index.html#get-beatmap-packs
 * @public
 * @param {ENUM_BEATMAP_PACK_TYPE} type `Optional (Leave "" if not used)` BeatmapPackType of the beatmap packs to be returned. Defaults to standard.
 * 
 * `ENUM_BEATMAP_PACK_TYPE`: `STANDARD, FEATURED, TOURNAMENT, LOVED, CHART, THEME, ARTIST`
 * 
 * ex. `OsuAPI.ENUM_BEATMAP_PACK_TYPE.STANDARD`
 * @param {String} token Access Token.
 * @return {JSONObject}
 */
var getBeatmapPacks = (type, token) => getBeatmapPacks_(type, token)

function getBeatmapPacks_(type, token) {
  let queryParameters = queryBuilder_([
    parseParam_("type", type),
  ])

  let query = "packs" + "?" + queryParameters
  return fetchData_(query, token, beatmapsUrl, parseJSON_)
}

/**
 * ## Get Beatmap Pack (WIP)
 * Gets the beatmap pack for the specified beatmap pack tag.
 * https://osu.ppy.sh/docs/index.html#get-beatmap-pack
 * @public
 * @param {String} pack The tag of the beatmap pack to be returned.
 * @param {Int} legacy_only `Optional (Leave "" if not used)` Whether or not to consider lazer scores for user completion data. Defaults to 0.
 * @param {String} token Access Token.
 * @return {JSONObject}
 */
var getBeatmapPack = (pack, legacy_only, token) => getBeatmapPack_(pack, legacy_only, token)

function getBeatmapPack_(pack, legacy_only, token) {
  let queryParameters = queryBuilder_([
    parseParam_("legacy_only", legacy_only),
  ])

  let query = "packs/" + pack + "?" + queryParameters
  return fetchData_(query, token, beatmapsUrl, parseJSON_)
}