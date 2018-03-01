'use strict'; 
/*Global api, store, $, bookmarksList*/

// const store = {
//   bookmarks: [
//     {
//       id: 'cje8rv83o000w0kyajopapccg',
//       title: 'Great Western Power Company',
//       url: 'https://touchstoneclimbing.com/gwpower-co/',
//       desc: 'Located in the heart of Uptown Oakland, Great Western Power Company offers a comprehensive range of fitness classes and programs including yoga, TRX, core conditioning, Boot Camp, and Cardio Boxing. We are also the home of CrossFit V16, Oakland’s grittiest and most exciting CrossFit affiliate. With all of those fitness options, we almost forgot to mention our over 11,000 square feet of world-class rock climbing and bouldering! So if you\'ve been looking for a vibrant community where your fitness and adventure goals come together as one, look no further than GWPC!',
//       rating: 5,
//       expanded: false
//     },
//     {
//       id: 'cje8rvffn000x0kyaw1ms4m62',
//       title: 'Great Western Power Company',
//       url: 'https://touchstoneclimbing.com/gwpower-co/',
//       desc: 'Located in the heart of Uptown Oakland, Great Western Power Company offers a comprehensive range of fitness classes and programs including yoga, TRX, core conditioning, Boot Camp, and Cardio Boxing. We are also the home of CrossFit V16, Oakland’s grittiest and most exciting CrossFit affiliate. With all of those fitness options, we almost forgot to mention our over 11,000 square feet of world-class rock climbing and bouldering! So if you\'ve been looking for a vibrant community where your fitness and adventure goals come together as one, look no further than GWPC!',
//       rating: 4,
//       expanded: false
//     }
//   ],
//   adding: false,
//   rating: 1
// };

// function generateBookmarkElement(bookmark) {
//   return `
//   <li class='bookmark js-bookmark'>
//           <div class='bookmark-item condensed' data-id=${bookmark.id}>
//               <p><h3 class='bookmark-title'>${bookmark.title}</h3>
//               <span class='bookmark-rating'>${bookmark.rating}</span></p>
//               <div class="bookmark-controls">
//                     <button class="bookmark-expand js-bookmark-expand">
//                       <span class="button-label">expand bookmark</span>
//                     </button>
//                     <button class="bookmark-delete js-bookmark-delete">
//                       <span class="button-label">delete</span>
//                     </button>
//               </div>
//           </div>
//           <div class='hidden'>
//             <p class='desc'>${bookmark.desc}</p>
//             <form action=${bookmark.url}>
//              <input type="submit" value='visit site' />
//             </form>
//           </div>
//       </li>
//   `;
// }

// // Generate bookmark string to render
// function generateBookmarksListString(bookmarksList) {
// const bookmarks = bookmarksList.map((bookmark, id) => generateBookmarkElement(bookmark, id));
// console.log('generating bookmark list element');
// return bookmarks.join('');
// }

// //This is what will be rendered to the DOM
// function render() {
//   let bookmarks = store.bookmarks;
//   // if (store.filterRating !== null) {
//   //   bookmarks = store.bookmarks.filter( => {
//   //     return bookmarkValues.rating >= store.filterRating;
//     //  });
//   //}
//   console.log('`render` ran');
//   const bookmarksString = generateBookmarkListString(bookmarks);
 
//   // inserts HTML into the DOM
//   $('.js-bookmarks-list').html(bookmarksString);
// }

$(document).ready(function() {
  bookmarksList.render();
  bookmarksList.bindEventListeners();

  api.getBookmarks((bookmarks) => { 
    bookmarks.forEach((bookmark) => {
      store.addBookmark(bookmark);
      bookmarksList.render();
    });
  });
});

//test deleteBookmark
// api.deleteBookmark("cje8wp7id001j0kyagctz2793", () => {console.log('deleted!');});

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

