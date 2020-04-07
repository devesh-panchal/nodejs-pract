var fs = require('fs');
var http = require('http')
var url = require('url')


http.createServer(function (req,res){
	/*fs.readFile('demohtml.html',function(err,data){
		res.writeHead(200,{'content-Type':'text/html'})
		res.write(data);
		res.end();

	});*/
	/*fs.readFile('mynewfile.txt',function(err,data){
		res.writeHead(200,{'content-Type':'text/html'})
		res.write(data);
		res.end();

	});

	fs.writeFile('mynewfile.txt',' Hello Node! ',function(err){
		if(err) throw err;
		console.log('saved!')
		

	})*/


	var q = url.parse(req.url,true);

	var filename =  "."+q.pathname;


	fs.readFile(filename,function(err,data){
		if(err)
		{
			res.writeHead(404,{'content-Type':'text/html'})
			return res.end("404 : NOT FOUND");


		}

		res.writeHead(200,{'content-Type':'text/html'})
		res.write(data);
		return res.end();


		
	})




}).listen(8080)