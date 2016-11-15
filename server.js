var express = require('express')
var app = express()

app.get('/', function (req, res) {
  var ip = req.headers["x-forwarded-for"]
  var lang = req.headers["accept-language"]
  var soft =req.headers["user-agent"]
  var fin=JSON.stringify({ipadress:ip, language:lang, software:soft})
  res.send(fin)
})

app.listen(8080, function () {
  console.log('Example app listening on port 3000!')
})
