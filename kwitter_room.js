var firebaseConfig = {
      apiKey: "AIzaSyCyp5pk8MtZ8Dd4HjsH58bFgZNZVdmiTKk",
      authDomain: "qwitter-89371.firebaseapp.com",
      databaseURL: "https://qwitter-89371-default-rtdb.firebaseio.com",
      projectId: "qwitter-89371",
      storageBucket: "qwitter-89371.appspot.com",
      messagingSenderId: "357655487056",
      appId: "1:357655487056:web:daa56075c6d93ac9d5a755",
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


//there is aErroR
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();//why is this here?

function addRoom() { room_name = document.getElementById("room_name").value; firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html"; }

function redirectToRoom(name){
      console.log(name);
      localStorage.setItem("room_name", name)
      window.location="kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
