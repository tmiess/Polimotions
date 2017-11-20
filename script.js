//IMAGE SEARCH
// $(document).on("click", function() {
//     $("img").attr("draggable", "true");
//     $("img").attr("ondragstart", "drag(event)");
//     console.log("Dragged");
// });
// $(document).on("click", function() {
//     $("img").attr("id", "drag1");
//     console.log("where is the picture")

// });
// function allowDrop(ev) {
//     ev.preventDefault();
// }

// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
//     console.log("Hey");
// }


// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
//     console.log("Hi");
// }

//DROPBOX
var dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", noopHandler, false);
dropbox.addEventListener("dragexit", noopHandler, false);
dropbox.addEventListener("dragover", noopHandler, false);
dropbox.addEventListener("drop", drop, false);

function noopHandler(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    console.log("Handler working")
}

function drop(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var imageLink = evt.dataTransfer.getData('URL');
    console.log(imageLink);
    $("#dropbox").prepend('<img src="' + imageLink + '">');
    console.log('<img src="' + imageLink + '">');
}




// Initialize Firebase
/* global firebase */

var config = {
    apiKey: "AIzaSyA04Li4Y2BJ6O54i1Tm3VgZx6XX1JibX1c",
    authDomain: "polimotions.firebaseapp.com",
    databaseURL: "https://polimotions.firebaseio.com",
    projectId: "polimotions",
    storageBucket: "polimotions.appspot.com",
    messagingSenderId: "920170050300"
};

firebase.initializeApp(config);

//FACE++ API
var imageURL = "http://snworksceo.imgix.net/dth/e61af942-43f3-428e-8feb-821643fcb3fc.sized-1000x1000.jpeg";
console.log(imageURL);

var queryURL = "https://api-us.faceplusplus.com/facepp/v3/detect";

var params = {
    "api_key": "AKof96jqIYUIqbmI2TaF3-AJcURETpor",
    "api_secret": "WbNCep4Ml1Ad_wTiItDTq7QhTEskPUYT",
    "image_url": imageURL,
    "return_attributes": "gender,age,emotion",
};

$.ajax({ url: queryURL, method: "POST", data: params })

    .done(function(response) {
        var results = response;

        console.log(results);

    });
