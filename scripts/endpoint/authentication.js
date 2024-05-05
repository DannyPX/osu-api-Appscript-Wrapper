/**
 * Made by DannyPX
 * Appscript library to request data from osu!api v2
 * 
 * Authentication
 * https://osu.ppy.sh/docs/index.html#authentication
 */

/// VARIABLES

let baseUrl = 'https://osu.ppy.sh/'
let lazerUrl = 'https://lazer.ppy.sh/'
let apiVersion = 'api/v2/'
let apiUrl = baseUrl + apiVersion
let tokenUrl = "oauth/token"

/// ENDPOINTS

/**
 * ## Client Credentials Grant
 * The client credential flow provides a way for developers to get access tokens that do not have associated user permissions; as such, these tokens are considered as guest users.
 * https://osu.ppy.sh/docs/index.html#client-credentials-grant
 * @public
 * @param {String} client_id The Client ID you received when you registered.
 * @param {String} client_secret The client secret of your application.
 * @return {JSONObject}
 */
var ClientCredentialsGrant = (client_id, client_secret) => ClientCredentialsGrant_(client_id, client_secret)

function ClientCredentialsGrant_(client_id, client_secret) {
  return init_(client_id, client_secret)
}

/**
 * Initializes an osuAPI service
 * @param {String} client_id Your client_id
 * @param {String} client_secret Your client_secret
 * @constructor
 */
let init_ = function(client_id, client_secret) {
  this.client_id = client_id;
  this.client_secret = client_secret;
  return auth_(this)
}

function auth_(osu) {
  var payload = {
    'client_id' : osu.client_id,
    'client_secret' : osu.client_secret,
    'grant_type' : ENUM_API_GRANT_TYPE.CLIENT_CREDENTIALS,
    'scope' : ENUM_API_SCOPE.PUBLIC
  }

  var response = postData_(tokenUrl, payload, _, baseUrl, JSON.parse)

  return response
}