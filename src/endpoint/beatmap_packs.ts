/**
 * ## Get Beatmap Packs
 * Returns a list of beatmap packs.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/beatmap-packs/get-beatmap-packs/
 * @public
 * @param {string} token `token` Access Token.
 * @param {BeatmapPackType=} type `type?` BeatmapPackType of the beatmap packs to be returned. Defaults to `Standard`.
 * @param {string=} cursor_string `cursor_string?` CursorString for pagination.
 * @returns 
 */
const getBeatmapPacks = (
  token: string,
  type?: string,
  cursor_string?: string
) => {
  let queryParameters = queryBuilder_([
    parseParam_("type", type)
  ]);

  let query = `?${queryParameters}${parseCursor_(cursor_string)}`;
  return fetchData_(query, RequestMethod_.Get, beatmapPacksUrl_, token);
};

/**
 * ## Get Beatmap Pack
 * Gets the beatmap pack for the specified beatmap pack tag.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/beatmap-packs/get-beatmap-pack/
 * @public
 * @param {string} token `token` Access Token
 * @param {string} pack `pack` The tag of the beatmap pack to be returned.
 * @param {number=} legacy_only `legacy_only?` Whether or not to consider lazer scores for user completion data. Defaults to 0.
 * @returns 
 */
const getBeatmapPack = (
  token: string,
  pack: string,
  legacy_only?: string
) => {
  let queryParameters = queryBuilder_([
    parseParam_("legacy_only", legacy_only)
  ]);

  let query = `${pack}?${queryParameters}`;
  return fetchData_(query, RequestMethod_.Get, beatmapPacksUrl_, token);
};