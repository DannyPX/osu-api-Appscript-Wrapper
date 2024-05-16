/**
 * ## Get Wiki Page
 * The wiki article or image data.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/wiki/get-wiki-page/
 * @public
 * @param {string} token `token` Access Token
 * @param {string} locale `locale` Two-letter language code of the wiki page.
 * @param {string} path `path` The path name of the wiki page.
 * @returns 
 */
const getWikiPage = (
  token: string,
  locale: string,
  path: string
) => {
  let query = `${locale}/${path}`;
  return fetchData_(query, RequestMethod_.Get, wikiUrl_, token);
};