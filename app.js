

var express = require('express');
var fs = require('fs');

//实例化app
var app = express();

//端口
app.set('port', 3000);

//默认返回首页
app.get('/', function (req, res) {
   var fileArr = fs.readdirSync('public/file');
   res.render('index.jade', {fileArr: fileArr});
});

//静态文件服务
app.use(express.static(__dirname + '/public'));

//500
app.use(function (err, req, res, next) {
   console.error(err.stack);
   res.type('text/plain');
   res.status(500);
   res.send('500 - 服务器错误');
});

//404
app.use(function (req, res) {
   res.type('text/plain');
   res.status(404);
   res.send('404 - 请求未找到');
});

//启动服务器, 监听制定端口
app.listen(app.get('port'), function () {
   console.log('Hello, welcome to use my dashboard. Customers can visit us on http://localhost:' + app.get('port'));
});
