# giftastic
A fun app to select GIF files from GIPHY.com, on topics entered by the user.
Version 0.0 -- repository created, placeholder files for style.css, app.js, and index.html created. no code or html content yet.
Version 0.1 -- code to load topics and favorites from local storage completed and tested, also the code to render search buttons from the list of topic is complete and working. Index.html mostly complete, still has some controls to add. css tyles started.
Version 0.2 -- added drop-down lists so that user may select the rating and limit of gifs returned by search.
Version 0.3 -- implemented code to make the ajax call to the GIPHY API, and display results. user choice of rating and number of results is completely implemented and tested. A button to clear the search results div has been implemented and tested.
Version 0.4 -- fixed some bugs -- in particular a severely malformed rendering of topic search buttons, which, oddly enough, was caused by a setting in the style.css (if a "directions" class p-tag had a margin of 0; the topic buttons rendered with a massive indent on the left of the first row. There is a comment notation in the style.css file that notes the specific setting that caused the problem.) Other changes include adding more directions for the user in index.html, and more colors and styles in index.html, with the intention of making directions and labels more prominent and easily readable.

NEXT TO DO: 1) implement double-click on a gif image to add it to favorites.
2) implement double-click on a favorite gif to remove it from favorites
3) implement right-click to delete a topic button and its associated local storage key.
4) implement code to delete all local storage entries for favorites and topics, since those get re-written in the course of the app's operation.
=======
