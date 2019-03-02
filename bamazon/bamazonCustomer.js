var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Lalo1223*",
  database: "bamazonDB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "input",
      type: "item_id",
      message: "Please provide the [item_id] to start purchase."
    })
    .then(function(){
      orderProduct();
    });
}

function orderProduct() {
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
        name: "product name",
        type: "input",
        message: "How much of this product would like to order?"
      },
    ])
  };  
/*      {
        name: "departmentName",
        type: "input",
        message: "What department is this product in?"
      },
*/
