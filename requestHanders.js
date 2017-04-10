

var exec=require('child_process').exec;

function upload(response){
	
	console.log("upload is called");
	
	//function sleep(milliseconds){
		
	//	var startT=new Date().getTime();
		
		//延时阻塞
		//while(new Date().getTime()<startT+milliseconds);
		
		
		var content = "empty";

		exec('ls -lah',{ timeout:10000, maxBuffer: 20000*1024},function(error,stdout,stderr){
			content=stdout;
			
			response.writeHead(200,{"Conetent-Type":"text-plain"});
			response.write(content);
			response.end();
		});
		
	//}
	
	//sleep(20011);
	//return "Hello upload";
	//return content;
}

function start(response){
	console.log("start is called");
	//return "Hello Start";
	
	response.writeHead(200,{"Conetent-Type":"text-plain"});
	response.write("Hello Start");
	response.end();

}

exports.upload=upload;

exports.start=start;