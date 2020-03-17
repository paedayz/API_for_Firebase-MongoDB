const express = require('express');
const app = express();
const firebase = require('firebase');
const imProduct = require('./product');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

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

app.get('/products',(req, res) => {
  let query = firestore.collection("products");
  let response = [];
  console.log("eiei")
  query.get().then(querySnapshot => {
    let docs = querySnapshot.docs;
    for(let doc of docs) {
      response.push(doc.data());
      console.log("wow")
      console.log(docs.length)
    }
  });
  return res.status(200).send(response);
  // firestore.collection("products").get()
  // .then(snapshot => {
  //   snapshot.forEach(doc => {
  //     console.log(doc.id, '=>' , doc.data());
  //     res.send(doc.data())
  //   });
  // })
  // .catch(err => {
  //   console.log('Error getting documents', err);
  // })
});

app.post('/products',async(req, res) => {
  const payload = req.body;
  console.log(payload);

  firestore.collection("products").add(payload);
  
  res.status(201).end();
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params
  
  firestore.collection("products").where("id","==",id).get()
  .then(function(snapshot){
    snapshot.forEach(function(doc){
        console.log(doc.id, '=>', doc.data());
        res.send(doc.data())
        //res.json(docs.data());
    })
    res.status(201).end();
  })
  .catch(err => {
    console.log('Error getting documents', err);
  })
})

app.put('/products/:id', async (req, res) => {
  const payload = req.body;
  const { id } = req.params;

  const buff = firestore.collection("products").where("id","==",id)
  // .then(function(snapshot) {
  //   snapshot.forEach(function(docs) {
  //     console.log(docs.data());
  //     res.json(docs.data())
  //   })
  // })
  // .catch(err => {
  //   console.log('Error getting documents', err);
  // })
  let batch = firestore.batch();

  batch.update(buff,payload);

  res.json(product)
})

const port = process.env.port || 3030;
app.listen(port, function() {
  console.log("Connecting to port", port)
})
