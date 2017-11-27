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
        console.log(result);

        var j = 0; //counts number of http denied


        // Loop through and provide the correct number of articles
        for (var i = 0; i < result.articles.length; i++) {

            console.log("result.articles.length: " + result.articles.length);

            var newURL = result.articles[i].url;
            var newTitle = result.articles[i].title;
            var newLink = $("<a>");
            newLink.attr("href", newURL);
            newLink.text("Click here to read article on Politico.");
            newLink.attr("target", "_blank");

            console.log("6/8 article is: " + result.articles[i]);
            console.log("7/8 title is: " + newTitle);
            console.log("8/8 url is: " + newURL);

            if (newURL.includes("http:")) {
                console.log("////DO NOT DISPLAY ARTICLE////");

                j++;
                console.log("http denied: " + j);

                $("#title" + i).text(newTitle);
                $("#article" + i).append(newLink);
            }

            else {
                console.log("////DISPLAY ARTICLE////");

                var articleSection = $("<iframe>");

                articleSection.addClass("box");
                articleSection.attr("src", newURL);
                articleSection.attr("frameborder", 0);
                articleSection.attr("scrolling", "yes");

                $("#title" + i).text(newTitle);
                $("#article" + i).empty().append(articleSection);

                ////////////////////////////////////////////////////
                //tried to add them dynamically. here is the attempt:

                //create new div for the new article
                // var titleDiv = $("<div class='collapsible-header'> <i class='material-icons'>filter_drama</i>newTitle</div>");
                // var articleDiv = $("<div class='collapsible-body'><span>newURL</span></div>");

                // titleDiv.attr('id', 'title' + i);
                // titleDiv.text(newTitle);

                // articleDiv.attr('id', 'article' + i);
                // //articleDiv.attr('href', newURL);
                // $("#article" + i).empty();

                // console.log(titleDiv);
                // console.log(articleDiv);


                // //create iframe to display article, add attributes
                // var articleSection = $("<iframe>");
                // articleSection.addClass("box");
                // articleSection.attr("id", "frame" + i);
                // articleSection.attr("src", newURL);
                // articleSection.attr("frameborder", 0);
                // articleSection.attr("scrolling", "yes");

                // //$("#article" + i).html(articleSection);
                // //$("#title" + i).text(newTitle);
                // $("#article" + i).append(articleSection);
                // $("#article-section").append(titleDiv);
                // $("#article-section").append(articleDiv);

                // //initailize collapsibles
                // //$('.collapsible-header').collapsible();
                // //$('.collapsible-body').collapsible();

                // console.log("6/8 article is: " + result.articles[i]);

                // console.log("7/8 title is: " + newTitle);

                // console.log("8/8 url is: " + newURL);
            }
        }
    });
}

$("#run-search").on("click", function(event) {

    console.log("1/8 button works");
    event.preventDefault();

    $("#article-section").empty();

    var searchTerm = $("#searchTerm").val().trim();
    console.log(searchTerm.length);

    if (searchTerm.length == 0 || searchTerm.includes("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")) {
        $("#run-search").text("Invalid Search");
        setInterval(function() { $("#run-search").text("Sumbit"); }, 3000)
    }
    else {
        console.log("search term is: " + searchTerm);
        var searchTerm = searchTerm.replace(/\s+/g, '%20');
        var searchURL = "https://newsapi.org/v2/everything?q=" + searchTerm + "&sources=politico&apiKey=a3b7c632d41e45bcb47ccc17698fb653";
        //var searchURL = "https://newsapi.org/v2/everything?q=" + searchTerm + "&from=2014-11-15&sortBy=popularity&apiKey=a3b7c632d41e45bcb47ccc17698fb653";
        //var searchURL = "https://newsapi.org/v2/top-headlines?q=" + searchTerm + "&sources=wall-street-journal&apiKey=a3b7c632d41e45bcb47ccc17698fb653";
        console.log("2/8 search url is: " + searchURL);

        AJAXquery(searchURL);
    }

});

$(document).ready(function() {
    $('.collapsible-header').collapsible();
    $('.collapsible-body').collapsible();
});