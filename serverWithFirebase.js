const express = require('express');
const app = express();
const firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyCx5OWEXeaGRZWBJNMYvyByI-8VHFW-RiQ",
    authDomain: "test-first-firebase-79d89.firebaseapp.com",
    databaseURL: "https://test-first-firebase-79d89.firebaseio.com",
    projectId: "test-first-firebase-79d89",
    storageBucket: "test-first-firebase-79d89.appspot.com",
    messagingSenderId: "601896548140",
    appId: "1:601896548140:web:b32bca22ebc24925199e89",
    measurementId: "G-36Z1FV8TNV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let firestore = firebase.firestore();

  /*
  firestore.collection("products").doc("Node.js for Beginners").set({
    id: '1001',
    name: 'Node.js for Beginners',
    category: 'Node',
    price: 990
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

    
  firestore.collection("products").add({
    id: '1001',
    name: 'Node.js for Beginners',
    category: 'Node',
    price: 990
  }).then ((doc) => {
    console.info(doc.id);
  }).catch((error) => {
    console.error(error);
  });

  firestore.collection("products").doc("React 101").set({
    id: '1002',
    name: 'React 101',
    category: 'React',
    price: 3990
  }).then ((doc) => {
    console.info(doc.id);
  }).catch((error) => {
    console.error(error);
  });

  firestore.collection("products").doc("Getting started with MongoDB").set({
    id: '1003',
    name: 'Getting started with MongoDB',
    category: 'MongoDB',
    price: 1990
  }).then ((doc) => {
    console.info(doc.id);
  }).catch((error) => {
    console.error(error);
  });*/

  app.post('/products', (req, res) => {
  const payload = req.body;
  firestore.collection("products").add(payload)
  .then ((doc) => {
    console.info(doc.id);
  }).catch((error) => {
    console.error(error);
});

app.get('/products', async (req, res) => {
    firestore.collection("store").doc("Hatsune Miku").get().then((docs) => {
        console.log(docs.data());
        res.send(docs.data());
      });
});
/*
app.get('/products/:id', async (req, res) => {
  const { id } = req.params
  firestore.collection("products").where("id","==",id).get().then
  (function(snapshot){
    snapshot.forEach(function(docs){
      console.log(docs.data());
      res.send(docs.data());
    })
  })
});

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
});
 
const port = process.env.port || 3030;
app.listen(port, () => {
  console.log("Connecting to port", port);
})*/