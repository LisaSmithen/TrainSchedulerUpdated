$(document).ready(function(){

    //Attach Firebase vars config thing

var firebaseConfig = {
    apiKey: "AIzaSyCwGmczVpOv_WOMM13odPxw5VSl92KnR2c",
    authDomain: "trainjourney-87e60.firebaseapp.com",
    databaseURL: "https://trainjourney-87e60.firebaseio.com",
    projectId: "trainjourney-87e60",
    storageBucket: "",
    messagingSenderId: "1069787585056",
    appId: "1:1069787585056:web:89599949e4b2871d"
  };


//Initialize Firebase app
firebase.initializeApp(firebaseConfig);

//Firebase var
var database = firebase.database();

//On Click vars
var name;
var destination;
var firstTrain;
var frequency = 0;

//On click function
$("#add-train").on("click", function() {
    event.preventDefault();
    name = $("#train-name").val().trim();
    destination = $("#destination").val().trim();
    firstTrain = $("#first-train").val().trim();
    frequency = $("#frequency").val().trim();









});