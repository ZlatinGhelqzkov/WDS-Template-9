const swiperTestimonials = new Swiper(".testimonials__swiper", {
  // Optional parameters
  loop: true,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: ".testimonials__pagination",
    renderBullet: function (index, className) {
      return '<span class="' + className + ' testimonials__bullet"> </span>';
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".testimonials__next",
    prevEl: ".testimonials__prev",
  },
});

const swiperRelatedItems = new Swiper(".related-items__swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 1.3,
  spaceBetween: 30,
  breakpoints:{
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: ".related-items__next",
    prevEl: ".related-items__prev",
  },
});
