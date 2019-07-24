const PodSSOService = require('../../lib/main');

// Variable Initialization
let podSSOService = new PodSSOService({});

// ************************************************************
// function: getAccessTokenByOtpScenario
let getAccessTokenByOtpScenarioData = {
  // ------ REQUIRED ------
  identity: 'MOBILE or Email',
  otp: 'OTP',
  authorization: 'Signature keyId=KEY ID,signature= SIGNATURE,headers=host',
  client_id: 'CLIENT ID',
  client_secret: 'CLIENT SECRET'

  // ------ OPTIONAL ------
  // grant_type: 'GRANT TYPE'
};

podSSOService.getAccessTokenByOtpScenario(getAccessTokenByOtpScenarioData)
  .then(function (result) {
    console.log('function: getAccessTokenByOtpScenario ============>', result, '\n');
  })
  .catch(function (e) {
    console.log('error ============>', e.code, e.message);
  });

// ************************************************************
// function: verify
let verifyData = {
  // ------ REQUIRED ------
  identity: 'MOBILE or Email',
  otp: 'CODE RECIEVED',
  authorization: 'Signature keyId=KEY ID,signature= SIGNATURE,headers=host'

  // ------ OPTIONAL ------
};

podSSOService.verify(verifyData)
  .then(function (result) {
    console.log('function: verify ============>', result, '\n');
  })
  .catch(function (e) {
    console.log('error ============>', e.code, e.message);
  });

// ************************************************************
// function: getAccessTokenByOtp
let getAccessTokenByOtpData = {
  // ------ REQUIRED ------
  code: 'CODE',
  client_id: 'CLIENT ID',
  client_secret: 'CLIENT SECRET'

  // ------ OPTIONAL ------
  // grant_type: 'GRANT TYPE',
};

podSSOService.getAccessTokenByOtp(getAccessTokenByOtpData)
  .then(function (result) {
    console.log('function: getAccessTokenByOtp ============>', result, '\n');
  })
  .catch(function (e) {
    console.log('error ============>', e.code, e.message);
  });

// ************************************************************
// example: verify, then get access token

podSSOService.verify(verifyData)
  .then(function (result) {
    console.log('function: verify ============>', result, '\n');
    return podSSOService.getAccessTokenByOtp({
      code: result.code,
      client_id: 'CLIENT ID',
      client_secret: 'CLIENT SECRET'
    });
  })
  .then(function (result) {
    console.log('function: getAccessTokenByOtp ============>', result, '\n');
  })
  .catch(function (e) {
    console.log('error ============>', e);
  });
