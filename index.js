const http = require('http');
const app = express()

const server = http.createServer((req, res) => {

  const method = req.method
  const url = req.url
  const path = url.split('?')[0]
  const query = querystring.parse(url.split('?')[1])

  res.setHeader('Content-type', 'application/json')

  // 返回的数据
  const resData = {
    method,
    url,
    path,
    query
  }

  if (method === 'POST') {
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      resData.postData = postData
      // 返回
      res.end(JSON.stringify(resData))
    })
  }

})

server.listen('4000', () => {
  console.log('listen port is 4000')
})