const connectDB = require('./database/database');
const Product = require('./database/model/Product');
const products = require('./data/products');

connectDB();

const importData = async () =>{
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("Data imported");
        process.exit();
    } catch (error) {
        console.log("Error with data import");
        process.exit(1);
    }
}

importData();