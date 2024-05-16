/**
 * Made by DannyPX
 * Appscript library to request data from osu!api v2
 * 
 * Wiki
 * https://osu.ppy.sh/docs/index.html#wiki
 */

/// VARIABLES

let wikiUrl = apiUrl + "wiki/"

/// ENDPOINTS

/**
 * ## Get Wiki Page (WIP)
 * The wiki article or image data.
 * https://osu.ppy.sh/docs/index.html#get-wiki-page
 * @public
 * @param {String} locale Two-letter language code of the wiki page.
 * @param {String} path The path name of the wiki page.
 * @param {String} token Access Token.
 * @return {JSONObject}
 */
var getWikiPage = (locale, path, token) => getWikiPage_(locale, path, token)

function getWikiPage_(locale, path, token) {
  let query = locale + "/" + path
  return fetchData_(query, token, wikiUrl, parseJSON_)
}