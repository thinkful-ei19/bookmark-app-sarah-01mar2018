'use strict';
/* global $ */
// eslint-disable-next-line no-unused-vars
const api = function () {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/sarah';
  
  const getItems = (callback) => {
    $.getJSON(`${BASE_URL}/bookmarks`, callback)
  };
  return {
    getItems,
  };
}();