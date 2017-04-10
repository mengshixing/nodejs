
var server=require('./server');

var route=require('./route');

var requestHanders=require('./requestHanders');

var handlers={};

handlers['/']=requestHanders.start;

handlers['/start']=requestHanders.start;

handlers['/upload']=requestHanders.upload;

server.start(route.route,handlers);