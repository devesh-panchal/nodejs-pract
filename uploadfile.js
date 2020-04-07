var formidable = require('formidable');
var http = require('http');
var fs = require('fs');


http.createServer(function(req,res){

	if(req.url=='/fileupload')
	{
		var form = formidable.IncomingForm();
		form.parse(req,function(err,feilds,files){
		var oldpath = files.filetoupload.path;
		var newpath = 'C:/Users/DEVESH/Desktop/nodejs/temp/'+files.filetoupload.name;

		fs.rename(oldpath,newpath,function(err){
			if(err)
			{
				res.write('<h1>Error</h1>')

			}
			else
			{
				res.write('<h1>file uploaded<h1>');
				res.end();
			}

		});
	});
		
		/*res.write(err);
		res.write(feilds);*/

	}
	else
	{
		res.writeHead(200,{'content-Type':'text/html'});
		res.write('<center><form action="fileupload" method="post" enctype="multipart/form-data">');
		res.write('<input type="file" name="filetoupload"><br>');
		res.write('<input type="submit">');
	  	res.write('</form></center');
	  	return res.end();

	 }
}).listen(8080);

