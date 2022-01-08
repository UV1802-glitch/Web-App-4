

const firebaseConfig = {

  apiKey: "AIzaSyCFc_x8nr7FZzFE1lEM_f3OeKxjE-O2Zjk",

  authDomain: "tic-game-d53e9.firebaseapp.com",

  databaseURL: "https://tic-game-d53e9.firebaseio.com",

  projectId: "tic-game-d53e9",

  storageBucket: "tic-game-d53e9.appspot.com",

  messagingSenderId: "934631615408",

  appId: "1:934631615408:web:b1ef8119b894468d4b4475",

  measurementId: "G-ESR6Z39KMJ"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

 getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()

{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html"; 
}


