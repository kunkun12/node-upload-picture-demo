var express = require('express');
var routes = require('./server');
var http = require('http');
var path = require('path');
var app = express();
// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon(__dirname +"/client/favicon.png"));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.bodyParser({
            uploadDir:'./server/upload/tmp',
            keepExtensions:true
 }));
app.use(express.static(path.join(__dirname, 'client')));
app.use(app.router);
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
routes(app);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

