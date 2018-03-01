'use strict';
/* global $ */
const api = function () {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/sarah';
  
  const getItems = (callback) => {
    $.getJSON(`${BASE_URL}/bookmarks`, callback)
  };
  return {
    getItems,
  };
  
}();