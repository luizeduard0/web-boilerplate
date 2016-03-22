const bootstrap = require('reax-commons/server/utils/bootstrap')
const services = require('./services')

bootstrap({
  publicPath: __dirname + '/public',
  auth: {
    token: {
      secret: '8tPL5GnRvvHySQjAqgjVFnpq'
    },
    userEndpoint: '/api/users'
  },
  services
})
