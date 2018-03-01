'use strict';
/* global index store api */

const bookmarksList = (function(){

  //Below: inject HTML, create bookmark string to render, render to the DOM

  function generateBookmarkElement(bookmark) {
  //HTML goes here

    return `
    <li class='bookmark js-bookmark'>
    <div class='bookmark-item condensed' data-id=${bookmark.id}>
        <p><h3 class='bookmark-title'>${bookmark.title}</h3>
        <span class='bookmark-rating'>${bookmark.rating}</span></p>
        <div class="bookmark-controls">
              <button class="bookmark-expand js-bookmark-expand">
                <span class="button-label">expand bookmark</span>
              </button>
              <button class="bookmark-delete js-bookmark-delete">
                <span class="button-label">delete</span>
              </button>
        </div>
    </div>
    <div class='hidden'>
      <p class='desc'>${bookmark.desc}</p>
      <form action=${bookmark.url}>
       <input type="submit" value='visit site' />
      </form>
    </div>
</li>
`;
  }
    

  // const expandedHTML

  // const ratingHTML
  

  // Generate bookmark string to render
  function generateBookmarkListString(bookmarksList) {
    const bookmarks = bookmarksList.map((bookmark) => generateBookmarkElement(bookmark));
    return bookmarks.join('');
    console.log('generate string ran');
  }

  // //This is what will be rendered to the DOM
  function render() {
    let bookmarks = store.bookmarks;
    // if (store.filterRating !== null) {
    //   bookmarks = store.bookmarks.filter( => {
    //     return bookmarkValues.rating >= store.filterRating;
      //  });
    //}
    console.log('`render` ran');
    const bookmarksString = generateBookmarkListString(bookmarks);
   
    // inserts HTML into the DOM
    $('.js-bookmarks-list').html(bookmarksString);
  }
  
  //form values to use in other functions
  const bookmarkValues = function() {
    return {
      title: $('#title').val(),
      url: $('#url').val(),
      desc: $('#desc').val(),
      rating: $(parseInt($('#rating')))
    };
  };

  //gets the bookmark id for the bookmark clicked on
  function getIdFromElement(bookmark) {
    return $(bookmark)
      .closest('.bookmark-item')
      .data('data-id');
  }


  //Event Listeners below this line

  function handleBookmarkDelete() {
    $('.js-bookmarks-list').on('click', '.js-bookmark-delete', event => {
      console.log('delete ran');
      event.preventDefault();
      const id = getIdFromElement(event.currentTarget);
      api.deleteBookmark(id,() => {
        store.findAndDelete(id);
        render();
      });
    });
  }
  

  //Listen for ADD Bookmark click and change adding to true
  function handleAddBookmarkClick() {
    $('#js-add-button-form').on('click', '.js-add-button', event => {
      $('.for-adding-new-bookmark').show();
      event.preventDefault();
      // $('.toggle-add').toggleClass('hidden inline-block');
      console.log('add bookmark clicked');
      addButtonToggle();
      render();
    });
  }

  //listens for submit for new bookmark
  function handleAddBookmarkSubmit() {
    $('.js-add-new-bookmark-form').submit('#new-bookmark-submit', event => {
      event.preventDefault();
      //get form values
      let newBookmark = bookmarkValues();
      api.createBookmark(newBookmark, response => 
        store.addBookmark(response));
      render();
    });
  }

  /*function handleAddBookmarkCancel() {

  }

function handleBookmarkExpand() {

}


function handleBookmarkMinRating() {

}*/


  function bindEventListeners() {
    //all eventListener functions go here
    handleAddBookmarkClick();
    handleBookmarkDelete();
    handleAddBookmarkSubmit();
  }
  //Methods that are exposed
  return {
    render: render,
    bindEventListeners: bindEventListeners
  };
})();


// const bookmarksList = (function(){

//   //Below: inject HTML, create bookmark string to render, render to the DOM

//   function generateBookmarkElement(bookmark) {
//   //HTML goes here

//     return `<div class='bookmark-item condensed' data-id=${bookmark.id}>
//     <p><h3 class='bookmark-title'>${bookmark.title}</h3>
//     <span class='bookmark-rating'>${bookmark.rating}</span></p>
//     <div class="bookmark-controls">
//           <button class="bookmark-expand js-bookmark-expand">
//             <span class="button-label">expand bookmark</span>
//           </button>
//           <button class="bookmark-delete js-bookmark-delete">
//             <span class="button-label">delete</span>
//           </button>
//         </div>
//     </div>`;
//   }
// }());