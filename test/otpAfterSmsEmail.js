// This sample code shows you how to use OTP to send the sms code to your client

// External Modules
const expect = require('chai').expect;

const PodSSOService = require('../lib/main');

// Variable Initialization
let podSSO = new PodSSOService({});
let clientId = 'CLIENT ID'; // YOUR CLIENT ID
let clientSecret = 'CLIENT SECTERT'; // YOUR CLIENT SECTERT

let verifyData = {
  identity: 'IDENTITY',
  otp: 'CODE RECIEVED',
  authorization: 'Signature keyId=KEYID,signature=SIGNATURE,headers=host'
};
let validation = { additional: 'additional' };

describe.only('API: getAccessTokenByOtpScenario (verify & getAccessToken) ', function () {
  this.timeout(10000);

  it('correct request', function (done) {
    podSSO.getAccessTokenByOtpScenario(Object.assign(verifyData, { client_id: clientId, client_secret: clientSecret }))
      .then(function (result) {
        expect(result).to.have.property('id_token');
        done();
      })
      .catch(function () {
        // console.log('!!!!!!!!!!!!!!!!!!========>', error);
        done(new Error());
      });
  });

  it('incorrect request (validation error)', function (done) {
    podSSO.getAccessTokenByOtpScenario(validation)
      .then(function (result) {
        done(new Error());
      })
      .catch(function (error) {
        expect(error).to.have.property('code', 887);
        done();
      });
  });
});

describe('API: verify', function () {
  this.timeout(10000);

  it('correct request', function (done) {
    podSSO.verify(verifyData)
      .then(function (result) {
        // console.log('========================>', result);
        expect(result).to.have.property('code');
        done();
      })
      .catch(function () {
        // console.log('!!!!!!!!!!!!!!!!!!!!!>', error);
        done(new Error());
      });
  });

  it('incorrect request (validation error)', function (done) {
    podSSO.handshake(validation)
      .then(function () {
        console.log();
        done(new Error());
      })
      .catch(function (error) {
        expect(error).to.have.property('code', 887);
        done();
      });
  });
});

describe('API: getAccessTokenByOtp', function () {
  this.timeout(10000);
  let code;

  before('before for getAccessTokenByOtp (doing verify)', function (done) {
    podSSO.verify(verifyData)
      .then(function (result) {
        code = result.code;
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });

  it('correct request', function (done) {
    podSSO.getAccessTokenByOtp({
      code: code,
      client_id: clientId,
      client_secret: clientSecret
    })
      .then(function (result) {
        // console.log(result);
        expect(result).to.have.property('id_token');
        done();
      })
      .catch(function () {
        done(new Error());
      });
  });

  it('incorrect request (wrong code)', function (done) {
    podSSO.getAccessTokenByOtp({
      code: 'HELLO WOLRD!',
      client_id: clientId,
      client_secret: clientSecret
    })
      .then(function (result) {
        done(new Error());
      })
      .catch(function (error) {
        expect(error).to.have.property('code', 400);
        done();
      });
  });

  it('incorrect request (validation error)', function (done) {
    podSSO.getAccessTokenByOtp(validation)
      .then(function (result) {
        done(new Error());
      })
      .catch(function (error) {
        expect(error).to.have.property('code', 887);
        done();
      });
  });
});
