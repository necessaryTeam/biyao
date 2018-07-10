var mysql = require("mysql");

function query(sql,params,callback){
    var connection = mysql.createConnection({
        host:"localhost",
        user:"biyao",
        password:"biyao",
        database:"biyao"
    });
    connection.connect();

    connection.query(sql,params,function(error,results,fields){
        if(error) throw error;

        callback(results);
    });
    connection.end();
}


module.exports = {
    query
}