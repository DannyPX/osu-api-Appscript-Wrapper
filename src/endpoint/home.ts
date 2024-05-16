/**
 * ## Search
 * Searches users and wiki pages.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/home/search/
 * @public
 * @param {string} token `token` Access Token.
 * @param {SearchMode=} mode `mode?` Either `All`, `User`, or `WikiPage`. Default is `All`.
 * @param {string=} query `query?` Search keyword.
 * @param {number=} page `page?` Search result page. Ignored for mode `All`.
 * @returns 
 */
const getSearch = (
  token: string,
  mode?: string,
  query?: string,
  page?: number
) => {
  let queryParameters = queryBuilder_([
    parseParam_("mode", mode),
    parseParam_("query", query),
    parseParam_("page", page)
  ]);

  let query_ = `?${queryParameters}`;
  return fetchData_(query_, RequestMethod_.Get, homeUrl_, token);
};