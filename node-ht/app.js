var mysql = require('mysql');
var express = require('express');
var fs = require('fs');
var url = require('url');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('cookie-session');
var uuid = require('node-uuid');
var app = express();
var jwt = require('jsonwebtoken');
var secret = 'SALLEN-JWT';
var token = jwt.sign({name: 'sallen'}, secret);
var older_token = jwt.sign({ //这是我们数据和生成方式  expiresIn参数 代表token保存时间
name:'sallen',
},secret,{expiresIn:'1h'});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/login',function (req,res,next) {
    // jwt.verify(string, secret, function(err, decoded) { //验证token是否失效
    //   if(err){
    //     console.log(err);
    //   } else {
    //     console.log(decoded.name);
    //   }
    // });

    var _user = req.body;
    var name = _user.username;
    var password = _user.password;
    var sql = 'SELECT * FROM user_list WHERE user_name = "'+ name + '" AND user_password = "' + password + '";';
    if (name==="") {
      res.json({"success": false,"message":"请输入用户名"});
      return;
    }
    if (password==="") {
      res.json({"success": false,"message":"请输入密码"});
      return;
    }
    select(sql).then(function(data) {
      if(data.status==1) {
        var obj = {
            "success": true,
            "message":"登录成功",
            "token": token
        }
      } else {
        var obj = {
          "success": false,
          "message":"登录失败，用户名或密码不正确"
        }
      }
      res.json(obj);
    }).catch(function(err){
      console.log(err)
      var obj = {
          "success": false,
          "message": "登录发生异常"
      }
      res.json(obj);
    })
});

app.post('/register',function (req,res,next) {
    var _user = req.body;
    var name = _user.username;
    var password = _user.password;
    var ip = getClientIp(req);
    var id = uuid.v1().replace(/-/g, "");
    var select_sql = 'SELECT * FROM user_list WHERE user_name = "'+ name + '" AND user_password = "' + password + '";';
    var insert_sql = 'INSERT INTO user_list(user_id,user_name,user_password,user_ip,user_premis) values("'+id+'","'+name+'","'+password+'","'+ip+'",0);';
    if (name==="") {
      res.json({"success": false,"message":"用户名不能为空"});
      return;
    }
    if (password==="") {
      res.json({"success": false,"message":"密码不能为空"});
      return;
    }
    select(select_sql).then(function(data) {
        if(data.status==1) {
          res.json({"success": false,"message":"该用户名已被注册"});
          res.json(obj);
          return;
        } else {
          select(insert_sql).then(function(data) {
            res.json({"success": true,"message":"注册成功"});
          }).catch(function(err){
            res.json({"success": false,"message":"注册发生异常"});
          });
        }
    }).catch(function(err){
      let obj = {
          "success": false,
          "message": "注册发生异常"
      }
      res.json(obj);
    })
});

function getClientIp(req) { //获取访问ip
    return req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
};

function select(sql) {
    var promise = new Promise(function(resolve,reject) {
        var result = null;
        var mysql = require('mysql');
        var connection = mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: 'root',
          datebase: 'test'
        });
        connection.connect();
        connection.query("USE test");
        connection.query(sql, function (err, results, fields) { 
            if (err) { 
                reject(err); 
            }else {
                if(results.length > 0) {
                    resolve({status: 1});
                }else {
                    resolve({status: 0});
                }           
            } 
          } 
        );
        connection.end(); 
    })
    return promise; 
}
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
})

