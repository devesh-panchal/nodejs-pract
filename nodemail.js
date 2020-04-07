var mailer = require('nodemailer');


var transport = mailer.createTransport({
	service: 'gmail',
	secure: true,
	auth:{
		user: 'devucp021@gmail.com',
		pass: ''

	}
});

var mailoptions = {
	from :'devucp021@gmail.com',
	to:'DEvcp21@hotmail.com',
	subject:'sending email using nodejs',
  	html: '<h1>Welcome</h1><p>That was easy!</p>'
}

transport.sendMail(mailoptions,function(err,info){
	if(err)
	{
		console.log(err);
	}
	else
	{
		console.log('sent email: '+info.response);
	}

});