const messageService = require('./messageService')

const services = [
  {
    path: '/api/messages',
    service: messageService
  }
]

module.exports = services
