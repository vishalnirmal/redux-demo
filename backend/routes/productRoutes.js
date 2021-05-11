const productController = require("../controller/productController");
const router = require('express').Router();

router.route("/")
    .get(productController.getAllProducts);

router.route("/:id")
    .get(productController.getProductById);  

module.exports = router;