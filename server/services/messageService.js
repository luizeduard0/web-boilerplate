const NeDB = require('nedb')
const service = require('feathers-nedb')
const errors = require('feathers-errors')

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

function process(hook) {
  hook.data.createdAt = Date.now()
  hook.data.text = hook.data.text.substring(0, 400)
}

function restrictToSender(hook) {
  return hook.app.service('messages').get(hook.id, hook.params).then(message => { // TODO: test hook.params
    if (message.sentBy._id !== hook.params.user._id) {
      throw new errors.Forbidden()
    }
    return hook
  })
}

messageService.before = {
  create: process,
  remove: restrictToSender
}

module.exports = messageService
