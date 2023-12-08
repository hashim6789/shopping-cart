
var DB = require('../config/connection')
module.exports = {

     addProduct:(product,callback) => {
        console.log(product);

        DB.get().collection('product').insertOne(product).then((data) => {
         console.log(data)
         callback(data)
        })
     }
}