
function route(pathname,handlers,response,request){
	
	console.log(typeof handlers[pathname]);
	
	if(typeof handlers[pathname]=== 'function')
	{
		return handlers[pathname](response,request);
		
	}
	else{
		
		console.log('no request handler');
		response.writeHead(404,{"Conetent-Type":"text-plain"});
		response.write('404 not found');
		response.end();		
		//return '404 not found';
	}
	
	//console.log(pathname,'route');
}

exports.route=route;