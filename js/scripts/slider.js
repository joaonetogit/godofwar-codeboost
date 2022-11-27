var swiper = new Swiper('.slide-characters', {
  slidesPerView: 4.5,
  spaceBetween: 19,
  freeMode: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3.2,
    },
  },
});
