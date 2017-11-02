var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password : '123456',
  database:'baobei'
});
router.post('/list', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*')    ;
  connection.query("SELECT * FROM new_table" , function(err, rows, fields) {
    res.send(rows);
});
});
router.post('/ha', function(req,res, next) {
   res.header('Access-Control-Allow-Origin','*');
  a=req.body.name 
 
;
  b=req.body.tit;
  c=req.body.con;
   d=req.body.opt;
  
  connection.query("INSERT INTO  new_table(uid,name,title,content) VALUES('"+d+"','"+a+"','"+b+"','"+c+"')", function(err, rows, fields) {
    res.send(rows);
});
});
module.exports = router; 
