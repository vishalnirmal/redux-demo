require('dotenv').config();
const express = require("express");
const cors = require("cors");
const compression = require("compression");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./database/database");
const PORT = process.env.PORT || 5500;

connectDB();

const app = express();

app.use("/api/products", productRoutes);

app.use(express.json());
app.use(cors());
app.use(compression());

app.listen(PORT, ()=>{
    console.log(`Server listening on PORT ${PORT}`);
})