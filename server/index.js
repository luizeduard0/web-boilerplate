const feathers = require('feathers')
const api = require('./api')

feathers()
  .use(feathers.static(__dirname + '/public'))
  .use('/api', api)
  .get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'))
  .listen(process.env.PORT || 80)
