/**
 * ## Get Events
 * Returns a collection of Events in order of creation time.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/events/get-events/
 * @public
 * @param {string} token `token` Access Token.
 * @param {Sort=} sort `sort?` `Descending` for newest first; `Ascending` for oldest first. Defaults to `Descending`.
 * @param {string=} cursor_string `cursor_string?` CursorString for pagination.
 * @returns 
 */
const getEvents = (
  token: string,
  sort?: string,
  cursor_string?: string
) => {
  let queryParameters = queryBuilder_([
    parseParam_("sort", sort)
  ]);

  let query = `?${queryParameters}${parseCursor_(cursor_string)}`;
  return fetchData_(query, RequestMethod_.Get, eventsUrl_, token);
};