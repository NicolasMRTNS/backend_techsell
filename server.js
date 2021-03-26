const http = require('http')

const server = http.createServer((req, res) => {
  res.end('Voici la réponse du server !')
})

server.listen(process.env.PORT || 4200)
