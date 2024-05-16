/**
 * ### (Deprecated since V22)
 * Get access token
 * @public
 * @param {String} client_id Your client_id
 * @param {String} client_secret Your client_secret
 */
function getToken(client_id, client_secret) {
  console.warn("DeprecationWarning: The getToken endpoint is deprecated. Use ClientCredentialsGrant instead.")
  return init_(client_id, client_secret).access_token
}

/**
* ### (Deprecated since V25)
 * Create a custom request.
 * @public
 * @param {String} query Example `users/11253722/beatmapsets/graveyard`
 * @param {Array} optionalParameters Example `[ {param: "limit", value: "1"} , {param: "offset", value: "0"} ]` To create `?limit=1&offset=0`
 * @param {String} token Access Token
 */
var customRequest = (query, optionalParameters, token) => customRequest_(query, optionalParameters, token)

function customRequest_(query, optionalParameters, token) {
  var oP = []
  
  optionalParameters.forEach(function(param) {
    oP.push(parseParam_(param.param, param.value))
  }) 
  
  let queryParameters = queryBuilder_(oP)

  let q = query + "?" + queryParameters

  console.warn("DeprecationWarning: The customRequest endpoint is deprecated. Use customGetRequest or customPostRequest instead.")

  return fetchData_(q, token, apiUrl, JSON.parse)
}