/**
 * @typedef {object} confObj
 * @property {string} [clientId]
 * @property {string} [clientSecret]
 * @property {string} [apiToken]
 * @property {string} [redirectUri]
 */

/**
 * @typedef {object} getAccessTokenObj
 * @property {string} code
 * @property {string} client_id
 * @property {string} client_secret
 * @property {string} redirect_uri
 * @property {string} [grant_type]
 * @property {string} [callback_uri]
 * @property {string} [username]
 * @property {string} [identity]
 * @property {string} [identityType]
 * @property {string} [password]
 * @property {string} [code_verifier]
 */

/**
 * @typedef {object} getAccessTokenByOtpObj
 * @property {string} code
 * @property {string} client_id
 * @property {string} client_secret
 * @property {string} [grant_type]
 */

/**
 * @typedef {object} refreshAccessTokenObj
 * @property {string} code
 * @property {string} client_id
 * @property {string} client_secret
 */

/**
 * @typedef {object} getTokenInfoObj
 * @property {string} token
 * @property {string} token_type_hint
 * @property {string} client_id
 * @property {string} client_secret
 */

/**
 * @typedef {object} revokeTokenObj
 * @property {string} token
 * @property {string} token_type_hint
 * @property {string} client_id
 * @property {string} client_secret
 */

/**
 * @typedef {object} handshakeObj
 * @property {string} client_id
 * @property {string} privateKey
 * @property {string} [device_uid]
 * @property {string} [device_lat]
 * @property {string} [device_lon]
 * @property {string} [device_os]
 * @property {string} [device_os_version]
 * @property {string} [device_type]
 * @property {string} [device_name]
 * @property {string} [algorithm]
 */

/**
 * @typedef {object} authorizeObj
 * @property {string} authorization
 * @property {string} identity
 * @property {string} [response_type]
 * @property {string} [identityType]
 * @property {string} [loginAsUserId]
 * @property {string} [state]
 * @property {string} [client_id]
 * @property {string} [redirect_uri]
 * @property {string} [callback_uri]
 * @property {string} [scope]
 * @property {string} [code_challenge]
 * @property {string} [code_challenge_method]
 * @property {string} [referrer]
 * @property {string} [referrerType]
 */

/**
 * @typedef {object} handshakeAndAuthorizeObj
 * @property {string} client_id
 * @property {string} privateKey
 * @property {string} token
 * @property {string} identity
 * @property {string} device_uid
 * @property {string} [device_lat]
 * @property {string} [device_lon]
 * @property {string} [device_os]
 * @property {string} [device_os_version]
 * @property {string} [device_type]
 * @property {string} [device_name]
 * @property {string} [loginAsUserId]
 * @property {string} [state]
 * @property {string} [client_id]
 * @property {string} [redirect_uri]
 * @property {string} [callback_uri]
 * @property {string} [scope]
 * @property {string} [code_challenge]
 * @property {string} [code_challenge_method]
 * @property {string} [referrer]
 * @property {string} [referrerType]
 */

/**
 * @typedef {object} verifyObj
 * @property {string} authorization
 * @property {string} otp
 * @property {string} identity
 */

/**
 * @typedef {object} verifyAndGetAccessTokenObj
 * @property {string} authorization
 * @property {string} otp
 * @property {string} identity
 * @property {string} client_id
 * @property {string} client_secret
 */
