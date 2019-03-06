var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "Lalo1223*",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});

function start() {
  orderProduct();
}

function orderProduct() {
    inquirer
    .prompt([
      {
        name: "input",
        type: "item_id",
        message: "Please provide the [item_id] to start purchase."
      },
      {
        name: "product name",
        type: "input",
        message: "How much of this product would like to order?"
      }
  ])
}   

function readProducts() {
  productsArray = [];
  connection.query("SELECT product FROM products", function(err, res) {
      if (err) throw err;
      if(res.length > 0){
          for(var i = 0; i < res.length; i++){
              productsArray.push(res[i].product);
          }
      inquirer
       .prompt([
          {
            type: 'list',
            name: 'product',
            message: 'Take a look at our inventory!',
            choices: productsArray
          }
    ])
}     