const NeDB = require('nedb')
const service = require('feathers-nedb')
const auth = require('feathers-authentication')
const hooks = require('feathers-hooks')

const db = new NeDB({
  filename: __dirname + '/../data/users.db',
  autoload: true
})

const userService = service({
  Model: db,
  paginate: {
    default: 20,
    max: 100
  }
})

const requireAuth = [
  auth.hooks.verifyToken(),
  auth.hooks.populateUser(),
  auth.hooks.requireAuth()
]

userService.before = {
  find: requireAuth,
  get: requireAuth,
  create: auth.hooks.hashPassword(),
  update: requireAuth,
  patch: requireAuth,
  remove: requireAuth
}

userService.after = {
  all: hooks.remove('password')
}

module.exports = userService
