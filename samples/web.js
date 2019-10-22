// This sample code shows you how to use SSO function to login with your browser

const PodSSOService = require('../../lib/main');

// Variable Initialization
let podSSOService = new PodSSOService({});

// *****************************************************************
// function: getAccessToken
let getAccessTokenData = {
  // ------ REQUIRED ------
  code: 'CODE',
  client_id: 'CLIENT ID',
  client_secret: 'CLIENT SECRET',
  redirect_uri: 'REDIRECT URI'

  // ------ OPTIONAL ------
  // grant_type: 'GRANT TYPE',
  // callback_uri: 'CALLBACK URI'
  // username: 'USERNAME'
  // identity: 'IDENTITY'
  // identityType: 'IDENTITY TYPE'
  // password: 'PASSWORD'
  // code_verifier: 'CODE VERIFIER'
};

podSSOService.getAccessToken(getAccessTokenData)
  .then(function (result) {
    console.log('function: getAccessToken ============>', result, '\n');
  })
  .catch(function (e) {
    console.log('error ============>', e);
  });

// *****************************************************************
// function: refreshAccessToken
let refreshAccessTokenData = {
  // ------ REQUIRED ------
  refresh_token: 'REFRESH TOKEN',
  client_id: 'CLIENT ID',
  client_secret: 'CLIENT SECRET'

  // ------ OPTIONAL ------
  // grant_type: 'GRANT TYPE',
};

podSSOService.refreshAccessToken(refreshAccessTokenData)
  .then(function (result) {
    console.log('function: refreshAccessToken ============>', result, '\n');
  })
  .catch(function (e) {
    console.log('error ============>', e);
  });

// *****************************************************************
// function: getTokenInfo
let getTokenInfoData = {
  // ------ REQUIRED ------
  token: 'TOKEN',
  client_id: 'CLIENT ID',
  client_secret: 'CLIENT SECRET',
  token_type_hint: 'access_token | refresh_token | id_token'

  // ------ OPTIONAL ------
};

podSSOService.getTokenInfo(getTokenInfoData)
  .then(function (result) {
    console.log('function: getTokenInfo ============>', result, '\n');
  })
  .catch(function (e) {
    console.log('error ============>', e);
  });

// *****************************************************************
// function: revokeToken
let revokeTokenData = {
  // ------ REQUIRED ------
  token: 'TOKEN',
  client_id: 'CLIENT ID',
  client_secret: 'CLIENT SECRET',
  token_type_hint: 'access_token | refresh_token | id_token'

  // ------ OPTIONAL ------
};

podSSOService.revokeToken(revokeTokenData)
  .then(function (result) {
    console.log('function: revokeToken ============>', result, '\n');
  })
  .catch(function (e) {
    console.log('error ============>', e);
  });

// *****************************************************************
// function: getLoginUrl
let getLoginUrlData = {
  // ------ REQUIRED ------
  client_id: 'CLIENT ID',
  redirect_uri: 'REDIRECT URI',
  scope: ['scope1', 'scope2']

  // ------ OPTIONAL ------
  // response_type: 'RESPONSE TYPE',

};

console.log(podSSOService.getLoginUrl(getLoginUrlData));
