'use strict'; 
/* global api, $ */

$(document).ready(function() {
  
//  api.getBookmarks((bookmarks) => { 
//    bookamarks.forEach((bookmark) => {
//     store.addBookmark(bookmark));
//     bookmarksList.render();
//  });
});

//test deleteBookmark
api.deleteBookmark("cje8wp7id001j0kyagctz2793", () => {console.log('deleted!');});

//test updateBookmark
// api.updateBookmark("cje8wp7id001j0kyagctz2793", { rating: 4 }, () => {console.log('updated!');});

//test createBookmark
// api.createBookmark('Amazon', 'https://www.amazon.com/ref=nav_logo', (newBookmark) => {
//   api.getBookmarks((bookmarks) => {
//     console.log(bookmarks);
//   });
// });

//test getBookmarks
// $.getJSON('https://thinkful-list-api.herokuapp.com/sarah/bookmarks', (response) => {
//   console.log('api response:', response);
// });

