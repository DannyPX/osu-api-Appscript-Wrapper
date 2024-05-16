/**
 * @deprecated Deprecated since V22
 * Get access token
 * @public
 * @param {String} client_id Your client_id
 * @param {String} client_secret Your client_secret
 */
function getToken(client_id, client_secret) {
  console.error("`getToken` is deprecated");
}

/**
 * @deprecated Deprecated since V25
 * Create a custom request.
 * @public
 * @param {String} query Example `users/11253722/beatmapsets/graveyard`
 * @param {Array} optionalParameters Example `[ {param: "limit", value: "1"} , {param: "offset", value: "0"} ]` To create `?limit=1&offset=0`
 * @param {String} token Access Token
 */
var customRequest = (query, optionalParameters, token) => customRequest_(query, optionalParameters, token);

function customRequest_(query, optionalParameters, token) {
  console.error("`customRequest` is deprecated");
}