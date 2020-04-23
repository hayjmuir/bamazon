// what I learned in boating school is


var mysql = require("mysql")

var table = require("console.table")

var inquirer = require("inquirer")


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Winnie5760!",
    database: "bamazonDB"
})


function productItems() {
    connection.connect(function (err) {
        connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw err
            else console.table(res, "\n")
            productID()
        })
    })

}
productItems()



function productID() {

    inquirer.prompt([{
        type: "input",
        name: "id",
        message: "please enter the ID of the product you would like to buy.\n",
        validate: function (value) {
            if (!isNaN(value)) {
                return true
            }
            return false
        }
    }]).then(function (answer) {
        var userId = answer.id
        console.log("Chosen Item ID: ", userId)
        var userQuant = answer.quant
        console.log("Chosen Quantity from stock: ", userQuant, "\n")

        connection.query("SELECT * FROM products WHERE ?", [{
            item_id: answer.id
        }], function (err, res) {
            if (err) throw err
            console.table(res)
            var currentQuantity = res[0].stockQuantity
            console.log("current quantity in stock: ", currentQuantity)
            var price = res[0].price
            var remainingQuantity = currentQuantity - answer.quant
            console.log("Remaining  quantity in stock: ", remainingQuantity)

            if (currentQuantity > answer.quant) {
                console.log("Amount Remaining: " + remainingQuantity)
                console.log("Total Cost: " + (answer.quant * price) + "\n")

                connection.query("UPDATE products SET stockQuantity=? WHERE item_id=?", [remainingQuantity, answer.id], function (err, res) {
                    console.table(res)
                })
                connection.query("SELECT * FROM products", function (err, res) {

                    console.log("This is the updated inventory of product items: ")
                    console.log("------------------------------- \n")
                    console.table(res)
                })

            } else {
                console.log("Insufficient amounts, please edit your units!");
            }
            connection.end()
        })
    })

}