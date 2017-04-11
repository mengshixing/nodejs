

var exec=require('child_process').exec;

var querystring=require('querystring');

var formidable = require('formidable'),
	fs=require('fs');
	util = require('util');

function upload(response,request){
	
	console.log("upload is called");
	
	//function sleep(milliseconds){
		
	//	var startT=new Date().getTime();
		
		//延时阻塞
		//while(new Date().getTime()<startT+milliseconds);
		
		
		//var content = "empty";

		//exec('ls -lah',{ timeout:10000, maxBuffer: 20000*1024},function(error,stdout,stderr){
			//content=stdout;
			
			
			
		  //if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
			// parse a file upload
			var form = new formidable.IncomingForm();
			
			form.uploadDir="./temp";//必须设置
			
			//console.log(form.uploadDir);
				
			form.parse(request,function(err, fields, files) {
				
				//console.log(files.testfile.path);
				
				//setTimeout(function(){
					fs.renameSync(files.testfile.path,"./temp/test.png");
					
					/* var is = fs.createReadStream(files.testfile.path);
					var os = fs.createWriteStream("./tmp/test.jpg");
					is.pipe(os);
					is.on('end', function () {
						fs.unlinkSync(files.upload.path, './temp/test.jpg');
					}); */
					
					//'content-type': 'text/html' 
					
					response.writeHead(200, {'content-type': 'text/html'});
					response.write('received upload:\n\n');
					response.write("<img src='/show' />");
					response.end();
					//response.end(util.inspect({fields: fields, files: files}));
				//},1000);
			});
			//return;
		  //}

			
			
			/* response.writeHead(200,{"Conetent-Type":"text-plain"});
			response.write(querystring.parse(postdata).text);
			response.end(); */
		//});
		
	//}
	
	//sleep(20011);
	//return "Hello upload";
	//return content;
}

function start(response,request){
	console.log("start is called");
	//return "Hello Start";
	
	var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="file" name="testfile" multiple="multiple"></input>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

	
	response.writeHead(200,{"Conetent-Type":"text-plain"});
	response.write(body);
	response.end();

}
function show(response,request){
	
	fs.readFile("./temp/test.png",'binary',function(error,file){
		
		if(error){
			response.writeHead(500, {'content-type': 'text/plain'});
			response.write(error);
			response.end();
		}
		else{
			response.writeHead(200, {'content-type': 'text/plain'});
			response.write(file,'binary');
			response.end();
		}
		
	})
}

exports.upload=upload;

exports.start=start;

exports.show=show;
