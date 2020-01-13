// Java Script for GIFTatic app, started 1/7 1O:59 pm

var defaultgiftopics = ["cat", "dog", "hamster"]; //default topics if there are none in local storage
var topiclist = []; //list of topics if created from local storage, or as added to by user.
var favelist = [];  //list of urls marked as favorites  and retrieved from local storage.
var newTopic = "";  //to hold new topic before it is added to topiclist array.

//*********************************************************************************
// RENDER BUTTONS
//*********************************************************************************
function playAPIdone() {
  //this function plays the sound for when API results are returned
  console.log("inside playAPIdone function");
  var snd = document.getElementById("myAudio");
  snd.play();

  console.log("end playAPIdone function");
}

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


    // add new button to topiclist array, ignoring whether or not it might be a duplicate
    if (newbtn.length > 0) {
      //only push to the topiclist array if the newbtn parameter is not empty
        topiclist.push(newbtn);
    }
      //sort the topic list
      topiclist.sort();

// console.log("TOPIC ARRAY: " + topiclist);
    // Looping through the array of topics
    // console.log("there are " + topiclist.length + " buttons to add");

    for (var i = 0; i < topiclist.length; i++) {
      // for (var i = topiclist.length; i >= 0; i--) {

    // Then dynamicaly generating buttons for each topic in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of topic-btn to our button
    a.addClass("topic-btn");
    // Adding a data-attribute
    a.attr("data-name", topiclist[i]);
    // console.log("adding topic: " + topiclist[i]);
    // Providing the initial button text
    a.text(topiclist[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
    // $("#buttons-view").prepend(a);

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
        console.log("next line should write out the key to local storage")
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
  console.log("inside loadfavorites function");

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


       
        //  console.log("USE CONTENT OF TEMPFAVES ARRAY to populate the favelist array");
         favelist = tempfaves;
       

       //make one final check
      //  console.log("TEST FAVES ARRAY");
      //  for (i = 0; i< favelist.length; i++) {
      //     console.log(favelist[i]);

      //  }


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
        //now make the textbox empty after getting the value from it
        $("#gif-input").val("");

        newTopic = topic.toLowerCase();

        // console.log("ADD TOPIC BUTTON CLICKED");
        // console.log("NEW TOPIC IS: [" + newTopic + "]");

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

        // console.log("SEARCH TOPIC BUTTON CLICKED");
        // console.log("TOPIC TO SEARCH FOR IS: [" + searchFor + "]");

        var limit = $("#limit").val();
        var rating = $("#rating").val();

        // console.log("SELECTED LIMIT IS: " + limit);
        // console.log("SELECTED RATING IS: " + rating);

        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=1EMx5NFcJ1QPK7RBP6kFYQgbwHvl3YOF&q=" + searchFor
        
        if (rating === "any") {
          // console.log("RATING IS ANY");
          queryURL = queryURL + "&limit=" + limit + "offset=0&lang=en"
        }
        else {
          queryURL = queryURL + "&limit=" + limit + "offset=0&rating=" + rating + "&lang=en"
        }

        // console.log("URL: " + queryURL);

        // Creating an AJAX call for the specific gif search crieteria 
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          
          // console.log(response);

          // console.log("iterating response data below");
          // console.log("THERE ARE: " + response.data.length + " IMAGES IN THE RESULTS");
          var imglist = [];
          for (i=0; i < response.data.length; i++) {
            //iterate through response data and get gif info
          // console.log("GIF NUMBER: " + i)
            var gifid = response.data[i].id;
            var gifStillurl = response.data[i].images.original_still.url;
// console.log("ORIGINAL STILL URL: " + response.data[i].images.original_still.url);            
            var gifAnimurl = response.data[i].images.original.url;
// console.log("ORIGINAL ANIM URL" + response.data[i].images.original.url)            ;
            var giftitle = response.data[i].title;
            var gifrating = response.data[i].rating
            var username = response.data[i].username;
            if (username == "" ) {
              //usernme is empty
              username = "not provided"
            }


          // console.log("gif title: " + response.data[i].title);
          // console.log("gif rating: " + response.data[i].rating);
          // console.log("gif username: [" + response.data[i].username + "]");

            //create a new div to hold the gif image:
            // console.log("make new div to hold gif info and image");
            var rslt_div = $("<div>");
            rslt_div.attr("id", gifid);    //set result div id to be the gif id
            rslt_div.addClass("gifresult");
            

            //now make a p tag with the gif title

            //if the title is blank, show "not provided"
            if (giftitle === "") {
              giftitle = "not provided"
            }
            var Ptitle = $("<p>").text("title: " + giftitle);
            Ptitle.addClass("gifinfo");
            
            //now append the title p tag to the result div.
            // console.log("adding Ptitle to rslt_div");
            rslt_div.append(Ptitle);


            //make the p tag with gif rating
            var Prating = $("<p>").text("Rating: " + gifrating);
            Prating.addClass("gifinfo");
            //append the rating to the result div.
            // console.log("adding Prating to rslt_div");
            rslt_div.append(Prating);

            //now add the username info
            var Pusername = $("<p>").text("User name: " + username);
            Pusername.addClass("gifinfo");

            //append the username info
            // console.log("adding Pusername to rslt_div")
           rslt_div.append(Pusername);


            //finally make the img tag for the gif
          // console.log("making the image tag for the gif");
// console.log("STILL url: [" + gifStillurl) + "]";
// console.log("ANIM url: [" + gifAnimurl + "]");
                      // console.log("adding image: " + i);
            var rsltimg = $("<img>");
            rsltimg.addClass("gif-result");
            rsltimg.attr("id", gifid);
            rsltimg.attr("src", gifStillurl);
            rsltimg.attr("alt", searchFor + " image");
            rsltimg.attr("data-state", "still");
            rsltimg.attr("data-url-still", gifStillurl);
            rsltimg.attr("data-url-anim",gifAnimurl);
            
            //now, append the gif into the rslt div
            // console.log("adding rslt_img to rslt_div");
            rslt_div.append(rsltimg);

            //finally prepend the entire result div into the main results div
            // console.log("adding img to results div");
            $("#imgresults").prepend(rslt_div);

          }  //end of for loop for all results

            console.log("end of ajax rsponse processing");
          } //end of ajax response processing
        );  //end of search button event parameter list


      console.log("end of search button click handler");
} //end of search button click function
) //end of search button click parameter list

//*********************************************************************************
// RIGHT-CLICK TOPIC SEARCH BUTTON
//*********************************************************************************
$(document).on("contextmenu", "#buttons-view",  function(event) {
  //this function handles the reight-click event for topic search buttons


  console.log("RIGHT-CLICK EVENT ON TOPIC BUTTON");
  // $('#fBox' + folderID).on("contextmenu", function(event) {

} //end of mousedown event listener function
) //end of mousedown event listener



//*********************************************************************************
// CLEAR IMAGE RESULTS BUTTON CLICK
//*********************************************************************************


$("#clearresults").on("click", function( ) {
  //This event function empties the search results div.

  console.log("CLEAR RESULTS BUTTON CLICKED");

  $("#imgresults").empty();



  console.log("end of clear results button click function")
} //end of clear result button click function

) //end of clear result button click event


//*********************************************************************************
// RESULT IMAGE DOUBLECLICK
//*********************************************************************************
$(document).on("dblclick", ".gifresult",  function(event) {
  event.preventDefault(); //PREVENT DEFAULT ACTION
  event.stopPropagation ();

    console.log("RESULT div DOUBLE-CLICKED");

    var gifdiv = this

    console.log("prove that I now have a handle on the right gif")

    console.log(gifdiv)

} //end of doubleclick event function for rresult gif
) //end of doubleclick event listener for reseult gif


//*********************************************************************************
// RESULT IMAGE CLICK
//*********************************************************************************
$(document).on("click", ".gif-result",  function(event) {
  // $(".gifresult").on("click", function () {

    console.log("RESULT img CLICKED --TURN ANIMATION ON/OFF");

    var gifimg = $(this);

    // console.log("prove that I now have a handle on the right IMAGE")

    // console.log(gifimg);

    // console.log("image ID: " + $(this).attr("id"));

    var imgState = $(this).attr("data-state");

    // console.log("image data-state: " + imgState);

    if (imgState == "still") {
      //change data-state attribute
      $(this).attr("data-state", "anim");
      //now use data-url-anim attribute to set the src attribute
      var temp = $(this).attr("data-url-anim");
      // console.log("ANIMATED URL IS: " + temp);
      $(this).attr("src", temp);

      // console.log("GIF SHOULD NOW BE  ANIMATED")
    }
    else {
      //set the data-state back to still
      $(this).attr("data-state", "still");
      //use the data-url-still attribute to set the src attribut
      var temp = $(this).attr("data-url-still");
      // console.log("STILL URL IS: " + temp);
      $(this).attr("src", temp);

      // console.log("GIF SHOULD NOW BE  STILL");
    }



} //end of Click event function for result gif
) //end of click event listener for resesult gif

console.log("end of document ready function");
} //end of document ready function 
) //end of document read patameter list
