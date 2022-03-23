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


  const element = document.querySelector('.js-gallery-choices');
  const choices = new Choices(element, {
    shouldSort: false,
    searchEnabled: false,
    itemSelectText: 'Выбрать',
    position: 'bottom',

    classNames: {
      containerOuter: 'filter-choices',
      containerInner: 'filter-choices__inner',
      input: 'filter-choices__input',
      inputCloned: 'filter-choices__input--cloned',
      list: 'filter-choices__list',
      listItems: 'filter-choices__list--multiple',
      listSingle: 'filter-choices__list--single',
      listDropdown: 'filter-choices__list--dropdown',
      item: 'filter-choices__item',
      itemSelectable: 'filter-choices__item--selectable',
      itemDisabled: 'filter-choices__item--disabled',
      itemChoice: 'filter-choices__item--choice',
      placeholder: 'filter-choices__placeholder',
      group: 'filter-choices__group',
      groupHeading: 'filter-choices__heading',
      button: 'filter-choices__button',
      activeState: 'is-active',
      focusState: 'is-focused',
      openState: 'is-open',
      disabledState: 'is-disabled',
      highlightedState: 'is-highlighted',
      selectedState: 'is-selected',
      flippedState: 'is-flipped',
      loadingState: 'is-loading',
      noResults: 'has-no-results',
      noChoices: 'has-no-choices'
    },
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

  new Swiper('.projects__slider-container', {
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
      nextEl: '.projects-btn-next',
      prevEl: '.projects-btn-prev',
    },
    breakpoints: {
      441: {
        slidesPerView: 2,
        spaceBetween: 30
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 40
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

  burgerButton.addEventListener('click', function () {
    burgerButton.classList.toggle('burger-active');
    burgerContent.classList.toggle('navbar-active');
    bodyLock.classList.toggle('lock');
  });
  const searchBtn = document.querySelector('.header-top__search-btn');
  const cancelBtn = document.querySelector('.header-top__cancel-btn');
  const searchBox = document.querySelector('.header-top__search-box');
  const searchInput = document.querySelector('.header-top__input');
  const headerRow = document.querySelector('.header__row');

  searchBtn.onclick = () => {
    searchBox.classList.add('active');
    searchBtn.classList.add('active');
    searchInput.classList.add('active');
    cancelBtn.classList.add('active');
    headerRow.classList.add('none');
  }
  cancelBtn.onclick = () => {
    searchBox.classList.remove('active');
    searchBtn.classList.remove('active');
    searchInput.classList.remove('active');
    cancelBtn.classList.remove('active');
    setTimeout(function () {
      headerRow.classList.remove('none');
    }, 300);
  }

  // !Modals
  const btns = document.querySelectorAll('.gallery__slider-slide');
  const modalOverlay = document.querySelector('.gallery__modals-overlay');
  const modals = document.querySelectorAll('.gallery__modals-modal');

  function disableScroll () {
    let pagePosition = window.scrollY;
    document.body.classList.add('disable-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px';
  }
  
  function enableScroll () {
    let pagePosition = parseInt(document.body.dataset.position,10);
    document.body.style.top = 'auto';
    document.body.classList.remove('disable-scroll');
    window.scroll({top: pagePosition, left: 0});
    document.body.removeAttribute('data-position');
  }

  btns.forEach((el) => {
    el.addEventListener('click', (e) => {
      disableScroll();
      // e.currentTarget.style.pointerEvents = 'none';

      let path = e.currentTarget.getAttribute('data-modal-path');

      modals.forEach((el) => {
        el.classList.remove('gallery__modals-modal--visible');
      });

      document.querySelector(`[data-modal-target="${path}"]`).classList.add('gallery__modals-modal--visible');
      modalOverlay.classList.add('gallery__modals-overlay--visible');
    });
  });

  modalOverlay.addEventListener('click', (e) => {
    if(e.target == modalOverlay) {
      // e.currentTarget.style.pointerEvents = 'none';
      // btnOff.style.pointerEvents = 'auto';
      modalOverlay.classList.remove('gallery__modals-overlay--visible');
      modals.forEach((el) => {
        el.classList.remove('gallery__modals-modal--visible');
      });
      enableScroll();
    }
  });
});