var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//初期化
const galleryThumbs = new Swiper('.tab-menu', {
    spaceBetween: 10,
    slidesPerView: 'auto',
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slideActiveClass: 'swiper-slide-active'
  });
  galleryThumbs.on('tap', function () {
    const current = galleryTop.activeIndex;
    galleryThumbs.slideTo(current, 500, true);
  });
  const galleryTop = new Swiper('.tab-contents', {
    autoHeight: true,
    thumbs: {
      swiper: galleryThumbs
    }
});
