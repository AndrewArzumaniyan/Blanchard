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
    slidesPerView: 3,
    spaceBetween: 40,
    slidesToScroll: 1,
    slidesPerGroup: 3,
    slidesPerColumn: 2,
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
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
      el: '.swiper-pagination',
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
  });

  ymaps.ready(init);
  function init() {

    // Создание карты.
    var myMap = new ymaps.Map("map", {
      center: [55.75527037630038, 37.61168061256219],
      zoom: 14,
      controls: ['zoomControl', 'geolocationControl'],
    });

    // var myPlacemark = new ymaps.Placemark([55.75527037630038, 37.61168061256219], {}, {
    //   iconLayout: 'default#image',
    //   iconImageHref: 'img/icon.svg',
    //   iconImageSize: [30, 42],
    //   iconImageOffset: [-3, -42],
    // });

    // // Размещение геообъекта на карте.
    // myMap.geoObjects.add(myPlacemark);
  }
});