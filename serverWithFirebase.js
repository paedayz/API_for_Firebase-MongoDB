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

app.get('/products',(req, res) => {
  firestore.collection("products").get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      console.log(doc.id, '=>' , doc.data());
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  })
});

app.post('/products',async(req, res) => {
  const payload = req.body;
  firestore.collection("products").add(payload);
});

const port = process.env.port || 3030;
app.listen(port, function() {
  console.log("Connecting to port", port)
})