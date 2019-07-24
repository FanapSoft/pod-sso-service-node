// This sample code shows you how to use OTP to send the sms code to your client

const PodSSOService = require('../../lib/main');
const utils = require('pod-utilities');
const privateKey = require('./key').privateKey;

// Variable Initialization
let podSSOService = new PodSSOService({});

// *****************************************************************
// function: getOtpScenario
let getOtpScenarioData = {
  // ------ REQUIRED ------
  device_uid: 'DEVICE UNIQUE ID',
  identity: 'MOBILE or EMAIL',
  privateKey: 'PRIVATE KEY',
  token: 'API TOKEN',
  client_id: 'CLIENT ID'

  // ------ OPTIONAL ------
  // device_lon: 'DEVICE LON',
  // device_lat: 'DEVICE LAT',
  // device_os: 'DEVICE OS',
  // device_os_version: 'DEVICE OS VERSION'
  // device_type: 'DEVICE TYPE',
  // device_name: 'DEVICE NAME',
  // identityType: 'IDENTITY TYPE',
  // loginAsUserId: 'LOGIN AS USER ID',
  // state: 'STATE',
  // redirect_uri: 'REDIRECT URI',
  // callback_uri: 'CALLBACK URI',
  // scope: 'SCOPE',
  // code_challenge: 'CODE CHALLENGE',
  // code_challenge_method: 'CODE CHALLENGE METHOD'
  // referrer: 'REFERRE',
  // referrerType: 'REFERRER TYPE'
};

podSSOService.getOtpScenario(getOtpScenarioData)
  .then(function (result) {
    console.log('function: getOtpScenario ============>', result, '\n');
  })
  .catch(function (e) {
    console.log('error ============>', e);
  });

// ************************************************************
// function: handshake
let handshakeData = {
  // ------ REQUIRED ------
  device_uid: 'DEVICE UNIQUE ID',
  token: 'API TOKEN',
  client_id: 'CLIENT ID'

  // ------ OPTIONAL ------
  // device_lat: ''DEVICE LAT',
  // device_lon: ''DEVICE LON',
  // device_os: 'DEVICE OS',
  // device_os_version: 'DEVICE OS VERSION'
  // device_type: 'DEVICE TYPE',
  // device_name: 'DEVICE NAME',
  // algorithm: 'ALGORITHM'
};

podSSOService.handshake(handshakeData)
  .then(function (result) {
    console.log('function: handshake ============>', result, '\n');
  })
  .catch(function (e) {
    console.log('error ============>', e);
  });

// ************************************************************
// function: authorize
let authorizeData = {
  // ------ REQUIRED ------
  authorization: 'AUTHORIZATION HEADER',
  identity: 'MOBILE or EMAIL'

  // ------ OPTIONAL ------
  // response_type: 'RESPONSE TYPE'
  // identityType: 'IDENTITY TYPE',
  // loginAsUserId: 'LOGIN AS USER ID',
  // state: 'STATE',
  // redirect_uri: 'REDIRECT URI',
  // callback_uri: 'CALLBACK URI',
  // scope: 'SCOPE',
  // code_challenge: 'CODE CHALLENGE',
  // code_challenge_method: 'CODE CHALLENGE METHOD'
  // referrer: 'REFERRER',
  // referrerType: 'REFERRER TYPE'
};

podSSOService.authorize(authorizeData)
  .then(function (result) {
    console.log('function: handshake ============>', result, '\n');
  })
  .catch(function (e) {
    console.log('error ============>', e);
  });

// ************************************************************
// example: handshake and authorize
podSSOService.handshake({
  device_uid: utils.uniqueId(),
  token: 'API TOKEN',
  client_id: 'CLIENT ID'
})
  .then(function (result) {
    console.log('function: handshake ============>', result, '\n');
    let authorizeHeaderValue = 'Signature keyId=' + result.keyId +
      ',signature=' + utils.createSign('host: accounts.pod.land', privateKey, 'RSA-SHA256', 'base64') +
      ',headers=host';
    return podSSOService.authorize({ authorization: authorizeHeaderValue, identity: 'MOBILE or EMAIL' });
  })
  .then(function (result) {
    console.log('function: authorize ============>', result, '\n');
  })
  .catch(function (e) {
    console.log('error ============>', e);
  });
