'use strict'; 
/* global api, $ */

$(document).ready(function() {
  
//  api.getBookmarks((bookmarks) => { 
//    bookamarks.forEach((bookmark) => {
//     store.addBookmark(bookmark));
//     bookmarksList.render();
//  });
});

api.createBookmark('Amazon', 'https://www.amazon.com/ref=nav_logo', (newBookmark) => {
  api.getBookmarks((bookmarks) => {
    console.log(bookmarks);
  });
});


// $.getJSON('https://thinkful-list-api.herokuapp.com/sarah/bookmarks', (response) => {
//   console.log('api response:', response);
// });

