document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.header__select');
  elements.forEach(function (element) {
    const choices = new Choices(element, {
      searchEnabled: false,
      placeholder: true,
      itemSelectText: 'ВЫбрать',
    });
  });

  const element = document.querySelector('.gallery__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: 'ВЫбрать',
  });

  new Swiper('.hero__slider-container', {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 2000,
    simulateTouch: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  });

  new Swiper('.gallery__slider-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerColumn: 2,
    slidesToScroll: 1,
    slidesPerGroup: 3,
    navigation: {
      nextEl: '.gallery__slider-button-next',
      prevEl: '.gallery__slider-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  });
});
