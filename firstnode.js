var http = require('http');
var url = require('url');

var dt = require('./firstmodule.js')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //res.write("date is"+dt.myDateTime())
    var q =url.parse(req.url,true).query;
    var txt = q.year+" "+q.month;
    //res.write(req.url)
    //res.end('Hello World!');
    res.end(txt);
}).listen(8080);
