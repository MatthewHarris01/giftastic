// Java Script for GIFTatic app, started 1/7 1O:59 pm

var defaultgiftopics = ["cat", "dog", "ostrich"]; //default topics if there are none in local storage
var topiclist = []; //list of topics if created from local storage, or as added to by user.
var favelist = [];  //list of urls marked as favorites  and retrieved from local storage.
var newTopic = "";  //to hold new topic before it is added to topiclist array.

//*********************************************************************************
// RENDER BUTTONS
//*********************************************************************************
    function renderButtons(newbtn) {
      // This function renders all the gif topic buttons
      //The newbtn parameter is the name for a new button
      // if thed newbtn parameter is not empty, it means a new button has been added to the4 topiclist, and the topiclist array mubst be
      // written into local storage.
    console.log("inside renderButtons function");

    // Deleting the topics prior to adding new topics
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();

    console.log("BUTTON TO ADD: [" + newbtn + "]");
    // add new button to topiclist array
    if (newbtn.length > 0) {
      //only push to the topiclist array if the newbtn parameter is not empy
      topiclist.push(newbtn);
    }

    // Looping through the array of topics
    console.log("there are " + topiclist.length + " buttons to add");
    for (var i = 0; i < topiclist.length; i++) {

    // Then dynamicaly generating buttons for each topic in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of topic-btn to our button
    a.addClass("topic-btn");
    // Adding a data-attribute
    a.attr("data-name", topiclist[i]);
    console.log("adding topic: " + topiclist[i]);
    // Providing the initial button text
    a.text(topiclist[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
        }

    //write topiclist array into local storage, if needed
    if (newbtn.length > 0) {
      console.log("WRITE TOPICLIST TO LOCAL STORAGE!!");
      var newkey = "giftastic"
      var key = "";
      for (i=0; i < topiclist.length; i++) {
        //iterate topic list, generate a key, and write new key:value pair to local storage.
        key = newkey + i;
        console.log("NEW KEY: " + key);
        console.log("VALUE: " + topiclist[i]);
        localStorage.setItem(key, topiclist[i]);
      }

    }
      console.log("end of renderButtons function");
      } //end of renderButtons function


//*************************************************************
// LOAD TOPICS
//*************************************************************
function loadtopics() {
  //this function loads topics from local storage
  console.log("inside loadtopics function");

    //iterate all keys a
  var tempkeys = [];
  for (i=0; i < window.localStorage.length; i++) {
    // console.log(localStorage.key(i));
    tempkeys.push(localStorage.key(i));
  }

  

    //now process the array of key values, and save only those keys that begin with "giftastic"
    var tempkeys2 = []  // temp array to hold keys that we want
    for (i=0; i<tempkeys.length; i++) {
      if (tempkeys[i].search("giftastic") == 0) {
        //if the search result is 0, then the key name starts with "giftastic"
       tempkeys2.push(tempkeys[i]);
      }
    }
      
    //sort the array of key values we want
    tempkeys2.sort();

    
       //now iterate the array of giftastic keys, and fetch their values into the topic list array
       var temptopics = []; //temp arrary to hold topics values
       var temptopic = "";  //temp var to hold key value being retrieved
       for (i=0; i < tempkeys2.length; i++) {
         temptopic = localStorage.getItem(tempkeys2[i]);
         temptopics.push(temptopic);
       }
    
       //if the temptopics array is empty (no giftastic keys found), use the default topics
       if (temptopics.length == 0) {
         topiclist = defaultgiftopics;
       }
       else {
         topiclist = temptopics;
       }

  console.log("end of loadtopic function");
} // end of loadtopics function

//*********************************************************************************
// LOAD FAVORITES
//*********************************************************************************
function loadfavorites() {
  //this function loads  favorit urls from local storage
  console.log("inside loadfavoties function");

  //iterate all keys a
  var tempkeys = [];
  for (i=0; i < window.localStorage.length; i++) {
    tempkeys.push(localStorage.key(i));
  }
    //now process the array of key values, and save only those keys that begin with "giffave"
    var tempkeys2 = []  // temp array to hold keys that we want
    for (i=0; i<tempkeys.length; i++) {
      if (tempkeys[i].search("giffave") == 0) {
        //if the search result is 0, then the key name starts with "giffave"
       tempkeys2.push(tempkeys[i]);
      }
// console.log("array of keys we want: " + tempkeys2);
    }
      
    //sort the array of key values we want
    // console.log("UNSORTED ARRAY: " + tempkeys2);
    tempkeys2.sort();
    // console.log("SORTED ARRAY of keys we want: " + tempkeys2);

    //check the content of tempkeys2
    // console.log("TESTING CONTENT OF TEMPKEYS2");
    // for (i=0; i< tempkeys2.length; i++) {
      // console.log(tempkeys2[i]);
    // }
       //now iterate the array of giffave keys, and fetch their values into the favorites list attay
       var tempfaves = []; //temp arrary to hold favorites values
       var tempfave = "";  //temp var to hold key value being retrieved
       for (i=0; i < tempkeys2.length; i++) {
         tempfave = localStorage.getItem(tempkeys2[i]);
        //  console.log("key being retrived: "+ tempkeys2[i] );
        //  console.log("KEY VALUE: " + tempfave);
         tempfaves.push(tempfave);
       }
    
      //  console.log("TEMPFAVES   ARRAY: " + tempfaves);


       
         console.log("USE CONTENT OF TEMPFAVES ARRAY to populate the favelist array");
         favelist = tempfaves;
       

       //make one final check
       console.log("TEST FAVES ARRAY");
       for (i = 0; i< favelist.length; i++) {
          console.log(favelist[i]);

       }
  console.log("end of loadfavorites function");
} // end of loadfavorites function



//*********************************************************************************
// DOCUMENT READY
//*********************************************************************************

$(document).ready(function()  {
  console.log("document is ready function");

  console.log("inside document ready function");

    //see if there are any topics to load from local storage
    var keycount = window.localStorage.length;

    if (keycount > 0) {
      // console.log("there are possibly topics and favorites to load from local storage");
      loadtopics();
      loadfavorites();
      renderButtons("");
    }
    else {
      //no topics to load, use the contents of defaulgiftopics to get started
      topiclist = defaultgiftopics;
      renderButtons("");
    }

//*********************************************************************************
// ADD TOPIC BUTTON CLICK
//*********************************************************************************
      // This function handles events where a movie button is clicked
      $("#add-gif").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var topic = $("#gif-input").val().trim();
        newTopic = topic.toLowerCase();

        console.log("ADD TOPIC BUTTON CLICKED");
        console.log("NEW TOPIC IS: [" + newTopic + "]");

        // Calling renderButtons which handles the processing of our topiclist array
        renderButtons(newTopic);


        console.log("end of add topic button click");
      } //end of search button click handler
      );

//*********************************************************************************
// SEARCH BUTTON CLICK
//*********************************************************************************
      //need to use this syntax, because search buttons are dynamically added.
      $(document).on("click", ".topic-btn",  function(event) {
      // This function handles events where one of the topic search buttons is clicked.
      event.preventDefault();
        // This line gets the topic from the button label
        var searchFor = $(this).attr("data-name");


        // var topic = $("#gif-input").val().trim();
        // newTopic = topic.toLowerCase();

        console.log("SEARCH TOPIC BUTTON CLICKED");
        console.log("TOPIC TO SEARCH FOR IS: [" + searchFor + "]");

        var limit = $("#limit").val();
        var rating = $("#rating").val();

        console.log("SELECTED LIMIT IS: " + limit);
        console.log("SELECTED RATING IS: " + rating);


        //SAMPLE API
//        https://api.giphy.com/v1/gifs/search?api_key=1EMx5NFcJ1QPK7RBP6kFYQgbwHvl3YOF&q=&limit=20&offset=0&rating=PG&lang=en  
        
//        https://api.giphy.com/v1/gifs/search?api_key=1EMx5NFcJ1QPK7RBP6kFYQgbwHvl3YOF&q=CATS&limit=20&offset=0&rating=PG&lang=en      

//note the 'q' parameter (cats in this example), the limit parameter
//https://api.giphy.com/v1/gifs/search?api_key=1EMx5NFcJ1QPK7RBP6kFYQgbwHvl3YOF&q=CATS&limit=20&offset=0&rating=PG&lang=en  

        //set up queryURL and make ajax call to GIPHY API here
        // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=[search term]&api_key=1EMx5NFcJ1QPK7RBP6kFYQgbwHvl3YOF&limit=5");
        // xhr.done(function(data) { console.log("success got data", data); });
        
        // the api url below gets random gifs with the tag=cats.
        // var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=cats";
        
        // var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

        // // Creating an AJAX call for the specific movie button being clicked
        // $.ajax({
        //   url: queryURL,
        //   method: "GET"
        // }).then(function(response) {



        console.log("end of add topic button click");
      } //end of search button click handler
      );



  console.log("end of document ready function");
} //end of document ready function
) //end of document ready evant handler parameter list