var firebaseConfig = {
  apiKey: "AIzaSyCmenEVLBHeF7A_0vnNzOLyrD0_csn5oSw",
  authDomain: "toggle-button-a1983.firebaseapp.com",
  databaseURL: "https://toggle-button-a1983-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "toggle-button-a1983",
  storageBucket: "toggle-button-a1983.appspot.com",
  messagingSenderId: "863913112287",
  appId: "1:863913112287:web:e9524fef5d4779f2896f6a",
  measurementId: "G-WY26L5DK68",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$(document).ready(function () {
  var database = firebase.database();
  var led1Status;

  database.ref().on("value", function (snap) {
    led1Status = snap.val().led1Status;
    if (led1Status == "1") {
      // check from the firebase
      //$(".light1Status").text("The light is off");
      document.getElementById("unact").style.display = "none";
      document.getElementById("act").style.display = "block";
    } else {
      //$(".light1Status").text("The light is on");
      document.getElementById("unact").style.display = "block";
      document.getElementById("act").style.display = "none";
    }
  });

  $(".toggle-btn").click(function () {
    var firebaseRef = firebase.database().ref().child("led1Status");

    if (led1Status == "1") {
      // post the firebase
      firebaseRef.set("0");
      led1Status = "0";
    } else {
      firebaseRef.set("1");
      led1Status = "1";
    }
  });
});
