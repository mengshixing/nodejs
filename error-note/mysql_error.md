
1 使用数据库时报错 Error: Connection lost: The server closed the connection.
  主要是由于时间太长导致的,可以加定时器解决
  
var  mysql=require('mysql');  
var  sqlconnection;
function handleDisconnect() {
	sqlconnection = mysql.createConnection({  
		  host: 'localhost',
		  user: 'root',
		  password: '83581234',
		  database: 'tphywx'
		}); 
	sqlconnection.connect(function(err) {          
    if(err) {                                     
	      console.log('error when connecting to db:', err);
	      setTimeout(handleDisconnect, 2000); 
	    }                                     
	  });                                     
                                          
	sqlconnection.on('error', function(err) {
	    console.log('db error', err);
	    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
	      handleDisconnect();                         
	    } else {                                      
	      throw err;                                  
	    }
	  });
}

handleDisconnect();//连接
