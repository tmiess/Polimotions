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

 var imageURL = "http://cdn.history.com/sites/2/2013/11/George_Washington-AB.jpeg";

 var queryURL = "https://api-us.faceplusplus.com/facepp/v3/detect?api_key=AKof96jqIYUIqbmI2TaF3-AJcURETpor&api_secret=WbNCep4Ml1Ad_wTiItDTq7QhTEskPUYT&image_url=" + imageURL + "&return_attributes=gender,age,emotion";

 console.log(imageURL);

 $.ajax({ url: queryURL, method: "GET" })

     .done(function(response) {
         var results = response.data;

         console.log(results);

     });
 