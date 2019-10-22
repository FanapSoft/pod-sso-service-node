/**
 * @typedef {object} confObj
 * @property {string} [clientId] - Your client ID, available in business panel
 * @property {string} [clientSecret] - Your client secrect, available in business panel
 * @property {string} [apiToken] - Your API token, available in business panel
 * @property {string} [redirectUri] - Your redirect URI, set this value in your business panel
 */

// #1
/**
 * @typedef {object} getAccessTokenObj
 * @property {string} code - Code recieved from SSO
 * @property {string} client_id - Your client ID, available in business panel
 * @property {string} client_secret - Your client secrect, available in business panel
 * @property {string} redirect_uri - Your redirect URI, set this value in your business panel
 * @property {string} [grant_type] - One of these values: authorization_code, refresh_token, password
 * @property {string} [callback_uri] -
 * @property {string} [username] - Only applicable for password grant type
 * @property {string} [identity] - Only applicable for password grant type
 * @property {string} [identityType] - Only applicable for password grant type
 * @property {string} [password] - Only applicable for password grant type
 * @property {string} [code_verifier] - Only applicable if using PKCE for native app login
 */

// #2
/**
 * @typedef {object} getAccessTokenByOtpObj
 * @property {string} code - Code recieved from SSO
 * @property {string} client_id - Your client ID, available in business panel
 * @property {string} client_secret - Your client secrect, available in business panel
 * @property {string} [grant_type] - One of these values: authorization_code, refresh_token, password
 */

// #3
/**
 * @typedef {object} refreshAccessTokenObj
 * @property {string} code - Code recieved from SSO
 * @property {string} client_id - Your client ID, available in business panel
 * @property {string} client_secret - Your client secrect, available in business panel
 */

// #4
/**
 * @typedef {object} getTokenInfoObj
 * @property {string} token - Token recieved from SSO
 * @property {string} token_type_hint - One of these values: access_token, refresh_token, id_token
 * @property {string} client_id - Your client ID, available in business panel
 * @property {string} client_secret - Your client secrect, available in business panel
 */

// #5
/**
 * @typedef {object} revokeTokenObj
 * @property {string} token - Token recieved from SSO
 * @property {string} token_type_hint - One of these values: access_token, refresh_token, id_token
 * @property {string} client_id - Your client ID, available in business panel
 * @property {string} client_secret - Your client secrect, available in business panel
 */

// #6
/**
 * @typedef {object} handshakeObj
 * @property {string} token - Your API token, available in business panel
 * @property {string} client_id - Your client ID, available in business panel
 * @property {string} device_uid - Device unique identifier
 * @property {string} [device_lat]
 * @property {string} [device_lon]
 * @property {string} [device_os]
 * @property {string} [device_os_version]
 * @property {string} [device_type]
 * @property {string} [device_name]
 * @property {string} [algorithm]
 */

// #7
/**
 * @typedef {object} authorizeObj
 * @property {string} authorization - The authorization header you created
 * @property {string} identity - Your customer's mobile number or email address
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

// #8
/**
 * @typedef {object} handshakeAndAuthorizeObj
 * @property {string} client_id - Your client ID, available in business panel
 * @property {string} privateKey - Your private key
 * @property {string} token - Your API token
 * @property {string} identity - Your customer's mobile number or email address
 * @property {string} device_uid - Device unique identifier
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

// #9
/**
 * @typedef {object} verifyObj
 * @property {string} authorization - The authorization header you created
 * @property {string} otp - The code received in email or sms
 * @property {string} identity - Your customer's mobile number or email address
 */

// #10
/**
 * @typedef {object} verifyAndGetAccessTokenObj
 * @property {string} authorization - The authorization header you created
 * @property {string} otp - The code received in email or sms
 * @property {string} identity - Your customer's mobile number or email address
 * @property {string} client_id - Your client ID, available in business panel
 * @property {string} client_secret - Your client secrect, available in business panel
 */

// #11
/**
 * @typedef {object} getLoginUrlObj
 * @property {string} client_id - Your client ID, available in business panel
 * @property {string} redirect_uri - Your client secrect, available in business panel
 * @property {array} scope - Scopes you need (If you had the permission)
 * @property {string} [response_type] - Your redirect URI, set this value in your business panel
 */
