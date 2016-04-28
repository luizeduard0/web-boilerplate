const express = require('express')

const app = express()
app.use(express.static(__dirname + '/public'))

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(process.env.PORT || 80)
