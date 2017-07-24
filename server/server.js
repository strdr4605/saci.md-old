const express = require('express'),
      app = express()

app.use(express.static('../client/dist'))

app.listen(80, function () {
  console.log('Example app listening on port 80!')
})