const galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 16,
  slidesPerView: 4,
  loop: false,
  freeMode: true,
  loopedSlides: 5,
  watchSlidesProgress: true,
})

const galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  loop: true,
  loopedSlides: 5,
  navigation: {
    nextEl: '.right-arow',
    prevEl: '.left-arow',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
})
