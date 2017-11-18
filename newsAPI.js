//could have the user choose which source they want to go to, then easily paste it into URL

//api key: a3b7c632d41e45bcb47ccc17698fb653
//api key is built into the links they gave me on NEWS API site

//get title from the image they chose and put that into the URL

function AJAXquery(queryURL) {
    console.log("3/8 new queryURL is: " + queryURL);
    $.ajax({
        url: queryURL,
        method: 'GET',
    }).done(function(result) {
        console.log("4/8 URL: " + queryURL);
        console.log("5/8 " + result);

        // Loop through and provide the correct number of articles
        for (var i = 0; i < 5; i++) {
            var article = result.articles[i].title;
            console.log("Testing " + article);
            $(".title").text(article);


        }

    });
}


/*  Commenting out to test collapsing table
// Create the HTML well (section) and add the article content for each
            var wellSection = $("<div>");
            wellSection.addClass("well");
            wellSection.attr("id", "articleWell-" + i);
            $("#well-section").append(wellSection);

            console.log("6/8 article is: " + result.articles[i]);

            $("#articleWell-" + i)
                .append("<h5>Section: " + result.articles[i].title + "</h5>");
            console.log("7/8 title is: " + result.articles[i].title);
            console.log("testing:" + result.articles[i].title);

            $("#articleWell-" + i)
                .append("<a href='" + result.articles[i].url + "'>" +
                    result.articles[i].url + "</a>"
                );
            console.log("8/8 url is: " + result.articles[i].url);

        }
    });
}

*/

$("#run-search").on("click", function(event) {
    console.log("1/8 button works");
    event.preventDefault();

    //  $("#well-section").empty();

    var searchTerm = $("#searchTerm").val().trim();
    console.log("search term is: " + searchTerm);
    var searchURL = "https://newsapi.org/v2/everything?q=" + searchTerm + "&from=2017-11-15&sortBy=popularity&apiKey=a3b7c632d41e45bcb47ccc17698fb653";

    console.log("2/8 search url is: " + searchURL);

    AJAXquery(searchURL);
});
