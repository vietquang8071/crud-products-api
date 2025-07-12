const express = require('express')
const {getProducts, getProductsByID, addProduct, updateProduct,updateProductPartially, deleteProduct} = require('../controllers/productController.js')

const PORT = 3000;
const app = express()

app.use(express.json());

app.get('/products', getProducts);

app.get('/products/:id', getProductsByID);

app.post('/products', addProduct);

app.put('products/:id', updateProduct);

app.patch('products/:id', updateProductPartially);

app.delete('products/:id', deleteProduct);


app.listen(3000, () => {
  console.log(`Server is running in ${PORT}`);
})