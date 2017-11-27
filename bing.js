 //Image Search

 var firstRow;
 var imageArray = [];
 var topicImage;
 var imageResultsDisplay;
 var count = 0;
 var results;

 $("#run-search").on("click", function() {
  results = [];
  imageArray = [];
  $(".gallery").empty();
  $("#searchTerm").empty();
  event.preventDefault();

  var imageSearch = $("#searchTerm").val().trim();
  console.log("Your search is:" + imageSearch);

  var queryURL = "https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=" + imageSearch + "&count=4";

  $.ajax({
    url: queryURL,
    beforeSend: function(xhrObj) {
     // Request headers
     xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "b8927aeb88e54d32a3c7bba435c9763e"); //replace value with your own key
    },
    method: "GET"
   })

   .done(function(response) {
    console.log(response);

    results = response.value;
    console.log(results);

    for (var i = 0; i < results.length; i++) {
     imageResultsDisplay = $('<img src="' + results[i].thumbnailUrl + '"/>');
     // imageResultsDisplay.attr("href", results[i].contentUrl);
     imageArray.push(imageResultsDisplay);
    }
    $(".gallery").append(imageArray);
   });


 });
 