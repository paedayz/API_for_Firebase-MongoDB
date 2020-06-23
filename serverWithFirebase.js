const express = require('express');
const app = express();
const firebase = require('firebase');
const imProduct = require('./product');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

var firebaseConfig = {
    authDomain: "XXXXXXXXXXXXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXXXXXX",
    measurementId: "XXXXXXXXXXXXXXXXXXXXXX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let firestore = firebase.firestore();

//Get all Data in database
app.get('/products',async (req, res) => {
  let response = [];
  await firestore.collection("products").get()
  .then(snapshot => {
    snapshot.forEach(function(doc) {
      response.push(doc.data());
    })
    res.status(200).send(response)
  })
  .catch(err => {
    console.log('Error getting documents', err);
  })

  // The same result but another code

  // let query = firestore.collection("products");
  // let response = [];
  // await query.get().then(querySnapshot => {
  //   let docs = querySnapshot.docs;
  //   for(let doc of docs) {
  //     response.push(doc.data());
  //   }
  // });
});

//Input data
app.post('/products',async(req, res) => {
  const payload = req.body;
  console.log(payload);

  firestore.collection("products").add(payload);
  
  res.status(201).end();
});

// get data by id
app.get('/products/:id', async (req, res) => {
  const { id } = req.params
  let result = [];
  
  await firestore.collection("products").where("id","==",id).get()
  .then(function(snapshot){
    snapshot.forEach(function(doc){
        console.log(doc.id, '=>', doc.data());
        result.push(doc.data());
        //res.json(docs.data());
    })
    res.status(200).send(result)
  })
  .catch(err => {
    console.log('Error getting documents', err);
  })
})

//now bug
app.put('/products/:id',async (req, res) => {

  const { id } = req.params;
  const payload = req.body;
  let batch = firestore.batch();
  let path = firestore.collection('products');


  await firestore.collection("products").where("id","==",id).get()
  .then(function(snapshot){
    snapshot.forEach(function(doc){
        dataID = doc.id;
        batch.update(path.doc(dataID), payload);
        batch.commit();
    })
    res.status(200).send()
  })
  .catch(err => {
    console.log('Error getting documents', err);
  })

})

//Delete document by id
app.delete('/products/:id',async (req, res) => {

  const { id } = req.params;
  const payload = req.body;
  let batch = firestore.batch();
  let path = firestore.collection('products');


  await firestore.collection("products").where("id","==",id).get()
  .then(function(snapshot){
    snapshot.forEach(function(doc){
        dataID = doc.id;
        batch.delete(path.doc(dataID));
    })
    batch.commit();
    res.status(200).send()
  })
  .catch(err => {
    console.log('Error getting documents', err);
  })

})

const port = process.env.port || 3030;
app.listen(port, function() {
  console.log("Connecting to port", port)
})
