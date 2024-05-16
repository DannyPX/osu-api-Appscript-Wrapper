/**
 * ## Get Changelog Build
 * Returns details of the specified build.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/changelog/get-changelog-build/
 * @public
 * @param {string} token `token` Access Token.
 * @param {string} stream `stream` Update stream name.
 * @param {string} build `build` Build version.
 * @returns 
 */
const getChangelogBuild = (
  token: string,
  stream: string,
  build: string
) => {
  let query = `${stream}/${build}`;
  return fetchData_(query, RequestMethod_.Get, changelogUrl_, token);
};

/**
 * ## Get Changelog Listing
 * Returns a listing of update streams, builds, and changelog entries.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/changelog/get-changelog-listing/
 * @public
 * @param {string} token `token` Access Token.
 * @param {string=} from `from?` Minimum build version.
 * @param {string=} max_id `max_id?` Maximum build ID.
 * @param {string=} stream `stream?` Stream name to return builds from.
 * @param {string=} to `to?` Maximum build version.
 * @param {string[]=} message_formats `message_formats?` `html`, `markdown`. Default to both.
 * @returns 
 */
const getChangelogListing = (
  token: string,
  from?: string,
  max_id?: string,
  stream?: string,
  to?: string,
  message_formats?: string[]
) => {
  let arrayQueryParameters = [
    parseParam_("from", from),
    parseParam_("max_id", max_id),
    parseParam_("stream", stream),
    parseParam_("to", to)
  ];

  if (message_formats !== undefined && message_formats !== Array.Empty) {
    message_formats.forEach(function (message_format: string) {
      arrayQueryParameters.push(parseParam_("message_formats[]", message_format));
    });
  }

  let queryParameters = queryBuilder_(arrayQueryParameters);
  let query = `?${queryParameters}`;
  return fetchData_(query, RequestMethod_.Get, changelogUrl_, token);
};

/**
 * ## Lookup Changelog Build
 * Returns details of the specified build.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/changelog/lookup-changelog-build/
 * @public
 * @param {string} token `token` Access Token.
 * @param {string} changelog `changelog` Build version, update stream name, or build ID.
 * @param {string} key `key` Unset to query by build version or stream name, or `id` to query by build ID.
 * @param {string[]=} message_formats `message_formats?` `html`, `markdown`. Default to both.
 * @returns 
 */
const getLookupChangelogBuild = (
  token: string,
  changelog: string,
  key?: string,
  message_formats?: string[]
) => {
  let arrayQueryParameters = [
    parseParam_("key", key)
  ];

  if (message_formats !== undefined && message_formats !== Array.Empty) {
    message_formats.forEach(function (message_format: string) {
      arrayQueryParameters.push(parseParam_("message_formats[]", message_format));
    });
  }

  let queryParameters = queryBuilder_(arrayQueryParameters);
  let query = `${changelog}?${queryParameters}`;
  return fetchData_(query, RequestMethod_.Get, changelogUrl_, token);
};