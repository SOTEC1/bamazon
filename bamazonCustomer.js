const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

const db = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "bamazon_db"
});

db.connect(function(err){
  if (err) throw err;
  console.log("Hello World")
  
  enter();
});

function enter() {
  inquirer
  .prompt ([
    {
      name: "enter",
      type: "list",
      message: "Would you like to enter The Bamazon store front?",
      choices: ["Enter", "Exit"]
    }
  ]).then(({ enter }) => {
    switch(enter) {
      case "Enter":
      return start();
      case "Exit":
      return process.exit(0);
    }
  })
}

function start() {
  db.query("SELECT * FROM products", function(err, dbInventory) {
    if (err) throw err;
  inquirer
  .prompt([
    {
      name: "userChoice",
      type: "list",
      message: "Which item would you like to purchase?",
      choices: dbInventory.map(products => products.product_name)
    },
    {
      name: "purchase",
      type: "input",
      message: "How many of these would you like to buy?",
      validate: input => !isNaN(input)
      ? true
      : false,
      filter: input => parseInt(input)
    }
  ]).then(({userChoice, purchase}) => {
    const itemPicked = dbInventory.find(product => product.product_name === userChoice);

    if (purchase > itemPicked.stock_quantity) {
      console.log("\n-----------------\n")
      console.log("\nNot Enough Stock For This Purchase!\n");
      console.log("\n------------------\n")
      return enter();
    };
    console.log("\n------------------\n");
    console.log("\nItem Purchased!\n");
    console.log(`Total cost = $${purchase * itemPicked.price}`)
    console.log("\n------------------\n");

    const updatedAmount= {
      stock_quantity: itemPicked.stock_quantity - purchase
    }

    const updatedProduct = {
      id: itemPicked.id
    }

    const query = db.query("UPDATE products SET ? WHERE ?", [updatedAmount, updatedProduct], function (err, dbResponse) {
      if (err) { throw err;
    }
    })
    enter();
  })
  });
};

