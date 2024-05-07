/**
 * Http request
 * @private
 * @param {string} query Query string.
 * @param {RequestMethod_} request_method Request method.
 * @param {string} url Request url.
 * @param {string=} access_token Access Token.
 * @param {any=} payload Payload.
 * @returns {any}
 */
const fetchData_ = (
  query: string,
  request_method: string,
  url: string,
  access_token?: string,
  payload?: any
) => {
  let options: HttpOptions_ = getOptions_(
    request_method,
    ContentType_.Json,
    access_token
  );
  
  payload !== undefined && (options.payload = JSON.stringify(payload))

  let response = tryFetch_(
    `${url}${query}`,
    options
  );

  return response instanceof Error ? console.error(response) : JSON.parse(response.getContentText());
}

/**
 * Http request
 * @private
 * @param {string} query Query String 
 * @param {HttpOptions_} options Http Options
 * @returns {(GoogleAppsScript.URL_Fetch.HTTPResponse)}
 */
const tryFetch_ = (
  query: string,
  options: HttpOptions_
) => {
  try {
    return UrlFetchApp.fetch(query, options);
  } catch (error) {
    return Error(error.message);
  }
};