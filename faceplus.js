  //FACE++ API
  $("#analysisButton").on("click", function() {
      $("#analysisDiv").val("");
      $("#age").val("");
      $("#sad").val("");
      $("#neutral").val("");
      $("#disgust").val("");
      $("#anger").val("");
      $("#surprise").val("");
      $("#div1").empty();

      var imageURL = $("#searchTerm").val().trim();

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

              var analysis = $("#analysisDiv");

              // variables to catch emotions
              var sadness = results.faces[0].attributes.emotion.sadness;
              var neutral = results.faces[0].attributes.emotion.neutral;
              var disgust = results.faces[0].attributes.emotion.disgust;
              var anger = results.faces[0].attributes.emotion.anger;
              var surprise = results.faces[0].attributes.emotion.surprise;

              // variables to catch age and gender
              var age = results.faces[0].attributes.age.value;
              var gender = results.faces[0].attributes.gender.value;

              var image = $("<img>").attr("src", imageURL);
              var imagePlace = $("#div1");

              imagePlace.append(image);

              // results appear in html table
              $("#age").text(age);
              $("#gender").text(gender);
              $("#sad").text(sadness);
              $("#neutral").text(neutral);
              $("#disgust").text(disgust);
              $("#anger").text(anger);
              $("#surprise").text(surprise);

          });
  });
  