'use strict';
/* global store, $, api */

const bookmarksList = (function(){

  //Below: inject HTML, create bookmark string to render, render to the DOM

  function generateBookmarkElement(bookmark) {
  //HTML goes here
    if (!bookmark.expanded) {
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
  </li>`;
    } else {
    // let expandedClass = `<div class='expanded hidden'>`;

    // if (bookmark.expanded) {
    //   let expandedClass = `<div class='expanded'>`;
    // }
    // console.log(expandedClass);
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
    <div class='expanded'>
      <p class='desc'>${bookmark.desc}</p>
      <form action=${bookmark.url}>
       <input type="submit" value='visit site' />
      </form>
    </div>
</li>`;
    }
  }
  
    

  // const ratingHTML
  

  // Generate bookmark string to render
  function generateBookmarkListString(bookmarksList) {
    const bookmarks = bookmarksList.map((bookmark) => generateBookmarkElement(bookmark));
    return bookmarks.join('');
  }

  //generate default header HTML
  const generateDefaultHeader = function(){
    return `
    <div class='toggle-add add-bookmark-button js-add-bookmark-button'>
     <!-- <form id="js-add-button-form"> -->
          <button class='js-add-button'>Add bookmark</button>
        <!-- </form> -->
      </div>
      <div class='min-rating-menu'>
        <label class='minimum rating' for="filter-rating">Minimun Rating</label>
        <select name = "minimum rating" id='minimum-rating'>
          <option value='1' selected>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </div>
    `;
  };

  const generateAddBookmarkHeader = function() {
    return `
    <form action='#' class='toggle-add add-new-bookmark-form js-new-bookmark-form hidden'>
        <h2>Add a new bookmark</h2>
        <button type="submit" id='new-bookmark-submit'> Submit</button>        
        <label>Title</label>
        <input type="text" name="title" id="title" placeholder="add title">
        <label>Web Address</label>
        <input type="text" name="url" id="url" placeholder="url">
        <label>Description</label>
        <input type="text" name="desc" id="desc" placeholder="Enter a description">
        <div id='rating'>
            <label>Rate site</label>
            <input type='radio' name='rating' data-radio-rating=1 value='1'><label for='rating'>1</label>
            <input type='radio' name='rating' data-radio-rating=2 value='2'><label for='rating'>2</label>
            <input type='radio' name='rating' data-radio-rating=3 value='3'><label for='rating'>3</label>
            <input type='radio' name='rating' data-radio-rating=4 value='4'><label for='rating'>4</label>
            <input type='radio' name='rating' data-radio-rating=5 value='5'><label for='rating'>5</label>
        </div>

       
        <!-- <input type="button" name='cancel' value='cancel' onClick='https://thinkful-list-api.herokuapp.com/sarah/bookmarks' /> -->
      </form>
    `;
  };

  // //This is what will be rendered to the DOM
  function render() {
    let bookmarks = store.bookmarks;

    let header = (store.adding) ? generateAddBookmarkHeader() : generateDefaultHeader();
    //let currentStore = (store.ratingFilter === 'all') ? store.bookmarks : store.bookmarks.filter(obj => obj.rating >= store.ratingFilter);
    
    // if (store.filterRating !== null) {
    //   bookmarks = store.bookmarks.filter( => {
    //     return bookmarkValues.rating >= store.filterRating;
    //  });
    //}

    // if ()
    
    console.log('`render` ran');
    const bookmarksString = generateBookmarkListString(bookmarks);
   
    // inserts HTML into the DOM
    $('.js-header-add-filter').html(header);
    $('.js-bookmarks-list').html(bookmarksString);
  }
  
  // //form values to use in other functions
  // const bookmarkVals = function() {
  //   return {
  //     title: $('#title').val(),
  //     url: $('#url').val(),
  //     desc: $('#desc').val(),
  //     rating: $(parseInt($('#rating')))
  //   };
  // };

  //gets the bookmark id for the bookmark clicked on
  function getIdFromElement(bookmark) {
    return $(bookmark)
      .closest('.bookmark-item')
      .data('id');
  }


  //Event Listeners below this line

  function handleBookmarkExpand() {
    $('.js-bookmarks-list').on('click', '.js-bookmark-expand', event => {
      console.log('expand clicked');
      const id = getIdFromElement(event.currentTarget);
      const bookmark = store.findByID(id);
      // api.updateBookmark(id, {expanded: !bookmark.expanded}, () => {
      store.findAndUpdate(id, {expanded: !bookmark.expanded});
      render();
    });
  //   });
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
  function handleAddBookmarkClick() {
    $('.js-header-add-filter').on('click', '.js-add-button', ((event) => {
      console.log('add bookmark clicked');
      store.toggleAdding();
      render();
    }));
  }

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


function handleBookmarkMinRating() {

}*/


  function bindEventListeners() {
    //all eventListener functions go here
    handleAddBookmarkClick();
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