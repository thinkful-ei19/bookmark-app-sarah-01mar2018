'use strict';
/* global store, $, api */

const bookmarksList = (function(){

  //Below: inject HTML, create bookmark string to render, render to the DOM

  function generateBookmarkElement(bookmark) {
  //HTML goes here
    // if(!bookmark.expanded) {

    // }
    return `
    <li class='bookmark js-bookmark'>
    <div class='bookmark-item condensed' data-id=${bookmark.id}>
        <p><h3 class='bookmark-title'>${bookmark.title}</h3>
        <span class='bookmark-rating'>Rating: ${bookmark.rating}</span></p>
        <div class="bookmark-controls">
              <button class="bookmark-expand js-bookmark-expand">
                <span class="button-label">expand bookmark</span>
              </button>
              <button class="bookmark-delete js-bookmark-delete">
                <span class="button-label">delete</span>
              </button>
        </div>
    </div>
    <div class='expanded hidden'>
      <p class='desc'>${bookmark.desc}</p>
      <form action=${bookmark.url}>
       <input type="submit" value='visit site' />
      </form>
    </div>
</li>
`;
  }
    

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
  const bookmarkVals = function() {
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
      .data('id');
  }


  //Event Listeners below this line

  function handleBookmarkExpand() {
    $('.js-bookmarks-list').on('click', '.js-bookmark-expand', event => {
      console.log('expand clicked')
      const id = getIdFromElement(event.currentTarget);
      const bookmark = store.findByID(id);
      api.updateBookmark(id, {expanded: !bookmark.expanded}, () => {
        store.findAndUpdate(id, {expanded: !bookmark.expanded});
        render();
      })
    })
  }

  function handleBookmarkDelete() {
    $('.js-bookmarks-list').on('click', '.js-bookmark-delete', event => {
      console.log('delete ran');
      event.preventDefault();
      const id = getIdFromElement(event.currentTarget);
      console.log(id);
      api.deleteBookmark(id,() => {
        store.findAndDelete(id);
        render();
      });
    });
  }
  

  //Listen for ADD Bookmark click and change adding to true
  // function handleAddBookmarkClick() {
  //   $('#js-add-button-form').on('click', '.js-add-button', event => {
  //     $('.for-adding-new-bookmark').show();
  //     event.preventDefault();
  //     // $('.toggle-add').toggleClass('hidden inline-block');
  //     console.log('add bookmark clicked');
  //     addButtonToggle();
  //     render();
  //   });
  // }

  //listens for submit for new bookmark
  function handleAddBookmarkSubmit() {
    $('.js-new-bookmark-form').on('submit', event => {
      event.preventDefault();
      //get form values
      console.log('submit clicked');
      // let newBookmark = bookmarkVals();
      const title = $(event.currentTarget).find('#title').val();
      const url = $(event.currentTarget).find('#url').val();
      const desc = $(event.currentTarget).find('#desc').val();
      const rating = $('input[name=rating]:checked').val();
      const newBookmark = { title, url, desc, rating };
      console.log(newBookmark);
      api.createBookmark(title, url, desc, rating, (response) => {
        store.addBookmark(response);
        render();
      });
      $(event.currentTarget).find('#title').val('');
      $(event.currentTarget).find('#url').val('');
      $(event.currentTarget).find('#desc').val('');
      $(event.currentTarget).find('input[name=rating]:checked').prop('checked', false);
    });
  }

  function handleToggleFilter() {
    $('whatever button').click(() => {
      store.toggleExpanded();
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
    // handleAddBookmarkClick();
    handleBookmarkDelete();
    handleAddBookmarkSubmit();
    handleToggleFilter();
    handleBookmarkExpand();
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