/**
 * ## Lookup Beatmap
 * Returns beatmap.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/beatmaps/lookup-beatmap/
 * @public
 * @param {string} token `token` Access Token.
 * @param {string=} checksum `checksum?` A beatmap checksum.
 * @param {string=} filename `filename?` A filename to lookup.
 * @param {number=} beatmap `beatmap?` A beatmap ID to lookup.
 * @returns 
 */
const lookupBeatmap = (
  token: string,
  checksum?: string,
  filename?: string,
  beatmap?: number
) => {
  let queryParameters = queryBuilder_([
    parseParam_("checksum", checksum),
    parseParam_("filename", filename),
    parseParam_("beatmap", beatmap)
  ]);

  let query = `lookup?${queryParameters}`;
  return fetchData_(query, RequestMethod_.Get, beatmapsUrl_, token);
};

/**
 * ## Get a User Beatmap score
 * Return a User's score on a Beatmap
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/beatmaps/get-a-user-beatmap-score/
 * @public
 * @param {string} token `token` Access Token.
 * @param {number} user `user` The ID of the user.
 * @param {number} beatmap `beatmap` The ID of the beatmap.
 * @param {number=} legacy_only `legacy_only?` Whether or not to exclude lazer scores. Defaults to `0`.
 * @param {Ruleset=} mode `mode?` The **Ruleset** to get scores for.
 * @param {number|string[]|Mod[]=} mods `mods?` Mod combination. Can be either a bitset of mods, array of mod acronyms, or array of mods. Defaults to no mods.
 */
const getUserBeatmapScore = (
  token: string,
  user: number,
  beatmap: number,
  legacy_only?: number,
  mode?: string,
  mods?: number | string[]
) => {
  let queryParameters = queryBuilder_([
    parseParam_("legacy_only", legacy_only),
    parseParam_("mode", mode),
    parseParam_("mods", mods)
  ]);

  let query = `${beatmap}/scores/users/${user}?${queryParameters}`;
  return fetchData_(query, RequestMethod_.Get, beatmapsUrl_, token);
};

/**
 * ## Get a User Beatmap scores
 * Return a User's scores on a Beatmap
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/beatmaps/get-a-user-beatmap-scores/
 * @public
 * @param {string} token `token` Access Token.
 * @param {number} user `user` The ID of the user.
 * @param {number} beatmap `beatmap` The ID of the beatmap.
 * @param {number=} legacy_only `legacy_only?` Whether or not to exclude lazer scores. Defaults to `0`.
 * @param {Ruleset=} mode `mode?` The **Ruleset** to get scores for.
 */
const getUserBeatmapScores = (
  token: string,
  user: number,
  beatmap: number,
  legacy_only?: number,
  mode?: string
) => {
  let queryParameters = queryBuilder_([
    parseParam_("legacy_only", legacy_only),
    parseParam_("mode", mode)
  ]);

  let query = `${beatmap}/scores/users/${user}/all?${queryParameters}`;
  return fetchData_(query, RequestMethod_.Get, beatmapsUrl_, token);
};

/**
 * ## Get Beatmap scores
 * Returns the top scores for a beatmap. Depending on user preferences, this may only show legacy scores.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/beatmaps/get-beatmap-scores/
 * @public
 * @param {string} token `token` Access Token.
 * @param {number} beatmap `beatmap` The ID of the beatmap.
 * @param {number=} legacy_only `legacy_only?` Whether or not to exclude lazer scores. Defaults to `0`.
 * @param {Ruleset=} mode `mode?` The **Ruleset** to get scores for.
 * @param {number|string[]|Mod[]=} mods `mods?` Mod combination. Can be either a bitset of mods, array of mod acronyms, or array of mods. Defaults to no mods.
 * @param {string=} type `type?` Beatmap score ranking type
 */
const getBeatmapScores = (
  token: string,
  beatmap: number,
  legacy_only?: number,
  mode?: string,
  mods?: number | string[],
  type?: string
) => {
  let queryParameters = queryBuilder_([
    parseParam_("legacy_only", legacy_only),
    parseParam_("mode", mode),
    parseParam_("mods", mods),
    parseParam_("type", type),
  ]);

  let query = `${beatmap}/scores?${queryParameters}`;
  return fetchData_(query, RequestMethod_.Get, beatmapsUrl_, token);
};

/**
 * ## Get Beatmap scores (non-legacy)
 * Returns the top scores for a beatmap.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/beatmaps/get-beatmap-scores-non-legacy/
 * @public
 * @param {string} token `token` Access Token.
 * @param {number} beatmap `beatmap` The ID of the beatmap.
 * @param {Ruleset=} mode `mode?` The **Ruleset** to get scores for.
 * @param {number|string[]|Mod[]=} mods `mods?` Mod combination. Can be either a bitset of mods, array of mod acronyms, or array of mods. Defaults to no mods.
 * @param {string=} type `type?` Beatmap score ranking type
 */
const getBeatmapScoresNonLegacy = (
  token: string,
  beatmap: number,
  mode?: string,
  mods?: number | string[],
  type?: string
) => {
  let queryParameters = queryBuilder_([
    parseParam_("mode", mode),
    parseParam_("mods", mods),
    parseParam_("type", type),
  ]);

  let query = `${beatmap}/solo-scores?${queryParameters}`;
  return fetchData_(query, RequestMethod_.Get, beatmapsUrl_, token);
};

/**
 * ## Get Beatmaps
 * Returns a list of beatmaps.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/beatmaps/get-beatmaps/
 * @public
 * @param {string} token `token` Access Token.
 * @param {number[]} ids `ids` Beatmap IDs to be returned. Array of IDs. Up to 50 beatmaps can be requested at once.
 * @returns 
 */
const getBeatmaps = (
  token: string,
  ids: number[]
) => {
  let arrayQueryParameters = [];

  ids.forEach(function (id: number) {
    arrayQueryParameters.push(parseParam_("ids[]", id));
  });

  let queryParameters = queryBuilder_(arrayQueryParameters);

  let query = `?${queryParameters}`;
  return fetchData_(query, RequestMethod_.Get, beatmapsUrl_, token);
};

/**
 * ## Get Beatmap
 * Gets beatmap data for the specified beatmap ID.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/beatmaps/get-beatmap/
 * @public
 * @param {string} token `token` Access Token.
 * @param {number} beatmap `beatmap` The ID of the beatmap.
 * @returns 
 */
const getBeatmap = (
  token: string,
  beatmap: number
) => {
  let query = `${beatmap}`;
  return fetchData_(query, RequestMethod_.Get, beatmapsUrl_, token);
};

/**
 * ## Get Beatmap Attributes
 * Returns difficulty attributes of beatmap with specific mode and mods combination.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/beatmaps/get-beatmap-attributes/
 * @public
 * @param {string} token `token` Access Token.
 * @param {number} beatmap `beatmap` BThe ID of the beatmap.
 * @param {number|string[]|Mod[]=} mods `mods?` Mod combination. Can be either a bitset of mods, array of mod acronyms, or array of mods.
 * @param {Ruleset=} ruleset `ruleset?` Ruleset of the difficulty attributes. Only valid if it's the beatmap ruleset or the beatmap can be converted to the specified ruleset. Defaults to ruleset of the specified beatmap.
 * @param {number=} ruleset_id `ruleset_id?` The same as `ruleset` but in integer form.
 * @returns 
 */
const getBeatmapAttributes = (
  token: string,
  beatmap: number,
  mods?: number | string[],
  ruleset?: string,
  ruleset_id?: number
) => {
  let payload: {
    mods?: number | string[],
    ruleset?: string,
    ruleset_id?: number;
  } = {};

  (mods !== undefined) && (payload.mods = mods);
  (ruleset !== undefined) && (payload.ruleset = ruleset);
  (ruleset_id !== undefined) && (payload.ruleset_id = ruleset_id);

  let query = `${beatmap}/attributes`;
  return fetchData_(query, RequestMethod_.Post, beatmapsUrl_, token, payload);
};