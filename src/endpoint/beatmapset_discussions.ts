/**
 * Returns the posts of beatmapset discussions.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/beatmapset-discussions/get-beatmapset-discussion-posts/
 * @public
 * @param {string} token `token`  Access Token.
 * @param {number=} beatmapset_discussion_id `beatmapset_discussion_id` The ID of the BeatmapsetDiscussion
 * @param {number=} limit `limit` Maximum number of results.
 * @param {number=} page `page` Search result page.
 * @param {Sort=} sort `sort` `Descending` for newest first; `Ascending` for oldest first. Defaults to `Descending`.
 * @param {DiscussionTypes=} types `types`  `First`, `Reply`, `System` are the valid values. Defaults to `Reply`.
 * @param {number=} user `user` The ID of the User.
 * @param {string=} with_deleted `with_deleted` This param has no effect as api calls do not currently receive group permissions.
 * @returns 
 */
const getBeatmapsetDiscussionPosts = (
  token: string,
  beatmapset_discussion_id?: number,
  limit?: number,
  page?: number,
  sort?: string,
  types?: string[],
  user?: number,
  with_deleted?: string
) => {
  let arrayQueryParameters = [
    parseParam_("beatmapset_discussion_id", beatmapset_discussion_id),
    parseParam_("limit", limit),
    parseParam_("page", page),
    parseParam_("sort", sort),
    parseParam_("user", user),
    parseParam_("with_deleted", with_deleted),
  ];

  types.forEach(function (type: string) {
    arrayQueryParameters.push(parseParam_("types[]", type));
  });

  let queryParameters = queryBuilder_(arrayQueryParameters);
  let query = `posts?${queryParameters}`;
  return fetchData_(query, RequestMethod_.Get, beatmapsetDiscussionsUrl_, token);
};

/**
 * ## Get Beatmapset Discussion Votes
 * Returns the votes given to beatmapset discussions.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/beatmapset-discussions/get-beatmapset-discussion-votes/ 
 * @public
 * @param {string} token `token` Access Token.
 * @param {number=} beatmapset_discussion_id `beatmapset_discussion_id` The ID of the BeatmapsetDiscussion
 * @param {number=} limit `limit` Maximum number of results.
 * @param {number=} page `page` Search result page.
 * @param {number=} receiver `receiver` The ID of the User receiving the votes.
 * @param {DiscussionScore=} score `score` `Up` for up vote and `Down` for down vote.
 * @param {Sort=} sort `sort` `Descending` for newest first; `Ascending` for oldest first. Defaults to `Descending`.
 * @param {number=} user `user` The ID of the User.`
 * @param {string=} with_deleted `with_deleted` The ID of the User.
 * @returns 
 */
const getBeatmapsetDiscussionVotes = (
  token: string,
  beatmapset_discussion_id?: number,
  limit?: number,
  page?: number,
  receiver?: number,
  score?: string,
  sort?: string,
  user?: number,
  with_deleted?: string
) => {
  let queryParameters = queryBuilder_([
    parseParam_("beatmapset_discussion_id", beatmapset_discussion_id),
    parseParam_("limit", limit),
    parseParam_("page", page),
    parseParam_("receiver", receiver),
    parseParam_("score", score),
    parseParam_("sort", sort),
    parseParam_("user", user),
    parseParam_("with_deleted", with_deleted),
  ]);

  let query = `votes?${queryParameters}`;
  return fetchData_(query, RequestMethod_.Get, beatmapsetDiscussionsUrl_, token);
};

/**
 * ## Get Beatmapset Discussions
 * Returns a list of beatmapset discussions.
 * 
 * https://dannypx.github.io/osu-api-Appscript-Wrapper/endpoints/beatmapset-discussions/get-beatmapset-discussions/
 * @public
 * @param {string} token `token` Access Token.
 * @param {number=} beatmap_id `beatmap_id?` The ID of the Beatmap.
 * @param {number=} beatmapset_id `beatmapset_id?` The ID of the Beatmapset.
 * @param {BeatmapsetStatus=} beatmapset_status `beatmapset_status?` One of `All`, `Ranked`, `Qualified`, `Disqualified`, `NeverQualified`. Defaults to `All`.
 * @param {number=} limit `limit?` Maximum number of results.
 * @param {MessageTypes=} message_types `message_types?` `Suggestion`, `Problem`, `MapperNote`, `Praise`, `Hype`, `Review`. Blank defaults to all types.
 * @param {boolean=} only_unresolved `only_unresolved?` `true` to show only unresolved issues; `false`, otherwise. Defaults to `false`.
 * @param {number=} page `page?` Search result page.
 * @param {Sort=} sort `sort?` `Descending` for newest first; `Ascending` for oldest first. Defaults to `Descending`.
 * @param {number=} user `user?` The ID of the User.
 * @param {string=} with_deleted `with_deleted?` This param has no effect as api calls do not currently receive group permissions.
 * @param {string=} cursor_string `cursor_string?` CursorString for pagination.
 * @returns 
 */
const getBeatmapsetDiscussions = (
  token: string,
  beatmap_id?: number,
  beatmapset_id?: number,
  beatmapset_status?: string,
  limit?: number,
  message_types?: string[],
  only_unresolved?: boolean,
  page?: number,
  sort?: string,
  user?: number,
  with_deleted?: number,
  cursor_string?: string
) => {
  let arrayQueryParameters = [
    parseParam_("beatmap", beatmap_id),
    parseParam_("beatmapset", beatmapset_id),
    parseParam_("beatmapset_status", beatmapset_status),
    parseParam_("limit", limit),
    parseParam_("only_unresolved", only_unresolved),
    parseParam_("page", page),
    parseParam_("sort", sort),
    parseParam_("user", user),
    parseParam_("with_deleted", with_deleted)
  ];

  message_types.forEach(function (message_type: string) {
    arrayQueryParameters.push(parseParam_("message_types[]", message_type));
  });

  let queryParameters = queryBuilder_(arrayQueryParameters);
  let query = `?${queryParameters}${parseCursor_(cursor_string)}`;
  return fetchData_(query, RequestMethod_.Get, beatmapsetDiscussionsUrl_, token);
};