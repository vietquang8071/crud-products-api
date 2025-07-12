const products = require('../data/productsData.js')

function getProducts(req, res){
  const {limit, page} = req.query;

  const parsedLimit = isNaN(limit) ? 10 : parseInt(limit);
  const parsedPage = isNaN(page) ? 1 : parseInt(page);
  const start = parsedLimit * (parsedPage - 1);
  const end = start + parsedLimit;
  
  return res.status(200).send({
    msg: 'Successfully',
    results: products.slice(start, end)
  });
  
}

function getProductsByID(req, res) {
  const productId = parseInt(req.params.id);
  const productFinal = products.find((product) => product.id === productId);

  if (isNaN(productId)) {
    return res.status(400).send({msg: "Bad Request. Invalid Id."})
  }

  if (!productFinal) {
    return res.status(404).send({msg: 'Not found'});
  }

  return res.status(200).send(productFinal);
}

function addProduct(req, res) {
  const newProduct = req.body;
  if (!newProduct) {
    return res.status(400).send({msg : 'Invalid Product Data'});
  }

  products.push(newProduct);
  return res.status(201).send({
    msg: 'Product created',
    data: newProduct
  });
}

function updateProduct(req, res) {
  const {
    body,
    params: {id}
  } = req;

  const parseId = parseInt(id);
  if (isNaN(parseId)) {
    return res.status(400).send({msg : 'Invalid Product Data'});
  }

  const findProductIndex = products.findIndex((product) => Number(product.id) === parseId);

  if (findProductIndex === -1) {
    return response.status(404).send({msg: "Not found!"});
  }

  products[findProductIndex] = {id: parseId, ...body};
  return res.status(200).send({
    msg: 'Update successfully',
    productsUpdated: products[findProductIndex]
  })
}


function updateProductPartially(req, res) {

  const {
    body,
    params: {id}
  } = req;

  const parseId = parseInt(id);
  if (isNaN(parseId)) {
    return res.status(400).send({msg : 'Invalid Product Data'});
  }

  const findProductIndex = products.findIndex((product) => Number(product.id) == parseId);

  if (findProductIndex === -1) {
    return res.status(404).send({msg: "Not found!"});
  }

  products[findProductIndex] = [...products[findProductIndex], ...body];

  return res.status(200).send({
    msg: 'Update successfully',
    productsUpdated: products[findProductIndex]
  });
}


function deleteProduct(req, res) {
  const {
    body,
    params: {id}
  } = req;

  const parseId = parseInt(id);
  if (isNaN(parseId)) {
    return res.status(400).send({msg : 'Invalid Product Data'});
  }

  const findProductIndex = products.findIndex((product) => Number(product.id) == parseId);

  if (findProductIndex === -1) {
    return res.status(404).send({msg: "Not found!"});
  }

  const deletedProduct = products[findProductIndex];
  products.splice(findProductIndex, 1)

  return res.status(200).send({
    msg: 'Delete successfully',
    deleted: deletedProduct
  });

}



module.exports = {getProducts, getProductsByID, addProduct, updateProduct, updateProductPartially, deleteProduct}