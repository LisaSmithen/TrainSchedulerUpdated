

    //Attach Firebase vars config thing

var config = {
    apiKey: "AIzaSyCwGmczVpOv_WOMM13odPxw5VSl92KnR2c",
    authDomain: "trainjourney-87e60.firebaseapp.com",
    databaseURL: "https://trainjourney-87e60.firebaseio.com",
    projectId: "trainjourney-87e60",
    storageBucket: "",
    messagingSenderId: "1069787585056",
    appId: "1:1069787585056:web:89599949e4b2871d"
  };


//Initialize Firebase app
firebase.initializeApp(config);

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


    database.ref().push({
        name: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
    $("form")[0].reset();
});

//Append the destinantion, frequency, next train ....
database.ref().on("child_added", function(childSnapshot) {
    var nextArr;
    var minAway;
    var firstTrainNew = moment(childSnapshot.val().firstTrain, "hh:mm").subtract(1, "years");
    var diffTime = moment().diff(moment(firstTrainNew), "minutes");
    var remainder = diffTime % childSnapshot.val().frequency;
    var minAway = childSnapshot.val().frequency - remainder;
    var nextTrain = moment().add(minAway, "minutes");
    nextTrain = moment(nextTrain).format("hh:mm");

//Snapshot
    $("#add-row").append("<tr><td>" + childSnapshot.val().name +
            "</td><td>" + childSnapshot.val().destination +
            "</td><td>" + childSnapshot.val().frequency +
            "</td><td>" + nextTrain + 
            "</td><td>" + minAway + "</td></tr>");

            database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
              
                $("#name-display").html(snapshot.val().name);


            });

        });
