'use strict'; 
const store = (function() {
  //bookmarks: [
  // {  id: "cjcuzl21l00290k05253okaoh",
  // title: "Woolworths to stop selling pesticide linked to global bee decline",
  // url: "https://www.theguardian.com/environment/2018/jan/23/woolworths-to-stop-selling-pesticide-linked-to-global-bee-decline",
  // desc: "Australian grocery giant will join Bunnings to withdraw Yates Confidor from sale",
  // rating: 4}
  //]}

  //add bookmarks to the store
  const addBookmark = function(bookmark) {
    bookmark.expanded = false;
    console.log('addBookmark ran');
    this.bookmarks.unshift(bookmark);
  };

  //find a bookmark by its id
  const findByID = function(id) {
    console.log('findByID ran');
    return store.bookmarks.find(bookmark => bookmark.id === id);
  };

  //Let's add a NEW bookmark
  //sets adding to true
  const addButtonToggle =function() {
    store.adding = !store.adding;
    // $('.toggle-add').toggleClass('hidden inline-block');
  };

  //update delete bookmark
  const findAndDelete = function(id) {
    //this.bookmarks.splice(this.boomarks.findIndex(bookmark => bookmark.id === id), 1);
    let bookmark = findByID(id);
    store.bookmarks = store.bookmarks.filter((storeBookmark) => {
      return storeBookmark.id !== bookmark.id;
    }); 
  };

  //function to find and update <li> bookmarks by id
  const findAndUpdate = function(id, newData) {
    let bookmark = this.bookmarks.find(bookmark => bookmark.id === id);
    console.log(bookmark);
    Object.assign(bookmark, newData);
    console.log(bookmark);
    console.log(store.bookmarks);
  };

  //function to toggle adding property in store
  const toggleAdding = function() {
    this.adding = ! this.adding;
  };

  const toggleRatingFilter = function(rating) {
    this.filterRating = parseInt(rating);
  };

  return {
    bookmarks: [],
    adding: false,
    filterRating: 1,

    findByID,
    addBookmark,
    addButtonToggle,
    findAndDelete,
    findAndUpdate,
    toggleAdding,
    toggleRatingFilter,
  };

})();