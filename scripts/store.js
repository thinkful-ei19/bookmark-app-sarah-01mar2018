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
    console.log('addBookmark ran');
    this.bookmarks.unshift(bookmark);
  };

  //find a bookmark by its id
  // const findByID = function(id) {
  //   console.log('findByID ran');
  //   return store.bookmarks.find(bookmark => bookmark.id === id);
  // };

  //Let's add a NEW bookmark
  //sets adding to true
  const addButtonToggle =function() {
    store.adding = !store.adding;
    // $('.toggle-add').toggleClass('hidden inline-block');
  };

  //update delete bookmark
  // const findAndDelete = function(id) {
  //   //this.bookmarks.splice(this.boomarks.findIndex(bookmark => bookmark.id === id), 1);
  //   let bookmark = findByID(id);
  //   store.bookmarks = store.bookmarks.filter((storeBookmark) => {
  //     return storeBookmark.id !== bookmark.id;
  //   }); 
  // };

  return {
    bookmarks: [],
    adding: false,
    expanded: false,
    filterRating: 1,

    //findByID,
    addBookmark,
    //addButtonToggle,
    //findAndDelete
    //addNewBookmark
  };

})();