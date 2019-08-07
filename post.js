

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


const botPublicar = document.querySelector("#btnRegistroPost");
const divPost = document.querySelector("#publicar");
const baicaList = document.querySelector("#baica-list");
const form = document.querySelector("#formCom");
let db = firebase.firestore()
// db.settings({ timestampsInSnapshots: true});
/*
// Add a new document in collection "cities"
db.collection("post").doc("checar").set(
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
db.collection("post").get().then((snapshot) => {
  snapshot.docs.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
  });
});
*/


//otro get
/*db.collection("cities").get().then((snapshot) =>{
  snapshot.docs.forEach(doc => {
    caray(doc);
  })
});*/
// [END get_all_users]

// [STARD  create element and render cafe]
function renderBaica(doc){
  let li = document.createElement("li")
  let autor = document.createElement("span");
  let comentario = document.createElement("span");
  let cross = document.createElement('div');

  li.setAttribute("data-id", doc.id)
  autor.textContent = doc.data().autor;
  comentario.textContent = doc.data().comentario;
  cross.textContent = 'x';


  li.appendChild(autor);
  li.appendChild(comentario);
  li.appendChild(cross);

  baicaList.appendChild(li);

// [STARD] deleting data
cross.addEventListener('click', (e) => {
  e.stopPropagation();
  let id = e.target.parentElement.getAttribute('data-id');
  db.collection('comentarios').doc(id).delete();
});
}




//[STARD] Geting data
/*
db.collection("comentarios").get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    renderBaica(doc);
  })
});
*/
//[END create element and render cafe]

// [STARD saving data]
/*
coment.addEventListener("submit",(e) => {
  e.preventDefault();
  db.collection("post").add({
    comenta: coment.TextComen.value,<ul  ></ul>

  });
  coment.comenta.value = "";
  
})
*/
//oyher

form.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("comentarios").add({
    autor: form.autor.value,
    comentario: form.comentario.value
  });
  form.autor.value= "";
  form.comentario.value= "";

});

//[SATRD] realtime listener
db.collection('comentarios').orderBy('autor').onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
      console.log(change.doc.data());
      if(change.type == 'added'){
          renderBaica(change.doc);
      } else if (change.type == 'removed'){
          let li = baicaList.querySelector('[data-id=' + change.doc.id + ']');
          baicaList.removeChild(li);
      }
  });
});

