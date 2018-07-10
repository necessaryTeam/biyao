var express = require('express')
var app = express();
// 路由

// 引用自定义模块
var db = require('./mysql.js');
// 收集发送信息
app.get('/home', function(req, res) {
    res.append("Access-Control-Allow-Origin","*");
    console.log(req.query);
    // console.log(req.params);
    var table = req.query.classify;
    db.query(`SELECT * FROM ${table} WHERE ?`,{
        // text:JSON.stringify(req.query.text)
        class:req.query.lei
    },(results)=>{
        res.send(results)
    })
    // res.send("hello")

})

app.listen(4000)