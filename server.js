const express = require('express')
const app = express()
const mongoose = require('mongoose');
const imProduct = require('./product');

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/node-api-101',{useNewUrlParser: true, useUnifiedTopology: true});

// mock data
const products = [{}]

app.post('/products',async(req, res) => {
  const payload = req.body;
  const product = new imProduct(payload);
  await product.save();
  res.status(201).end();
});

app.get('/products', async (req, res) => {
  const products = await imProduct.find({});
  res.json(products);
})

app.get('/products/:id', async (req, res) => {
  const { id } = req.params
  const product = await imProduct.findById(id);
  res.json(product)
})

app.put('/products/:id', async (req, res) => {
  const payload = req.body;
  const { id } = req.params

  const product = await imProduct.findByIdAndUpdate(id, { $set: payload });

  res.json(product)
})

app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;

  await imProduct.findByIdAndDelete(id);
  res.status(204).end();
})

const port = process.env.port || 3030;
app.listen(port, () => {
  console.log("Application is running on port", port);
})

