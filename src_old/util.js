let CONTENT_TYPE = {
  JSON: 'application/json',
  XWWWFORM: 'application/x-www-form-urlencoded'
}

let REQUEST_METHOD = {
  GET: 'get',
  POST: 'post'
}

let LIMIT = 100

/**
 * Current available gamemodes
 * CATCH, MANIA, STANDARD, TAIKO
 */
var ENUM_GAMEMODES = {
  CATCH: 'fruits',
  MANIA: 'mania',
  STANDARD: 'osu',
  TAIKO: 'taiko',
}

/**
 * Scoring type filter
 * BEST, FIRSTS, RECENT
 */
var ENUM_SCORE_TYPE = {
  BEST: 'best',
  FIRSTS: 'firsts',
  RECENT: 'recent'
}

/**
 * Include fails
 * TRUE, FALSE
 */
var ENUM_INCLUDE_FAILS = {
  TRUE: '1',
  FALSE: '0'
}

/**
 * Type of the beatmap status
 * FAVOURITE, GRAVEYARD, LOVED, MOST_PLAYED, PENDING, RANKED
 */
var ENUM_BEATMAP_TYPE = {
  FAVOURITE: 'favourite',
  GRAVEYARD: 'graveyard',
  LOVED: 'loved',
  MOST_PLAYED: 'most_played',
  PENDING: 'pending',
  RANKED: 'ranked'
}

/**
 * Whether the parameter is an ID or username
 * ID, USERNAME
 */
var ENUM_KEY = {
  ID: 'id',
  USERNAME: 'username'
}

/**
 * Ranking type filter
 * CHARTS, COUNTRY, PERFORMANCE, SCORE
 */
var ENUM_RANKING_TYPE = {
  CHARTS: 'charts',
  COUNTRY: 'country',
  PERFORMANCE: 'performance',
  SCORE: 'score'
}

/**
 * Filter by all or friends
 * ALL, FRIENDS
 */
var ENUM_FILTER = {
  ALL: 'all',
  FRIENDS: 'friends'
}

/**
 * Keymode for osu!mania
 * KEY_4, KEY_7
 */
var ENUM_MANIA_VARIANT = {
  KEY_4: '4k',
  KEY_7: '7k'
}

/**
 * Sort option for multiplayer scores index
 * SCORE_ASC, SCORE_DESC
 */
var ENUM_MULTIPLAYER_SCORES_SORT = {
  SCORE_ASC: 'score_asc',
  SCORE_DESC: 'score_desc'
}

/**
 * Available beatmap pack types
 * STANDARD, FEATURED, TOURNAMENT, LOVED, CHART, THEME, ARTIST
 * @enum {string}
 */
var ENUM_BEATMAP_PACK_TYPE = {
  STANDARD: 'standard',
  FEATURED: 'featured',
  TOURNAMENT: 'tournament',
  LOVED: 'loved',
  CHART: 'chart',
  THEME: 'theme',
  ARTIST: 'artist'
}

/**
 * Search option
 * ALL, USER, WIKI_PAGE
 */
var ENUM_SEARCH_MODE = {
  ALL: 'all',
  USER: 'user',
  WIKI_PAGE: 'wiki_page'
}

/**
 * Sort option
 * ID_DESC, ID_ASC
 */
var ENUM_DISCUSSION_SORT = {
  ID_DESC: "id_desc",
  ID_ASC: "id_asc"
}

/**
 * Discussion types
 * FIRST, REPLY, SYSTEM
 */
var ENUM_DISCUSSION_TYPE = {
  FIRST: "first",
  REPLY: "reply",
  SYSTEM: "system"
}

/**
 * Discussion vote type
 * VOTE, DOWN_VOTE
 */
var ENUM_DISCUSSION_SCORE = {
  VOTE: "1",
  DOWN_VOTE: "-1"
}

/**
 * Beatmapset status
 * ALL, RANKED, QUALIFIER, DISQUALIFIED, NEVER_QUALIFIED
 */
var ENUM_DISCUSSION_BEATMAPSET_STATUS = {
  ALL: "all",
  RANKED: "ranked",
  QUALIFIED: "qualified",
  DISQUALIFIED: "disqualified",
  NEVER_QUALIFIED: "never_qualified"
}

/**
 * Beatmapset discussion message types
 * SUGGESTION, PROBLEM, MAPPER_NOTE, PRAISE, HYPE, REVIEW
 */
var ENUM_DISCUSSION_MESSAGE_TYPE = {
  SUGGESTION: "suggestion",
  PROBLEM: "problem",
  MAPPER_NOTE: "mapper_note",
  PRAISE: "praise",
  HYPE: "hype",
  REVIEW: "review"
}

/**
 * Beatmapset discussion, show only unresolved
 * TRUE, FALSE
 */
var ENUM_DISCUSSION_ONLY_UNRESOLVED = {
  TRUE: "true",
  FALSE: "false"
}

var ENUM_API_SCOPE = {
  CHAT_WRITE : "chat.write",
  DELEGATE : "delegate",
  FORUM_WRITE : "forum.write",
  FRIEND_READ : "friend.read",
  IDENTIFY : "identify",
  PUBLIC : "public"
}

var ENUM_API_GRANT_TYPE = {
  CLIENT_CREDENTIALS : "client_credentials"
}

let _ = ''

let NotImplemented_ = function() { console.error("Not Implemented. Please use CustomRequest to use this endpoint. Contact DannyPX to get this implemented."); return }

let NoParserAvailable_ = function() { console.warn("There is no parser for this endpoint yet. Returning with JSON.parse."); return }

function parseJSON_(json) {
  var data = JSON.parse(json)
  return data
}

function ErrorMessage_(err) {
  console.error(err)
}

function parseParam_(paramName, value) {
  return {
    "paramName" : paramName,
    "value" : value
  }
}

function queryBuilder_(params) {
  var query = ""
  params.forEach(function(param) {
    query = query + returnEmptyOrParam_(param) + "&"
  }) 
  return query
}

function returnEmptyOrParam_(param) {
  if (param.value === _) {
    return _ 
  } else { 
    return param.paramName + "=" + param.value 
  }
}

function returnEmptyOr_(urlParam) {
  if(urlParam === _) {
    return _
  } else {
    return "/" + urlParam
  }
}

function getOptions_(method, data, contentType, bearerToken) {
  var options = {}
  if(method != _) {
    options.method = method
  }

  if(data != _) {
    options.payload = JSON.stringify(data)
  }

  if(contentType != _) {
    options.contentType = contentType
  }

  if(bearerToken != _) {
    options.headers = {"Authorization": "Bearer " + bearerToken}
  }
  return options
}

function tryFetch_(query, options) {
  try {
    return UrlFetchApp.fetch(query, options)
  } catch (err) {
    return {"errMessage": err}
  }
}

function fetchData_(query, token, url, parser) {
  let options = getOptions_(REQUEST_METHOD.GET, _, CONTENT_TYPE.JSON, token)
  let response = tryFetch_(url + query, options)
  console.warn("This version is getting deprecated. Be aware of changes in the future update.")
  return response.errMessage != undefined ? ErrorMessage_(response.errMessage) : parser(response)
}

function postData_(query, payload, token, url, parser) {
  let options = getOptions_(REQUEST_METHOD.POST, payload, CONTENT_TYPE.JSON, token)
  let response = tryFetch_(url + query, options)
  console.warn("This version is getting deprecated. Be aware of changes in the future update.")
  return response.errMessage != undefined ? ErrorMessage_(response.errMessage) : parser(response)
}