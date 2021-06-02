
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBjQBew7g7zNSsqx2YksQjc9CK3jZMYEwA",
      authDomain: "kwitter-18594.firebaseapp.com",
      projectId: "kwitter-18594",
      storageBucket: "kwitter-18594.appspot.com",
      messagingSenderId: "450697693789",
      appId: "1:450697693789:web:414acc7f1c03c37f921bb4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
