# giftastic
A fun app to select GIF files from GIPHY.com, on topics entered by the user.
Version 0.0 -- repository created, placeholder files for style.css, app.js, and index.html created. no code or html content yet.
Version 0.1 -- code to load topics and favorites from local storage completed and tested, also the code to render search buttons from the list of topic is complete and working. Index.html mostly complete, still has some controls to add. css tyles started.
Version 0.2 -- added drop-down lists so that user may select the rating and limit of gifs returned by search.
Version 0.3 -- implemented code to make the ajax call to the GIPHY API, and display results. user choice of rating and number of results is completely implemented and tested. A button to clear the search results div has been implemented and tested.
Version 0.4 -- fixed some bugs -- in particular a severely malformed rendering of topic search buttons, which, oddly enough, was caused by a setting in the style.css (if a "directions" class p-tag had a margin of 0; the topic buttons rendered with a massive indent on the left of the first row. There is a comment notation in the style.css file that notes the specific setting that caused the problem.) Other changes include adding more directions for the user in index.html, and more colors and styles in index.html, with the intention of making directions and labels more prominent and easily readable.
Version 0.5 -- click to start/stop animation implemented.
Version 1.0 -- all minimum requirements coded and working.

KNOWN ISSUES -- none as of this push
SUGGESTED IMPROVEMENTS: 1) enable user to edit search topics list, in particular to delete topics.
2) prevent user from adding duplicate search topics.
3) add a "Favorites" section, the contents of which are persistent via local storage.
