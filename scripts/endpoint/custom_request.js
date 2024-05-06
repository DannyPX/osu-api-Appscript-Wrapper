/**
 * Create a custom get request.
 * @public
 * @param {String} query Example `users/123456789/beatmapsets/graveyard`
 * @param {Array} optionalParameters Example `[ {param: "limit", value: "1"} , {param: "offset", value: "0"} ]` To create `?limit=1&offset=0`
 * @param {String} token Access Token
 * @return {JSONObject}
 */
var customGetRequest = (query, optionalParameters, token) => customGetRequest_(query, optionalParameters, token)

function customGetRequest_(query, optionalParameters, token) {
  var oP = []
  
  optionalParameters.forEach(function(param) {
    oP.push(parseParam_(param.param, param.value))
  }) 
  
  let queryParameters = queryBuilder_(oP)

  let q = query + "?" + queryParameters
  return fetchData_(q, token, apiUrl, JSON.parse)
}

/**
 * Create a custom post request.
 * @public
 * @param {String} query Example `chat/channels/123456789/messages`
 * @param {Array} payload Example `{<key1>: <value1>, <key2>: <value2>}`
 * @param {String} token Access Token
 * @return {JSONObject}
 */
var customPostRequest = (query, payload, token) => customPostRequest_(query, payload, token)

function customPostRequest_(query, payload, token) {
  return postData_(query, payload, token, apiUrl, JSON.parse)
}

