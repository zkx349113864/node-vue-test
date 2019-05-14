const express = require('express')
const app = express()
const port = 4000

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-Width,Content-Type')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  next()
})

app.post('/getUserInfo', (req, res, next) => {
  console.log('请求成功')
  res.status(200).send({
    code: 200,
    data: {
      name: 'sherlock'
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})