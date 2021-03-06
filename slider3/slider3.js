const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

/*   // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  }, */

/*   // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, */

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  centerInsufficientSlides: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: 2,
  spaceBetween: 0,
  height: 1500,
});
