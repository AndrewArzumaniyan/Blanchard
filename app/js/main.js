document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.header__select');
  elements.forEach(function (element) {
    const choices = new Choices(element, {
      searchEnabled: false,
      placeholder: true,
      itemSelectText: 'ВЫбрать',
    });
  });

  const swiper = new Swiper('.swiper-container', {
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
});
