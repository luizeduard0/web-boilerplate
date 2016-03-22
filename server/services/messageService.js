const NeDB = require('nedb')
const service = require('feathers-nedb')
const errors = require('feathers-errors')
const auth = require('feathers-authentication')
const hooks = require('feathers-hooks')

const db = new NeDB({
  filename: __dirname + '/../data/messages.db',
  autoload: true
})

const messageService = service({
  Model: db,
  paginate: {
    default: 20,
    max: 100
  }
})

function restrictToSender(hook) {
  return hook.app.service('messages').get(hook.id, hook.params).then(message => {
    if (message.sentBy._id !== hook.params.user._id) {
      throw new errors.Forbidden()
    }
    return hook
  })
}

messageService.before = {
  all: [
    auth.hooks.verifyToken(),
    auth.hooks.populateUser(),
    auth.hooks.requireAuth()
  ],
  create(hook) {
    hook.data = {
      userId: hook.params.user._id,
      createdAt: Date.now(),
      text: hook.data.text.substring(0, 400)
    }
  },
  update: [
    restrictToSender,
    hooks.remove('sentBy')
  ],
  patch: [
    restrictToSender,
    hooks.remove('sentBy')
  ],
  remove: restrictToSender
}

messageService.after = {
  create: hooks.populate('sentBy', { service: 'users', field: 'userId' })
}

module.exports = messageService
