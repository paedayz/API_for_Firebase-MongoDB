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

  /*ADD*/
  // firestore.collection("store").doc("Hatsune Miku").set({
  //   item: "Nendorroid",
  //   id: 33,
  //   available: true
  // }).then ((doc) => {
  //   console.info(doc.id);
  // }).catch((error) => {
  //   console.error(error);
  // });

  /*DELETE*/
  //firestore.collection("store").doc("QAAiTr9lxKMwvGC4cn2o").delete();

  /*UPDATE*/
  // firestore.collection("store").doc("Hatsune Miku").update({
  //   sell_date: "30.1.20";
  // });

  app.get('/',(req, res) => {
    firestore.collection("store").doc("Hatsune Miku").get().then((docs) => {
      console.log(docs.data());
      res.send(docs.data());
    })
  });
 
  const port = process.env.port || 3030;
  app.listen(port, () => {
    console.log("Connecting to port", port);
  })