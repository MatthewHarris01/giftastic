// Java Script for GIFTatic app, started 1/7 1O:59 pm

var defaultgiftopics = ["cat", "dog", "ostrich"]; //default topics if there are none in local storage
var topiclist = []; //list of topics if created from local storage, or as added to by user.
var favelist = [];  //list of urls marked as favorites  and retrieved from local storage.

//*********************************************************************************
// RENDER BUTTONS
//*********************************************************************************
    // Function for displaying gif topic buttons data
    function renderButtons() {
      console.log("inside renderButtons function");

    // Deleting the topics prior to adding new topics
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();

    // return; //FOR TESTING

    // Looping through the array of topics
    console.log("there are " + topiclist.length + " buttons to add");
    for (var i = 0; i < topiclist.length; i++) {

    // Then dynamicaly generating buttons for each topid in the array
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
      console.log("end of renderButtons function");
      } //end of renderButtons function


//*************************************************************
// LOAD TOPICS
//*************************************************************
function loadtopics() {
  //this function loads topics from local storage
  console.log("inside loadtopics function");

  // console.log("localstorage elements to process: " + window.localStorage.length);

  //iterate all keys a
  var tempkeys = [];
  for (i=0; i < window.localStorage.length; i++) {
    console.log(localStorage.key(i));
    tempkeys.push(localStorage.key(i));
  }

  // console.log("KEY ARRAY IS: " + tempkeys);

    //now process the array of key values, and save only those keys that begin with "giftastic"
    var tempkeys2 = []  // temp array to hold keys that we want
    for (i=0; i<tempkeys.length; i++) {
      if (tempkeys[i].search("giftastic") == 0) {
        //if the search result is 0, then the key name starts with "gigtastic"
        // console.log("we want this key: "+ tempkeys[i]);
       tempkeys2.push(tempkeys[i]);
      }
     else {
      //  console.log("we do NOT WANT this key: " + tempkeys[i]);
     }
// console.log("array of keys we want: " + tempkeys2);
    }
      
    //sort the array of key values we want
    // console.log("UNSORTED ARRAY: " + tempkeys2);
    tempkeys2.sort();
    // console.log("SORTED ARRAY of keys we want: " + tempkeys2);

    //check the content of tempkeys2
    // console.log("TESTING CONTENT OF TEMPKEYS2");
    for (i=0; i< tempkeys2.length; i++) {
      console.log(tempkeys2[i]);
    }
       //now iterate the array of giftastic keys, and fetch their values into the topic list attay
       var temptopics = []; //temp arrary to hold topics values
       var temptopic = "";  //temp var to hold key value being retrieved
       for (i=0; i < tempkeys2.length; i++) {
         temptopic = localStorage.getItem(tempkeys2[i]);
        //  console.log("key being retrived: "+ tempkeys2[i] );
        //  console.log("KEY VALUE: " + temptopic);
         temptopics.push(temptopic);
       }
    
      //  console.log("TEMPTOPICS   ARRAY: " + temptopics);


       //if the temptopics array is empty (no giftastic keys found), use the default topics
       if (temptopics.length == 0) {
        //  console.log("USE DEFAULTS");
         topiclist = defaultgiftopics;
       }
       else {
        //  console.log("USE CONTENT OF TEMPTOPICS ARRAY");
         topiclist = temptopics;
       }

       //make one final check
      //  console.log("TEST TOPICLIST ARRAY");
       for (i = 0; i< topiclist.length; i++) {
          // console.log(topiclist[i]);

       }



  console.log("end of loadtopic function");
} // end of loadtopics function

//*********************************************************************************
// LOAD FAVORITES
//*********************************************************************************
function loadfavorites() {
  //this function loads  favorit urls from local storage
  console.log("inside loadfavoties function");

  console.log("localstorage elements to process: " + window.localStorage.length);

  //iterate all keys a
  var tempkeys = [];
  for (i=0; i < window.localStorage.length; i++) {
    console.log(localStorage.key(i));
    tempkeys.push(localStorage.key(i));
  }

  console.log("KEY ARRAY IS: " + tempkeys);

    //now process the array of key values, and save only those keys that begin with "giffave"
    var tempkeys2 = []  // temp array to hold keys that we want
    for (i=0; i<tempkeys.length; i++) {
      if (tempkeys[i].search("giffave") == 0) {
        //if the search result is 0, then the key name starts with "giffave"
        console.log("we want this key: "+ tempkeys[i]);
       tempkeys2.push(tempkeys[i]);
      }
     else {
       console.log("we do NOT WANT this key: " + tempkeys[i]);
     }
console.log("array of keys we want: " + tempkeys2);
    }
      
    //sort the array of key values we want
    console.log("UNSORTED ARRAY: " + tempkeys2);
    tempkeys2.sort();
    console.log("SORTED ARRAY of keys we want: " + tempkeys2);

    //check the content of tempkeys2
    console.log("TESTING CONTENT OF TEMPKEYS2");
    for (i=0; i< tempkeys2.length; i++) {
      console.log(tempkeys2[i]);
    }
       //now iterate the array of giffave keys, and fetch their values into the favorites list attay
       var tempfaves = []; //temp arrary to hold favorites values
       var tempfave = "";  //temp var to hold key value being retrieved
       for (i=0; i < tempkeys2.length; i++) {
         tempfave = localStorage.getItem(tempkeys2[i]);
         console.log("key being retrived: "+ tempkeys2[i] );
         console.log("KEY VALUE: " + tempfave);
         tempfaves.push(tempfave);
       }
    
       console.log("TEMPFAVES   ARRAY: " + tempfaves);


      //  //if the temptopics array is empty (no giftastic keys found), use the default topics
      //  if (temptopics.length == 0) {
      //    console.log("USE DEFAULTS");
      //   //  topiclist = defaultgiftopics;
      //  }
       
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

$(document).ready(function()  {
  console.log("document is ready function");

  console.log("inside document ready function");

  // Sorttest();
localStorage.setItem("fluff", "expected over-write");

// localStorage.removeItem("fluff");

  // return;

    //see if there are any topics to load from local storage
    var keycount = window.localStorage.length;

    if (keycount > 0) {
      console.log("there are possibly topics adn favorites to load from local storage");
      loadtopics();
      loadfavorites();
      renderButtons();
    }
    else {
      //no topics to load, use the contents of defaulgiftopics to get started
      console.log("NO TOPICS TO LOAD");
      topiclist = defaultgiftopics;
      renderButtons();
    }

  // console.log("local storage length: " + window.localStorage.length); //check number of local storage entries

  // console.log("first local storage item: " + localStorage.key(1));
  // var key = localStorage.key(1);
  // console.log("value of local storage key 1 " + localStorage.getItem(key));



  console.log("end of document ready function");
} //end of document ready function
) //end of document ready evant handler parameter list