$(document).ready(function() {

 //SIDENAV
 $('.button-collapse').sideNav('show');
 $('.button-collapse').sideNav('hide');
 $('.button-collapse').sideNav('destroy');

 $(".button-collapse").sideNav();
 $('.collapsible').collapsible();
 $('.button-collapse').sideNav({
  menuWidth: 300, // Default is 300
  edge: 'left', // Choose the horizontal origin
  closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  draggable: true, // Choose whether you can drag to open on touch screens,
 });






 //Global Variables

 var imageLink;


 //IMAGE DROPBOX
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
  imageLink = evt.dataTransfer.getData('URL');
  console.log(imageLink);
  $("#dropbox").prepend('<img src="' + imageLink + '">');
  console.log('<img src="' + imageLink + '">');
 }
 //DRAG GEORGE
 // $(document).on("mousedown", function() {
 //     var image = $('img').addClass("draggable");
 //     console.log(image);
 // });

 // $(document).on("mousedown", function() {
 //     $(".draggable").draggable();
 //     console.log("Am I draggable?");
 // });

 $("#dragMe").draggable();

 //Clear Image Div

 $("#resetDiv").on("click", function() {
  $("#dropbox").empty();
  $("#analysisDiv").val("");
  $("#age").val("");
  $("#sad").val("");
  $("#neutral").val("");
  $("#disgust").val("");
  $("#anger").val("");
  $("#surprise").val("");
  $("#div1").empty();
 });


 //IMAGE SEARCH
 // $(document).on("mouseover", function() {
 //     $("img").attr("draggable", "true");
 //     $("img").attr("ondragstart", "drag(event)");
 //     console.log("Dragged");
 // });
 // $(document).on("mousedown", function() {
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
 //     var data = ev.dataTransfer.getData("URL");
 //     ev.target.appendChild(document.getElementById(data));
 //     console.log("Hi");
 // }


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


 var db = firebase.database();
 $("#run-search").on("click", function(event) {
  event.preventDefault();

  var recentSearch = $("#searchTerm").val().trim();
  $("#name").text(recentSearch);
  db.ref().push({
   recentSearch: recentSearch,
  });

  console.log(recentSearch);

  $("#searchTerm").val("");
 });

 //FACE++ API


 db.ref().limitToLast(6).on("child_added", function(childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());

  var recentSearch = childSnapshot.val().recentSearch;
  var newDiv = $('<div>');
  newDiv.append($('<p>').text(recentSearch));

  $("#searches").prepend(newDiv);
 });


 //FACE++ API
 $("#analysisButton").on("click", function() {


  var imageURL = "https://cdn.history.com/sites/2/2013/11/George_Washington-AB.jpeg";

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

    // variables to catch emotions
    var sadness = results.faces[0].attributes.emotion.sadness;
    var neutral = results.faces[0].attributes.emotion.neutral;
    var disgust = results.faces[0].attributes.emotion.disgust;
    var anger = results.faces[0].attributes.emotion.anger;
    var surprise = results.faces[0].attributes.emotion.surprise;
    var happiness = results.faces[0].attributes.emotion.happiness;
    var fear = results.faces[0].attributes.emotion.fear;

    // variables to catch age and gender
    var age = results.faces[0].attributes.age.value;
    var gender = results.faces[0].attributes.gender.value;

    // results appear in html table
    $("#age").text(age);
    $("#gender").text(gender);
    $("#sad").text(sadness);
    $("#neutral").text(neutral);
    $("#disgust").text(disgust);
    $("#anger").text(anger);
    $("#surprise").text(surprise);
    $("#happiness").text(happiness);
    $("#fear").text(fear);

   });
 });

 //IMAGE CAROUSEL
 $(document).ready(function() {
  $('.carousel').carousel();
 });

 // var carouselImage = $(".carousel-item").attr("src");

 // $(".carousel-item").on("click", function() {
 //  $("#dropbox").prepend(carouselImage);
 // });

 // MOMENT JS FOR CURRENT DAY AND TIME UNDER NAV
 /*global moment*/
 $("#toptext").text(moment().format('MMMM Do, YYYY'));
});
