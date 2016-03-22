const userService = require('./userService')
const messageService = require('./messageService')

const services = [
  {
    path: '/api/users',
    service: userService
  },
  {
    path: '/api/messages',
    service: messageService
  }
]

module.exports = services
