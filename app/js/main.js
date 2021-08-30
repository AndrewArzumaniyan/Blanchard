document.addEventListener('DOMContentLoaded', function () {
  const anchors = document.querySelectorAll('a[href^="#"]');

  anchors.forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockId = anchor.getAttribute('href')
      document.querySelector('' + blockId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    })
  });

  //!Header__under
  const params = {
    btnClassName: "main__item-btn",
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
  }

  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(params.disabledClassName, params.activeClassName);
      evt.target.removeEventListener("animationend", onDisable);
    }
  }

  function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

      if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.path;
        const drop = document.querySelector(`[data-target="${path}"]`);

        btn.classList.toggle(params.activeClassName);

        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
  }

  setMenuListener();
  //!


  const element = document.querySelector('.gallery__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: 'Выбрать',
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
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 40,
    pagination: {
      el: '.gallery .slider-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
    breakpoints: {
      441: {
        slidesPerView: 2,
        grid: {
          rows: 2
        },
        spaceBetween: 30
      },

      1200: {
        slidesPerView: 3,
        grid: {
          rows: 2
        },
        spaceBetween: 50
      }
    },
  });

  new Swiper('.publications__slider-container', {
    slidesPerView: 3,
    spaceBetween: 40,
    slidesToScroll: 1,
    slidesPerGroup: 3,
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
    pagination: {
      el: '.slider-pagination',
      type: 'fraction',
    },
  });



  tippy('#tooltip1', {
    content: 'Пример современных тенденций - современная методология разработки ',
    theme: 'background',
  });
  tippy('#tooltip2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  ',
    theme: 'background',
  });
  tippy('#tooltip3', {
    content: 'В стремлении повысить качество ',
    theme: 'background',
  });

  new Swiper('.projects__slider-container', {
    slidesPerView: 3,
    navigation: {
      nextEl: '.projects__slider-btn-next',
      prevEl: '.projects__slider-btn-prev',
    },
    breakpoints: {
      319: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      800: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1442: {
        slidesPerView: 3,
      }
    },
  });

  ymaps.ready(init);
  function init() {
    const myMap = new ymaps.Map(
      "map",
      {
        center: [55.75846806898367, 37.60108849999989],
        zoom: 14,
        controls: ['geolocationControl', 'zoomControl']
      },
      {
        suppressMapOpenBlock: true,
        geolocationControlSize: "large",
        geolocationControlPosition: { top: "330px", right: "20px" },
        geolocationControlFloat: 'none',
        zoomControlSize: "small",
        zoomControlFloat: "none",
        zoomControlPosition: { top: "250px", right: "20px" }
      }
    );

    const myPlacemark = new ymaps.Placemark(
      [55.75846806898367, 37.60108849999989],
      // {
      //   iconLayout: "default#image",
      //   iconImageHref: "img/map-dot.svg",
      //   iconImageSize: [20, 20],
      //   iconImageOffset: [-10, -20],
      // }
    );

    myMap.geoObjects.add(myPlacemark);
  }

  // !Header-burger
  let burgerButton = document.querySelector('.header__burger');
  let burgerContent = document.querySelector('.header__navbar');
  let bodyLock = document.querySelector('body');
  let searchButton = document.querySelector('.burger__search-link');
  let searchContent = document.querySelector('.header__search-burger');
  let main = document.querySelector('.main');

  burgerButton.addEventListener('click', function () {
    burgerButton.classList.toggle('burger-active');
    burgerContent.classList.toggle('navbar-active');
    bodyLock.classList.toggle('lock');
  });

  searchButton.addEventListener('click', function () {
    searchContent.classList.add('search-active');
    document.querySelector('.burger__search-input').classList.add('search-active');
  });
});