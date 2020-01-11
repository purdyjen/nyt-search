
var api = "&api-key=xsHNvQyQQsqH7GPmfvVKhO6h57F7NVN5";
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var userInput = "Iran";
var q = "?q=" + userInput;
var queryURL = url + q + api;
var limit = 5;
var startYear = 2012; 
var endYear = 2010;

$.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
        console.log(response);
        var results = response.response.docs;
        for (i=0; i < limit; i++){
            console.log(results[i].headline);
            console.log(results[i].abstract);
        }
    }); //ajax closing tag

