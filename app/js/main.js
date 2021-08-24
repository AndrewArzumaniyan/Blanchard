document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.header__select');
  elements.forEach(function (element) {
    const choices = new Choices(element, {
      searchEnabled: false,
      placeholder: true,
      itemSelectText: '',
    });
  });

  new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      //pause 
      delay: 3000,
      //Finish on last slide
      stopOnLastSlide: false,
      //Turn of after using
      disableOnInteraction: true,
    },
    effect: 'fade',

    //additional fade
    fadeEffect: {
      //Parallel
      //change the opacity
      crossFade: true,
    },
    speed: 2500,
  });
});
