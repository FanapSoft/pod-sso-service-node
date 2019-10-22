// This sample code shows you how to use OTP to send the sms code to your client

// External Modules
const expect = require('chai').expect;

const PodSSOService = require('../lib/main');
const utils = require('pod-utilities');
const privateKey = require('./key').privateKey;

// Variable Initialization
let podSSO = new PodSSOService({});
let clientId = 'CLIENT ID'; // Your Client ID
let apiToken = 'API TOKEN'; // Your Api Token
let identity = 'IDENTITY';

describe.only('API: getOtpScenario (handshake & authorize) ', function () {
  this.timeout(10000);
  let correct = {
    device_uid: utils.uniqueId(),
    identity: identity,
    privateKey: privateKey,
    token: apiToken,
    client_id: clientId
  };
  let validation = { additional: 'additional' };

  it('correct request', function (done) {
    podSSO.getOtpScenario(correct)
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('user_id');
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });

  xit('incorrect request (validation error)', function (done) {
    podSSO.getOtpScenario(validation)
      .then(function (result) {
        done(new Error());
      })
      .catch(function (error) {
        expect(error).to.have.property('code', 887);
        done();
      });
  });
});

describe('API: handshake', function () {
  this.timeout(10000);
  let correct = {
    device_uid: utils.uniqueId(),
    token: apiToken,
    client_id: clientId
  };
  let validation = { additional: 'additional' };

  it('correct request', function (done) {
    podSSO.handshake(correct)
      .then(function (result) {
        console.log('==================>', JSON.stringify(result, null, 2));
        expect(result).to.have.property('device');
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });

  it('incorrect request (validation error)', function (done) {
    podSSO.handshake(validation)
      .then(function (result) {
        done(new Error());
      })
      .catch(function (error) {
        expect(error).to.have.property('code', 887);
        done();
      });
  });
});

describe('API: authorize', function () {
  this.timeout(10000);
  let correct = { identity: identity };
  let validation = { additional: 'additional' };
  let authorizeHeaderValue;

  before('before for authorize (doing handshake)', function (done) {
    podSSO.handshake({
      device_uid: utils.uniqueId(),
      token: apiToken,
      client_id: clientId
    })
      .then(function (result) {
        expect(result).to.have.property('device');
        authorizeHeaderValue = 'Signature keyId=' + result.keyId +
          ',signature=' + utils.createSign('host: accounts.pod.land', privateKey, 'RSA-SHA256', 'base64') +
          ',headers=host';
        correct.authorization = authorizeHeaderValue;
        console.log('!!!!!!!!!!!!', correct, '!!!!!!!!!!!');
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });

  it('correct request', function (done) {
    podSSO.authorize(correct)
      .then(function (result) {
        console.log('@@@@@==========>', JSON.stringify(result, null, 2));
        expect(result).to.have.property('identity');
        done();
      })
      .catch(function () {
        done(new Error());
      });
  });

  it('incorrect request (validation error)', function (done) {
    podSSO.authorize(validation)
      .then(function (result) {
        done(new Error());
      })
      .catch(function (error) {
        expect(error).to.have.property('code', 887);
        done();
      });
  });
});
