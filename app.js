const http = require('http')
const port = 3000
const fs = require('fs')

const requestHandler = (req, res) => {
  if (req.url == '/') {
       fs.readFile('./public/home.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
    } else if (req.url == '/about') {
        fs.readFile('./public/about.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else if (req.url == '/contact') {
        fs.readFile('./public/contact.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }else if (req.url == '/home') {
        fs.readFile('./public/home.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else{
        res.end('404')
    }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})