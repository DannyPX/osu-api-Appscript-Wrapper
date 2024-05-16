/**
 * Made by DannyPX
 * Appscript library to request data from osu!api v2
 * 
 * Changelog
 * https://osu.ppy.sh/docs/index.html#changelog10
 */

/// VARIABLES

let changelogUrl = apiUrl + "changelog/"

/// ENDPOINTS

/**
 * ## Get Changelog Build (WIP)
 * Returns details of the specified build.
 * https://osu.ppy.sh/docs/index.html#get-changelog-build
 * @public
 * @param {String} stream Update stream name.
 * @param {String} build Build version.
 * @param {String} token Access Token.
 * @return {JSONObject}
 */
var getChangelogBuild = (stream, build, token) => getChangelogBuild_(stream, build, token)

function getChangelogBuild_(stream, build, token) {
  let query = stream + "/" + build
  return fetchData_(query, token, changelogUrl, parseJSON_)
}

/**
 * ## Get Changelog Listing (WIP)
 * Returns a listing of update streams, builds, and changelog entries.
 * https://osu.ppy.sh/docs/index.html#get-changelog-listing
 * @public
 * @param {String} from `Optional (Leave "" if not used)` Minimum build version.
 * @param {String} max_id `Optional (Leave "" if not used)` Maximum build ID.
 * @param {String} stream `Optional (Leave "" if not used)` Stream name to return builds from.
 * @param {String} to `Optional (Leave "" if not used)` Maximum build version.
 * @param {String} message_formats `Optional (Leave "" if not used)` `html`, `markdown`. Default to both.
 * @param {String} token Access Token.
 * @return {JSONObject}
 */
var getChangelogListing = (from, max_id, stream, to, message_formats, token) => getChangelogListing_(from, max_id, stream, to, message_formats, token)

function getChangelogListing_(from, max_id, stream, to, message_formats, token) {
  let queryParameters = queryBuilder_([
    parseParam_("from", from),
    parseParam_("max_id", max_id),
    parseParam_("stream", stream),
    parseParam_("to", to),
    parseParam_("message_formats[]", message_formats)
  ])

  let query = "?" + queryParameters
  return fetchData_(query, token, changelogUrl, parseJSON_)
}

/**
 * ## Lookup Changelog Build (WIP)
 * Returns details of the specified build.
 * https://osu.ppy.sh/docs/index.html#lookup-changelog-build
 * @public
 * @param {String} changelog Build version, update stream name, or build ID.
 * @param {String} key `Optional (Leave "" if not used)` Unset to query by build version or stream name, or `id` to query by build ID.
 * @param {String} message_formats `Optional (Leave "" if not used)` `html`, `markdown`. Default to both.
 * @param {String} token Access Token.
 * @return {JSONObject}
 */
var getLookupChangelogBuild = (changelog, key, message_formats, token) => getLookupChangelogBuild_(changelog, key, message_formats, token)

function getLookupChangelogBuild_(changelog, key, message_formats, token) {
  let queryParameters = queryBuilder_([
    parseParam_("key", key),
    parseParam_("message_formats[]", message_formats)
  ])

  let query = changelog + "?" + queryParameters
  return fetchData_(query, token, changelogUrl, parseJSON_)
}
