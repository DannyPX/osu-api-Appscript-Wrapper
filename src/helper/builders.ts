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
): HttpOptions_ => {
  let options: HttpOptions_ = {
    method: method,
    contentType: contentType,
  };
  (access_token !== undefined && access_token !== String.Empty) && (options.headers = { "Authorization": `Bearer ${access_token}` });
  (payload !== undefined && payload !== String.Empty) && (options.payload = payload);

  return options;
};

/**
 * Query string builder.
 * @private
 * @param {HttpParameter_} params An array of parameters.
 * @returns {string} Query string.
 */
const queryBuilder_ = (
  params: HttpParameter_[]
): string => {
  var query: string = "";
  params.forEach(function (param: HttpParameter_) {
    query = `${query}${returnQueryParamOrEmpty_(param)}&`;
  });

  return query;
};

/**
 * Path parameter builder.
 * @private
 * @param {HttpParameter_} param Parameter.
 * @returns {string} Path parameter in string.
 */
const returnQueryParamOrEmpty_ = (
  param: HttpParameter_
): string => {
  return (param.value !== undefined && param.value !== String.Empty) ? param.key + "=" + param.value : String.Empty;
};

/**
 * Query path builder.
 * @private
 * @param {string} param Parameter.
 * @returns {string} Query path in string.
 */
const returnUrlParamOrEmpty_ = (
  param: string
): string => {
  return (param !== undefined && param !== String.Empty) ? `/${param}` : String.Empty;
};

/**
 * Build parameter object.
 * @private
 * @param {string} key Key.
 * @param {string=} value Path.
 * @returns {HttpParameter_}
 */
const parseParam_ = (
  key: string,
  value?: string | number | boolean | any[]
): HttpParameter_ => {
  let param: HttpParameter_ = {
    key: key,
    value: value
  };

  return param;
};

const parseCursor_ = (
  cursor_string: string
) => {
  return (cursor_string !== undefined && cursor_string !== String.Empty) ? `&${cursor_string}` : String.Empty
}