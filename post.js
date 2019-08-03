/*const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase

firebase.initializeApp({
    apiKey: '### FIREBASE API KEY ###',
    authDomain: '### FIREBASE AUTH DOMAIN ###',
    projectId: '### CLOUD FIRESTORE PROJECT ID ###'
  });
  
  var db = firebase.firestore();

  //colección1
  db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});test.firestore.js
//colección 2
/

//método get (lee datos)
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});test.firestore.js


const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore"); 
firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });




firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });email-password.html

function initFirebaseAuth() {
    // Listen to auth state changes.
    firebase.auth().onAuthStateChanged(authStateObserver);
  }
*/

const coment = document.querySelector("#textoCom");
const botPublicar = document.querySelector("#btnRegistroPost")
const divPost = document.querySelector("#publicar")



let db = firebase.firestore(app)

// Add a new document in collection "cities"
db.collection("post").doc("prueba").set(
  {consejos:"consejos", 
  compra:"compra", 
  venta:"venta", 
  talleresMecanicos: "talleres mecanicos"}
)
.then(function() {
  console.log("Document successfully written!");
})
.catch(function(error) {
  console.error("Error writing document: ", error);
});

// [START get_all_users]
db.collection("post").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
  });
});
// [END get_all_users]

// [STARD saving data]
/*
botPublicar.addEventListener("submit",(e)){
  e.preventDefauld();
  db.collection("post").add({
    coment: form.name
  })
}
*/

