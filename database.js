
var mysql=require('mysql');
// var con =mysql.createPool(
//     {
//         host: "localhost",
//         user: "root",
//         password: "root",
//         database:"project",
//         port:3306

//         });
const con = mysql.createPool({
    host: "terraform-20221110045414759600000001.cwq1rj9hzdnj.us-east-1.rds.amazonaws.com",
    user: "yash",
    password: "yashshah",
    database:"project"
});
module.exports = con;
