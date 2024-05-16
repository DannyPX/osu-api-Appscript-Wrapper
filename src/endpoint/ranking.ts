/**
 * ## Get Kudosu Ranking
 * Gets the kudosu ranking.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/ranking/get-kudosu-ranking/
 * @public
 * @param {string} token `token` Access Token.
 * @param {number=} page `page?` Ranking page.
 * @returns 
 */
const getKudosuRanking = (
  token: string,
  page?: number
) => {
  let queryParameters = queryBuilder_([
    parseParam_("page", page)
  ]);

  let query = `kudosu?${queryParameters}`;
  return fetchData_(query, RequestMethod_.Get, rankingsUrl_, token);
};

/**
 * ## Get Ranking
 * Gets the current ranking for the specified type and game mode.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/ranking/get-ranking/
 * @public
 * @param {string} token `token` Access Token.
 * @param {Ruleset} mode `mode` The **Ruleset** to get scores for.
 * @param {RankingType} type `type` Different ranking types.
 * @param {string=} country `country?` Filter ranking by country code. Only available for `type` of `Performance`.
 * @param {string=} cursor `cursor?` Cursor.
 * @param {string=} filter `filter?` Either `all` (default) or `friends`.
 * @param {string=} spotlight `spotlight?` The `id` of the spotlight if type is `charts`. Ranking for latest spotlight will be returned if not specified.
 * @param {string=} variant `variant?` Filter ranking to specified mode variant. For mode of mania, it's either `4k` or `7k`. Only available for `type` of `Performance`.
 * @returns 
 */
const getRanking = (
  token: string,
  mode: string,
  type: string,
  country?: string,
  cursor?: string,
  filter?: string,
  spotlight?: string,
  variant?: string
) => {
  let queryParameters = queryBuilder_([
    parseParam_("country", country),
    parseParam_("filter", filter),
    parseParam_("spotlight", spotlight),
    parseParam_("variant", variant),
  ]);

  let query = `${mode}/${type}?${queryParameters}${parseCursor_(cursor)}`;
  return fetchData_(query, RequestMethod_.Get, rankingsUrl_, token);
};

/**
 * ## Get Spotlights
 * Gets the list of spotlights.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/ranking/get-spotlights/
 * @public
 * @param token Access Token
 * @returns 
 */
const getSpotlights = (
  token: string
) => {
  return fetchData_(String.Empty, RequestMethod_.Get, spotlightsUrl_, token);
};

/**
 * ## Get Full Ranking
 * Returns the full rankings between set pages
 * 
 * @author DannyPX
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/ranking/get-full-ranking/
 * @param {string} token `token` Access Token.
 * @param {Ruleset} mode `mode` The **Ruleset** to get scores for.
 * @param {RankingType} type `type` Different ranking types.
 * @param {number} page_start `page_start` Start page. Includes this page in result. Starts at 1.
 * @param {number} page_end `page_end` End page. Includes this page in result.
 * @param {string=} country `country?` Filter ranking by country code. Only available for `type` of `Performance`.
 * @param {string=} filter `filter?` Either `all` (default) or `friends`.
 * @param {string=} spotlight `spotlight?` The `id` of the spotlight if type is `charts`. Ranking for latest spotlight will be returned if not specified.
 * @param {string=} variant `variant?` Filter ranking to specified mode variant. For mode of mania, it's either `4k` or `7k`. Only available for `type` of `Performance`.
 * @returns 
 */
const getFullRanking = (
  token: string,
  mode: string,
  type: string,
  page_start: number,
  page_end: number,
  country?: string,
  filter?: string,
  spotlight?: string,
  variant?: string
) => {
  let ranking: any[] = [];
  let page_error: any[] = [];

  for (let i = page_start; i <= page_end; i++) {
    let result: any;

    try {
      let queryParameters = queryBuilder_([
        parseParam_("country", country),
        parseParam_("filter", filter),
        parseParam_("spotlight", spotlight),
        parseParam_("variant", variant),
        parseParam_("cursor[page]", i)
      ]);

      let query = `${mode}/${type}?${queryParameters}`;
      result = fetchData_(query, RequestMethod_.Get, rankingsUrl_, token);
      ranking.push(...result.ranking);
    } catch {
      page_error.push(i);
    }

    Utilities.sleep(60);
  }

  return {
    ranking: ranking,
    item_count: ranking.length,
    page_error: page_error,
  };
};