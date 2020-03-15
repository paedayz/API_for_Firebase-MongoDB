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
// firestore.collection("store").doc("test").set({
//   item: "wow",
//   id: 23,
//   available: true
// })


/*DELETE*/
//firestore.collection("store").doc("QAAiTr9lxKMwvGC4cn2o").delete();


/*UPDATE*/
// firestore.collection("store").doc("Hatsune Miku").update({
//   sell_date: "30.1.20";
// });


/*Another Add*/
// firestore.collection("store").doc("Hatsune Miku").set({
//   item: "Nendoroid",
//   id: 33,
//   available: true
// });
// firestore.collection("store").doc("Flandre Scarlet").set({
//   item: "Nendoroid",
//   id: 136,
//   available: true
// });
// firestore.collection("store").doc("Yae Sakura").set({
//   item: "Nendoroid",
//   id: 908,
//   available: false
// });


/*Batch*/
// let batch = firestore.batch(),
//     miku = firestore.collection("store").doc("Hatsune Miku"),
//     flandre = firestore.collection("store").doc("Flandre Scarlet");
// batch.update(miku, {
//     available: true
// });
// batch.update(flandre, {
//     available: false
// });
// batch.commit();


/*Connect Server */
// app.get('/',(req, res) => {
//   firestore.collection("store").doc("Hatsune Miku").get().then((docs) => {
//     console.log(docs.data());
//     res.send(docs.data());
//   })
// });
 
// const port = process.env.port || 3030;
// app.listen(port, () => {
//   console.log("Connecting to port", port);
// })