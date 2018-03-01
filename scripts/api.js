'use strict';
/* global $ */
// eslint-disable-next-line no-unused-vars
const api = function () {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/sarah';
  
  const getBookmarks = (callback) => {
    $.getJSON(`${BASE_URL}/bookmarks`, callback);
  };

  const createBookmark = (title, url, callback) => {
    let newBookmark = JSON.stringify({
      title: title,
      url: url
    });
    $.ajax({
      url: `${BASE_URL}/bookmarks`,
      method: 'POST',
      contentType: 'application/json',
      data: newBookmark,
      success: callback
    });
  };
  return {
    getBookmarks,
    createBookmark,
  };
}();