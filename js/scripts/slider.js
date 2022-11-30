var swiper = new Swiper('.slide-characters', {
  slidesPerView: 4.5,
  spaceBetween: 19,
  freeMode: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    360: {
      slidesPerView: 1.4,
    },
    768: {
      slidesPerView: 2.2,
    },
    991: {
      slidesPerView: 2.8,
    },
    1150: {
      slidesPerView: 3.2,
    },
    1536: {
      slidesPerView: 4,
    },
  },
});
