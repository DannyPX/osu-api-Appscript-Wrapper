/**
 * Http Options builder.
 * @private
 * @param {RequestMethod_} method Http request method.
 * @param {ContentType_} contentType Content-Type.
 * @param {string} access_token Access Token.
 * @param {any=} payload Payload.
 * @returns {HttpOptions_}
 */
const getOptions_ = (
  method: string,
  contentType: string,
  access_token?: string,
  payload?: any
) : HttpOptions_ => {
  let options: HttpOptions_ = {
    method: method,
    contentType: contentType,
  };
  //  { "Authorization": `Bearer ${access_token}`}
  access_token !== undefined && (options.headers = { "Authorization": `Bearer ${access_token}`})
  payload !== undefined && (options.payload = payload);

  return options;
};

/**
 * Query string builder.
 * @private
 * @param {HttpParameter_} params An array of parameters.
 * @returns {string} Query string.
 */
const queryBuilder_ = (
  params: Array<HttpParameter_>
) : string => {
  var query: string;
  params.forEach(function (param: HttpParameter_) {
    query = `${query}${returnPathParamOrEmpty_(param)}&`
  });
  return query
};

/**
 * Path parameter builder.
 * @private
 * @param {HttpParameter_} param Parameter.
 * @returns {string} Path parameter in string.
 */
const returnPathParamOrEmpty_ = (
  param: HttpParameter_
) : string => {
  return param.value !== undefined ? param.key + "=" + param.value : String.Empty;
};

/**
 * Query path builder.
 * @private
 * @param {string} param Parameter.
 * @returns {string} Query path in string.
 */
const returnQueryParamOrEmpty_ = (
  param: string
) : string => {
  return param !== undefined ? `/${param}` : String.Empty
};

/**
 * Build parameter object.
 * @private
 * @param {string} key Key.
 * @param {string} value Path.
 * @returns {HttpParameter_}
 */
const parseParam_ = (
  key: string,
  value: string
) : HttpParameter_ => {
  let param : HttpParameter_ = {
    key: key,
    value: value
  }

  return param
}