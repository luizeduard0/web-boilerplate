const feathers = require('feathers')
const rest = require('feathers-rest')
const socketio = require('feathers-socketio')
const hooks = require('feathers-hooks')
const bodyParser = require('body-parser')
const messageService = require('./services/messageService')

const app = feathers()
  .configure(rest())
  .configure(socketio())
  .configure(hooks())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/messages', messageService)

module.exports = app
