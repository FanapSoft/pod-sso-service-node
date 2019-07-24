// This sample code shows you how to use SSO function to login with your browser

// External Modules
const expect = require('chai').expect;

const PodSSOService = require('../lib/main');

// Variable Initialization
let podSSO = new PodSSOService({});
let accessToken;
let refreshToken;
let clientId = 'CLIENT ID'; // YOUR CLIENT ID
let clientSecret = 'CLIENT SECRET'; // YOUR CLIENT SECRET
let redirectUri = 'REDIRECT URI'; // YOUR REDIRECT URI
let code = 'CODE'; // 'CODE'

describe.only('API: getAccessToken ', function () {
  this.timeout(10000);
  let correct = {
    code: code,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri
  };
  let additional = { code: accessToken, additional: 'additional' };
  let wrong = { code: 'Invalid token' };

  it('correct request', function (done) {
    podSSO.getAccessToken(correct)
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('access_token');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });

  it('incorrect request (validation error)', function (done) {
    podSSO.getAccessToken(additional)
      .then(function (result) {
        // console.log('========================>', result);
        done(new Error());
      })
      .catch(function (error) {
        // console.log('=============================>', error);
        expect(error).to.have.property('code', 887);
        done();
      });
  });

  it('incorrect request (invalid code)', function (done) {
    podSSO.getAccessToken(wrong)
      .then(function (result) {
        // console.log('========================>', result);
        done(new Error());
      })
      .catch(function (error) {
        // console.log('=============================>', error);
        expect(error).to.have.property('code');
        expect(error).to.have.property('message');
        done();
      });
  });
});

describe('API: refreshAccessToken ', function () {
  this.timeout(10000);
  let correct;
  let additional;
  let wrong;

  before('before: get refresh token', function (done) {
    podSSO.getAccessToken({
      code: code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri
    })
      .then(function (result) {
        refreshToken = result.refresh_token;
        accessToken = result.access_token;
        correct = {
          refresh_token: refreshToken,
          client_id: clientId,
          client_secret: clientSecret
        };
        additional = {
          refresh_token: refreshToken,
          additional: 'additional',
          client_id: clientId,
          client_secret: clientSecret
        };
        wrong = { refresh_token: 'refreshToken' };
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });

  it('correct request', function (done) {
    podSSO.refreshAccessToken(correct)
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('access_token');
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });

  it('incorrect request (validation error)', function (done) {
    podSSO.refreshAccessToken(additional)
      .then(function (result) {
        // console.log('========================>', result);
        done(new Error());
      })
      .catch(function (error) {
        // console.log('=============================>', error);
        expect(error).to.have.property('code', 887);
        done();
      });
  });

  it('incorrect request (invalid refreshToken)', function (done) {
    podSSO.refreshAccessToken(wrong)
      .then(function (result) {
        // console.log('========================>', result);
        done(new Error());
      })
      .catch(function (error) {
        // console.log('=============================>', error);
        expect(error).to.have.property('code');
        expect(error).to.have.property('message');
        done();
      });
  });
});

describe('API: getTokenInfo ', function () {
  this.timeout(10000);
  let correctRefreshToken;
  let correctAcessToken;
  let additional;
  let wrong;

  before('before: get access & refresh token', function (done) {
    podSSO.getAccessToken({
      code: code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri
    })
      .then(function (result) {
        refreshToken = result.refresh_token;
        accessToken = result.access_token;
        correctRefreshToken = {
          token: refreshToken,
          token_type_hint: 'refresh_token',
          client_id: clientId,
          client_secret: clientSecret
        };
        correctAcessToken = {
          token: accessToken,
          client_id: clientId,
          client_secret: clientSecret,
          token_type_hint: 'access_token'
        };
        additional = { token: refreshToken, additional: 'additional' };
        wrong = { token: 'token' };
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });

  it('correct request (for access token)', function (done) {
    podSSO.getTokenInfo(correctAcessToken)
      .then(function (result) {
        console.log('==========================>', result);
        expect(result).to.have.property('active', true);
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });

  it('correct request (for refresh token)', function (done) {
    podSSO.getTokenInfo(correctRefreshToken)
      .then(function (result) {
        // console.log(result);
        expect(result).to.have.property('active', true);
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });

  it('incorrect request (validation error)', function (done) {
    podSSO.getTokenInfo(additional)
      .then(function (result) {
        // console.log('========================>', result);
        done(new Error());
      })
      .catch(function (error) {
        // console.log('=============================>', error);
        expect(error).to.have.property('code', 887);
        done();
      });
  });

  it('incorrect request (invalid refreshToken)', function (done) {
    podSSO.getTokenInfo(wrong)
      .then(function (result) {
        // console.log('========================>', result);
        expect(result).to.have.property('active', false);
        done();
      })
      .catch(function (error) {
        // console.log('=============================>', error);
        expect(error).to.have.property('code');
        expect(error).to.have.property('message');
        done();
      });
  });
});

describe('API: revokeToken ', function () {
  this.timeout(10000);
  let correctRefreshToken;
  let correctAcessToken;
  let additional;

  before('before: get refresh token', function (done) {
    podSSO.getAccessToken({
      code: code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri
    })
      .then(function (result) {
        refreshToken = result.refresh_token;
        accessToken = result.access_token;
        correctRefreshToken = {
          token: refreshToken,
          token_type_hint: 'refresh_token',
          client_id: clientId,
          client_secret: clientSecret
        };
        correctAcessToken = {
          token: accessToken,
          client_id: clientId,
          client_secret: clientSecret,
          token_type_hint: 'access_token'
        };
        additional = { token: refreshToken, additional: 'additional' };
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });

  it('correct request (for access token)', function (done) {
    podSSO.revokeToken(correctAcessToken)
      .then(function (result) {
        console.log(result);
        expect(result).to.equal('The operation was successful.');
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });

  it('correct request (for refresh token)', function (done) {
    podSSO.revokeToken(correctRefreshToken)
      .then(function (result) {
        expect(result).to.equal('The operation was successful.');
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });

  it('incorrect request (validation error)', function (done) {
    podSSO.revokeToken(additional)
      .then(function (result) {
        done(new Error());
      })
      .catch(function (error) {
        // console.log('=============================>', error);
        expect(error).to.have.property('code', 887);
        done();
      });
  });
});
