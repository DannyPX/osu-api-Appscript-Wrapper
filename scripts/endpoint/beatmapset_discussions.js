/**
 * Made by DannyPX
 * Appscript library to request data from osu!api v2
 * 
 * Beatmapset Discussions
 * https://osu.ppy.sh/docs/index.html#beatmapset-discussions
 */

/// VARIABLES

let beatmapsetDiscussionsUrl = apiUrl + "beatmapsets/discussions/"

/// ENDPOINTS

/**
 * ## Get Beatmapset Discussion Posts (WIP)
 * Returns the posts of beatmapset discussions.
 * https://osu.ppy.sh/docs/index.html#get-beatmapset-discussion-posts
 * @public
 * @param {String} beatmapset_discussion_id `Optional (Leave "" if not used)` `id` of the BeatmapsetDiscussion.
 * @param {Int} limit `Optional (Leave "" if not used)` Maximum number of results.
 * @param {Int} page `Optional (Leave "" if not used)` Search result page.
 * @param {ENUM_DISCUSSION_SORT} sort `Optional (Leave "" if not used)` `id_desc` for newest first; `id_asc` for oldest first. Defaults to `id_desc`.
 * 
 * `ENUM_DISCUSSION_SORT`: `ID_DESC, ID_ASC`
 * 
 * ex. `OsuAPI.ENUM_DISCUSSION_SORT.ID_DESC`
 * @param {ENUM_DISCUSSION_TYPE} types `Optional (Leave "" if not used)` `first`, `reply`, `system` are the valid values. Defaults to `reply`.
 * 
 * `ENUM_DISCUSSION_TYPE`: `FIRST, REPLY, SYSTEM`
 * 
 * ex. `OsuAPI.ENUM_DISCUSSION_TYPE.FIRST`
 * @param {String} user `Optional (Leave "" if not used)` The `id` of the User.
 * @param {String} with_deleted `Optional (Leave "" if not used)` This param has no effect as api calls do not currently receive group permissions.
 * @param {String} token Access Token.
 * @return {JSONObject}
 */
var getBeatmapsetDiscussionPosts = (beatmapset_discussion_id, limit, page, sort, types, user, with_deleted, token) => getBeatmapsetDiscussionPosts_(beatmapset_discussion_id, limit, page, sort, types, user, with_deleted, token)

function getBeatmapsetDiscussionPosts_(beatmapset_discussion_id, limit, page, sort, types, user, with_deleted, token) {
  let arrayQueryParameters = [
    parseParam_("beatmapset_discussion_id", beatmapset_discussion_id),
    parseParam_("limit", limit),
    parseParam_("page", page),
    parseParam_("sort", sort),
    parseParam_("user", user),
    parseParam_("with_deleted", with_deleted),
  ]

  types.forEach(function (type) {
    arrayQueryParameters.push(parseParam_("types[]", type))
  })


  let queryParameters = queryBuilder_(arrayQueryParameters)

  let query = "posts" + "?" + queryParameters
  return fetchData_(query, token, beatmapsetDiscussionsUrl, parseJSON_)
}

/**
 * ## Get Beatmapset Discussion Votes (WIP)
 * Returns the votes given to beatmapset discussions.
 * https://osu.ppy.sh/docs/index.html#get-beatmapset-discussion-votes
 * @public
 * @param {String} beatmapset_discussion_id `Optional (Leave "" if not used)` `id` of the BeatmapsetDiscussion.
 * @param {Int} limit `Optional (Leave "" if not used)` Maximum number of results.
 * @param {Int} page `Optional (Leave "" if not used)` Search result page.
 * @param {String} receiver `Optional (Leave "" if not used)` The `id` of the User receiving the votes.
 * @param {ENUM_DISCUSSION_SCORE} score `Optional (Leave "" if not used)` `1` for up vote, `-1` for down vote.
 * 
 * `ENUM_DISCUSSION_SCORE`: `VOTE, DOWN_VOTE`
 * 
 * ex. `OsuAPI.ENUM_DISCUSSION_SCORE.VOTE`
 * @param {ENUM_DISCUSSION_SORT} sort `Optional (Leave "" if not used)` `id_desc` for newest first; `id_asc` for oldest first. Defaults to `id_desc`.
 * 
 * `ENUM_DISCUSSION_SORT`: `ID_DESC, ID_ASC`
 * 
 * ex. `OsuAPI.ENUM_DISCUSSION_SORT.ID_DESC`
 * @param {String} user `Optional (Leave "" if not used)` The `id` of the User giving the votes.
 * @param {String} with_deleted `Optional (Leave "" if not used)` This param has no effect as api calls do not currently receive group permissions.
 * @param {String} token Access Token.
 * @return {JSONObject}
 */
var getBeatmapsetDiscussionVotes = (beatmapset_discussion_id, limit, page, receiver, score, sort, user, with_deleted, token) => getBeatmapsetDiscussionVotes_(beatmapset_discussion_id, limit, page, receiver, score, sort, user, with_deleted, token)

function getBeatmapsetDiscussionVotes_(beatmapset_discussion_id, limit, page, receiver, score, sort, user, with_deleted, token) {
  let queryParameters = queryBuilder_([
    parseParam_("beatmapset_discussion_id", beatmapset_discussion_id),
    parseParam_("limit", limit),
    parseParam_("page", page),
    parseParam_("receiver", receiver),
    parseParam_("score", score),
    parseParam_("sort", sort),
    parseParam_("user", user),
    parseParam_("with_deleted", with_deleted),
  ])

  let query = "votes" + "?" + queryParameters
  return fetchData_(query, token, beatmapsetDiscussionsUrl, parseJSON_)
}

/**
 * Get Beatmapset Discussions (WIP)
 * Returns a list of beatmapset discussions.
 * https://osu.ppy.sh/docs/index.html#get-beatmapset-discussions
 * @public
 * @param {String} beatmap_id `Optional (Leave "" if not used)` id of the Beatmap.
 * @param {String} beatmapset_id `Optional (Leave "" if not used)` id of the Beatmapset.
 * @param {ENUM_DISCUSSION_BEATMAPSET_STATUS} beatmapset_status `Optional (Leave "" if not used)` One of all, ranked, qualified, disqualified, never_qualified. Defaults to all.
 * 
 * `ENUM_DISCUSSION_BEATMAPSET_STATUS`: `ALL, RANKED, QUALIFIER, DISQUALIFIED, NEVER_QUALIFIED`
 * 
 * ex. `OsuAPI.ENUM_DISCUSSION_BEATMAPSET_STATUS.ALL`
 * @param {Int} limit `Optional (Leave "" if not used)` Maximum number of results.
 * @param {ENUM_DISCUSSION_MESSAGE_TYPE} message_types `Optional (Leave "" if not used)` suggestion, problem, mapper_note, praise, hype, review. Blank defaults to all types. 
 * 
 * `ENUM_DISCUSSION_MESSAGE_TYPE`: `SUGGESTION, PROBLEM, MAPPER_NOTE, PRAISE, HYPE, REVIEW`
 * 
 * ex. `OsuAPI.ENUM_DISCUSSION_MESSAGE_TYPE.SUGGESTION`
 * @param {ENUM_DISCUSSION_ONLY_UNRESOLVED} only_unresolved `Optional (Leave "" if not used)` true to show only unresolved issues; false, otherwise. Defaults to false.
 * 
 * `ENUM_DISCUSSION_ONLY_UNRESOLVED`: `TRUE, FALSE`
 * 
 * ex. `OsuAPI.ENUM_DISCUSSION_ONLY_UNRESOLVED.TRUE`
 * @param {Int} page `Optional (Leave "" if not used)` Search result page.
 * @param {ENUM_DISCUSSION_SORT} sort `Optional (Leave "" if not used)` `id_desc` for newest first; `id_asc` for oldest first. Defaults to `id_desc`.
 * 
 * `ENUM_DISCUSSION_SORT`: `ID_DESC, ID_ASC`
 * 
 * ex. `OsuAPI.ENUM_DISCUSSION_SORT.ID_DESC`
 * @param {String} user `Optional (Leave "" if not used)` The id of the User.
 * @param {String} with_deleted `Optional (Leave "" if not used)` This param has no effect as api calls do not currently receive group permissions.
 * @param {String} token Access Token.
 * @return {JSONObject}
 */
var getBeatmapsetDiscussions = (beatmap_id, beatmapset_id, beatmapset_status, limit, message_types, only_unresolved, page, sort, user, with_deleted, token) => getBeatmapsetDiscussions_(beatmap_id, beatmapset_id, beatmapset_status, limit, message_types, only_unresolved, page, sort, user, with_deleted, token)

function getBeatmapsetDiscussions_(beatmap_id, beatmapset_id, beatmapset_status, limit, message_types, only_unresolved, page, sort, user, with_deleted, token) {
  let arrayQueryParameters = [
    parseParam_("beatmap_id", beatmap_id),
    parseParam_("beatmapset_id", beatmapset_id),
    parseParam_("beatmapset_status", beatmapset_status),
    parseParam_("limit", limit),
    parseParam_("only_unresolved", only_unresolved),
    parseParam_("page", page),
    parseParam_("sort", sort),
    parseParam_("user", user),
    parseParam_("with_deleted", with_deleted),
  ]

  message_types.forEach(function (message_type) {
    arrayQueryParameters.push(parseParam_("message_types[]", message_type))
  })

  let queryParameters = queryBuilder_(arrayQueryParameters)

  let query = "votes" + "?" + queryParameters
  return fetchData_(query, token, beatmapsetDiscussionsUrl, parseJSON_)
}
