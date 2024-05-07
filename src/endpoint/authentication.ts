/**
 * The client credential flow provides a way for developers to get access tokens that do not have associated user permissions; as such, these tokens are considered as guest users.
 * @public
 * @param {number} client_id The Client ID you received when you registered.
 * @param {string} client_secret The client secret of your application.
 * @param {string} grant_type This must always be `client_credentials`.
 * @param {Scope} scope Must be `Public`; other scopes have no meaningful effect.
 * @returns 
 */
const ClientCredentialsGrant = (
  client_id: number,
  client_secret: string,
  grant_type: string,
  scope: string
) => {
  let payload = {
    client_id: client_id,
    client_secret: client_secret,
    grant_type: grant_type,
    scope: scope
  };

  let query = `${authenticationUrlToken}`;

  return fetchData_(query, RequestMethod_.Post, authenticationUrl, undefined, payload);
};