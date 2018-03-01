'use strict'; 
/* global api, $ */

const store = {
  bookmarks: [
    {
      id: 'cje8rv83o000w0kyajopapccg',
      title: 'Great Western Power Company',
      url: 'https://touchstoneclimbing.com/gwpower-co/',
      desc: 'Located in the heart of Uptown Oakland, Great Western Power Company offers a comprehensive range of fitness classes and programs including yoga, TRX, core conditioning, Boot Camp, and Cardio Boxing. We are also the home of CrossFit V16, Oakland’s grittiest and most exciting CrossFit affiliate. With all of those fitness options, we almost forgot to mention our over 11,000 square feet of world-class rock climbing and bouldering! So if you\'ve been looking for a vibrant community where your fitness and adventure goals come together as one, look no further than GWPC!',
      rating: 5,
      expanded: false
    },
    {
      id: 'cje8rvffn000x0kyaw1ms4m62',
      title: 'Great Western Power Company',
      url: 'https://touchstoneclimbing.com/gwpower-co/',
      desc: 'Located in the heart of Uptown Oakland, Great Western Power Company offers a comprehensive range of fitness classes and programs including yoga, TRX, core conditioning, Boot Camp, and Cardio Boxing. We are also the home of CrossFit V16, Oakland’s grittiest and most exciting CrossFit affiliate. With all of those fitness options, we almost forgot to mention our over 11,000 square feet of world-class rock climbing and bouldering! So if you\'ve been looking for a vibrant community where your fitness and adventure goals come together as one, look no further than GWPC!',
      rating: 4,
      expanded: false
    }
  ],
  adding: false,
  rating: 1
};

$(document).ready(function() {
  
//  api.getBookmarks((bookmarks) => { 
//    bookamarks.forEach((bookmark) => {
//     store.addBookmark(bookmark));
//     bookmarksList.render();
//  });
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

