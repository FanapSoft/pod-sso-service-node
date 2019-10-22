/**
 * @namespace PodSSOService
 */

// Pod Modules
const PodBaseService = require('pod-base-service');
const utils = require('pod-utilities');

// Project Modules
const schemas = require('./schemas');
const apiUrls = require('./urls');
const config = require('./config');

/**
 * PodSSOService
 * @memberOf PodSSOService
 */
class PodSSOService extends PodBaseService {
  /**
   * @description This is the class constructor
   */
  constructor (confObj) {
    if (!confObj) {
      confObj = {};
    }
    super(schemas, apiUrls, confObj, 'pod-sso-service', true);
    this.clientInfo = {};
    this.clientInfo.clientId = confObj.clientId || null;
    this.clientInfo.clientSecret = confObj.clientSecret || null;
    this.clientInfo.apiToken = confObj.apiToken || null;
    this.clientInfo.redirectUri = confObj.redirectUri || null;
  }

  // #1
  /**
   * @description This function gets the access token for a specific user
   * @param {getAccessTokenObj} data
   * @returns {Promise}
   */
  getAccessToken (data) {
    let apiName = 'getAccessToken';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.grant_type = data.grant_type || 'authorization_code';
    data.client_id = data.client_id || this.clientInfo.clientId;
    data.client_secret = data.client_secret || this.clientInfo.clientSecret;
    data.redirect_uri = data.redirect_uri || this.clientInfo.redirectUri;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers['Content-Type'] = config.urlEncodedHeader;

    return this.callService(apiName, headers, data);
  }

  // #2
  /**
  * @description This function gets the access token for a specific user for OTP Method
  * @param {getAccessTokenByOtpObj} data
  * @returns {Promise}
  */
  getAccessTokenByOtp (data) {
    let apiName = 'getAccessTokenByOtp';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.grant_type = data.grant_type || 'authorization_code';
    data.client_id = data.client_id || this.clientInfo.clientId;
    data.client_secret = data.client_secret || this.clientInfo.clientSecret;
    headers['Content-Type'] = config.urlEncodedHeader;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    return this.callService(apiName, headers, data);
  }

  // #3
  /**
   * @description This function retfreshes the access token for a specific user
   * @param {refreshAccessTokenObj} data
   * @returns {Promise}
   */
  refreshAccessToken (data) {
    let apiName = 'refreshAccessToken';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.grant_type = data.grant_type || 'refresh_token';
    data.client_id = data.client_id || this.clientInfo.clientId;
    data.client_secret = data.client_secret || this.clientInfo.clientSecret;
    headers['Content-Type'] = config.urlEncodedHeader;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    return this.callService(apiName, headers, data);
  }

  // #4
  /**
   * @description This function gets the token information
   * @param {getTokenInfoObj} data
   * @returns {Promise}
   */
  getTokenInfo (data) {
    let apiName = 'getTokenInfo';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data.token_type_hint = data.token_type_hint || 'access_token';
    data.client_id = data.client_id || this.clientInfo.clientId;
    data.client_secret = data.client_secret || this.clientInfo.clientSecret;
    headers['Content-Type'] = config.urlEncodedHeader;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    return this.callService(apiName, headers, data);
  }

  // #5
  /**
   * @description This function revokes the given token
   * @param {revokeTokenObj} data
   * @returns {Promise}
   */
  revokeToken (data) {
    let apiName = 'revokeToken';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data.token_type_hint = data.token_type_hint || 'access_token';
    data.client_id = data.client_id || this.clientInfo.clientId;
    data.client_secret = data.client_secret || this.clientInfo.clientSecret;
    headers['Content-Type'] = config.urlEncodedHeader;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    return this.callService(apiName, headers, data)
      .then(function (result) {
        if (result === '') {
          result = 'The operation was successful.';
          return result;
        }
        else {
          return result;
        }
      });
  }

  // #6
  /**
   * @description This function starts the otp process with creating a contract
   * @param {handshakeObj} data
   * @returns {Promise}
   */
  handshake (data) {
    let apiName = 'handshake';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.client_id = data.client_id || this.clientInfo.clientId;
    data.token = data.token || this.clientInfo.apiToken;
    headers['Content-Type'] = config.urlEncodedHeader;
    headers['Authorization'] = 'Bearer ' + data.token;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    return this.callService(apiName, headers, data, null, false, data.client_id);
  }

  // #7
  /**
   * @description This function sends the sms to the user after a successfull handshake
   * @param {authorizeObj} data
   * @returns {Promise}
   */
  authorize (data) {
    let apiName = 'authorize';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.response_type = data.response_type || 'code';
    headers['Content-Type'] = config.urlEncodedHeader;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('keyId')) {
      headers['Authorization'] = 'Signature keyId=' + data.keyId + ',signature=' + data.signature + ',headers=host';
      delete data.keyId;
      delete data.signature;
    }
    else {
      headers['Authorization'] = data.authorization;
      delete data.Authorization;
    }

    return this.callService(apiName, headers, data, null, false, data.identity);
  }

  // #8
  /**
   * @description This function does the handshake and authorize at the same time
   * @param {handshakeAndAuthorizeObj} data
   * @returns {Promise}
   */
  getOtpScenario (data) { // handshakeAndAuthorize
    let self = this;
    let apiName = 'handshakeAndAuthorize';

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.client_id = data.client_id || this.clientInfo.clientId;
    data.token = data.token || this.clientInfo.apiToken;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    let handshakeData = utils.extractKeysFromObject(data, Object.keys(this.schemas['handshake'].body.properties));
    let authorizeData = utils.extractKeysFromObject(data, Object.keys(this.schemas['authorize'].body.properties));

    return this.handshake(handshakeData)
      .then(function (result) {
        let authorizeHeaderValue = 'Signature keyId=' + result.keyId +
          ',signature=' + utils.createSign(config.otpHost, data.privateKey, config.algorithm, config.encoding) +
          ',headers=' + config.otpHostIdentification;
        authorizeData.authorization = authorizeHeaderValue;
        return self.authorize(authorizeData).then(function (result) {
          result.authorization = authorizeHeaderValue;
          return result;
        });
      });
  }

  // #9
  /**
   * @description This function verifies the otp code
   * @param {verifyObj} data
   * @returns {Promise}
   */
  verify (data) {
    let apiName = 'verify';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    headers['Content-Type'] = config.urlEncodedHeader;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('keyId')) {
      headers['Authorization'] = 'Signature keyId=' + data.keyId + ',signature=' + data.signature + ',headers=host';
      delete data.keyId;
      delete data.signature;
    }
    else {
      headers['Authorization'] = data.authorization;
      delete data.Authorization;
    }

    // delete data.authorization;
    // let temp = data.identity;
    // delete data.identity;

    return this.callService(apiName, headers, data, null, false, data.identity);
  }

  // #10
  /**
     * @description This function verifies the otp code and gets the access token for the user
     * @param {verifyAndGetAccessTokenObj} data
     * @returns {Promise}
     */
  getAccessTokenByOtpScenario (data) { // verifyAndGetAccessToken
    let self = this;
    let apiName = 'verifyAndGetAccessToken';

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.client_id = data.client_id || this.clientInfo.clientId;
    data.client_secret = data.client_secret || this.clientInfo.clientSecret;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    let verifyData = utils.extractKeysFromObject(data, Object.keys(this.schemas['verify'].body.properties));
    let accessTokenData = utils.extractKeysFromObject(data, Object.keys(this.schemas['getAccessTokenByOtp'].body.properties));

    return this.verify(verifyData)
      .then(function (result) {
        return self.getAccessTokenByOtp(Object.assign(accessTokenData, { code: result.code }));
      });
  }

  // #11
  /**
   * @description This function creates the login url
   * @param {getLoginUrlObj} data
   * @returns {string}
   */
  getLoginUrl (data) {
    let apiName = 'getLoginUrl';

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.response_type = data.response_type || 'code';
    data.client_id = data.client_id || this.clientInfo.clientId;
    data.redirect_uri = data.redirect_uri || this.clientInfo.redirectUri;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    let url = this.checkAndAppend(this.urls.ssoAddress, '/oauth2/authorize/?');
    url += 'client_id=' + data.client_id;
    url += '&reponse_type=' + data.response_type;
    url += '&redirect_uri=' + data.redirect_uri;
    url += '&scope=' + data.scope.join(',');

    return encodeURI(url);
  }
}

module.exports = PodSSOService;
