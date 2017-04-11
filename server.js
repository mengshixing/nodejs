
var http=require("http");

var url=require("url");

function start(route,handers){

	function onrequest(request,response){
		
		
		var pathname=url.parse(request.url).pathname;
		
		//var content=route(pathname,handers);
		
		//var postdata="";
		
		//request.setEncoding('utf8');
		
/* 		request.addListener('data',function(data){
			
			console.log(data);
			
			postdata+=data;
		}) */
		
		//request.addListener('end',function(){
			//postdata+=data;
			
		route(pathname,handers,response,request);
		//})
		
		//route(pathname,handers,response);
		
		console.log(pathname);
		//response.writeHead(200,{"Conetent-Type":"text-plain"});
		//response.write(content);
		//response.end();		
	}
	
	http.createServer(onrequest).listen(777);
}

exports.start=start;