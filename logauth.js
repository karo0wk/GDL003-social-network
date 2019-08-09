

function observador(){
    firebase.auth().onAuthStateChanged(function(user) {
     if (user) {
       console.log("existe usuario activo")
       // User is signed in.
       aparece();
       var displayName = user.displayName;
       var email = user.email;
       console.log("...........");
       console.log("user.emailVerified");
       console.log("...........");
       var emailVerified = user.emailVerified;
       var photoURL = user.photoURL;
       var isAnonymous = user.isAnonymous;
       var uid = user.uid;
       var providerData = user.providerData;
       // ...
     } else {
       console.log("no existe usuario activo")
       // User is signed out.
       // ...
     }
    });
    }
    observador();
    function aparece(){
     console.log("")
     var contenido = document.getElementById("contenido");
     contenido.innerHTML = `
     <p></p>
     <button onclick="cerrarSesion()"> Cerrar sesion </buton>`
    }
    function cerrarSesion(){
     firebase.auth().signOut()
     .then(function(){
       console.log("saliendo..")
       location.href = "index.html"
     })
     .catch(function(error){
       console.log(error)
     })
    }
    function verifiricar(){
     var user = firebase.auth().currentUser;
     user.sendEmailVerification().then(function(){
       console.log("enviando correo...");
     })
     .catch(function(error){
     console.log(error);
    });
    }