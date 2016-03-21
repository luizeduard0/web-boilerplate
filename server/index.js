const bootstrap = require('reax-commons/server/utils/bootstrap')
const services = require('./services')

bootstrap(__dirname + '/public', services)
