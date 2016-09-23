$(document).ready( () => {
  const wow = new WOW(
   {
     boxClass:     'wow',      // animated element css class (default is wow)
     animateClass: 'animated', // animation css class (default is animated)
     offset:       2,          // distance to the element when triggering the animation (default is 0)
     mobile:       false,       // trigger animations on mobile devices (default is true)
     live:         true,       // act on asynchronously loaded content (default is true)
     callback:     function(box) {
       // the callback is fired every time an animation is started
       // the argument that is passed in is the DOM node being animated
     },
     scrollContainer: null // optional scroll container selector, otherwise use window
   }
 ); 
 wow.init();

  //Event handlers
  $('.nav-about').on('click', () => {
    $.smoothScroll({
      scrollTarget: '.content-section-a'
    })
  })
  $('.nav-music').on('click', () => {
    $.smoothScroll({
      scrollTarget: '.content-section-music'
    })
  })
  $('.nav-contact').on('click', () => {
    $.smoothScroll({
      scrollTarget: '.content-section-c'
    })
  })



});
