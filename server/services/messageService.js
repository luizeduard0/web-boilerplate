const NeDB = require('nedb')
const service = require('feathers-nedb')

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

messageService.before = {
  create(hook) {
    hook.data.createdAt = Date.now()
    hook.data.text = hook.data.text.substring(0, 400)
  }
}

module.exports = messageService
