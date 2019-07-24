module.exports = {
  getAccessToken: {
    baseUrl: 'ssoAddress',
    subUrl: '/oauth2/token',
    method: 'POST'
  },
  getAccessTokenByOtp: {
    baseUrl: 'ssoAddress',
    subUrl: '/oauth2/token',
    method: 'POST'
  },
  refreshAccessToken: {
    baseUrl: 'ssoAddress',
    subUrl: '/oauth2/token',
    method: 'POST'
  },
  getTokenInfo: {
    baseUrl: 'ssoAddress',
    subUrl: '/oauth2/token/info',
    method: 'POST'
  },
  revokeToken: {
    baseUrl: 'ssoAddress',
    subUrl: '/oauth2/token/revoke',
    method: 'POST'
  },
  handshake: {
    baseUrl: 'ssoAddress',
    subUrl: 'oauth2/clients/handshake',
    method: 'POST'
  },
  authorize: {
    baseUrl: 'ssoAddress',
    subUrl: 'oauth2/otp/authorize',
    method: 'POST'
  },
  verify: {
    baseUrl: 'ssoAddress',
    subUrl: 'oauth2/otp/verify',
    method: 'POST'
  }
};
