'use strict'; 
/* global api, $ */

$(document).ready(function() {

});
$.getJSON('https://thinkful-list-api.herokuapp.com/sarah/bookmarks', (response) => {
  console.log('api response:', response);
});