const MOBILE_WIDTH = 580;

const sliderParams = {
  paginationClassName: 'events-pagination',
  cardsContainerName: 'events__js-slider',
  cardsWrapName: 'events__js-slides-wrap',
  card: 'events__slider-slide'
};

function getWindowWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.body.clientWidth,
    document.documentElement.clientWidth
  );
}

function activateEventsSlider(params) {
  const pagination = document.createElement("div");
  pagination.classList.add(params.paginationClassName);
  params.cardsContainer.append(pagination);

  params.cardsContainer.classList.add("swiper-container");
  params.cardsWrap.classList.add("swiper-wrapper");


  params.cardsSlider = new Swiper(`.${params.cardsContainerName}`, {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: `.${params.cardsContainerName} .${params.paginationClassName}`
    },

    on: {
      beforeInit() {
        document
          .querySelectorAll(`.${params.card}`)
          .forEach((el) => {
            el.classList.add("swiper-slide");
          });
      },

      beforeDestroy() {
        this.slides.forEach((el) => {
          el.classList.remove("swiper-slide");
          el.removeAttribute("role");
          el.removeAttribute("aria-label");
        });

        this.pagination.el.remove();
      }
    }
  });
}

function destroyEventsSlider(params) {
  params.cardsSlider.destroy();
  params.cardsContainer.classList.remove("swiper-container");
  params.cardsWrap.classList.remove("swiper-wrapper");
  params.cardsWrap.removeAttribute("aria-live");
  params.cardsWrap.removeAttribute("id");
}

function checkWindowWidth(params) {
  const currentWidth = getWindowWidth();
  params.cardsContainer = document.querySelector(`.${params.cardsContainerName}`);
  params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

  if (currentWidth <= MOBILE_WIDTH && (!params.cardsSlider || params.cardsSlider.destroyed)) {
    activateEventsSlider(params);
  } else if (
    currentWidth >= MOBILE_WIDTH &&
    params.cardsSlider
  ) {
    destroyEventsSlider(params);
  }
}

checkWindowWidth(sliderParams);

window.addEventListener('resize', function () {
  checkWindowWidth(sliderParams);
})

const eventsBtn = document.querySelector('.events__button');

eventsBtn.addEventListener('click', () => {
  $('.more').css('display', 'block');
  $('.events__button').css('display', 'none');
});


const sliderParamsTwo = {
  // paginationClassName: 'slider-pagination',
  cardsContainerNameTwo: 'js-slider',
  cardsWrapNameTwo: 'js-slides-wrap',
  card: 'slide'
};
function activateEventsSliderTwo(params) {
  // const pagination = document.createElement("div");
  // pagination.classList.add(params.paginationClassName);
  // params.cardsContainer.append(pagination);

  params.cardsContainer.classList.add("swiper-container");
  params.cardsWrap.classList.add("swiper-wrapper");


  params.cardsSlider = new Swiper(`.${params.cardsContainerNameTwo}`, {
    slidesPerView: 2,
    spaceBetween: 40,
    pagination: {
      el: '.slider-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.slider-btn-next',
      prevEl: '.slider-btn-prev',
    },

    breakpoints: {
      1025: {
        slidesPerView: 3,
      },
    },

    on: {
      beforeInit() {
        document
          .querySelectorAll(`.${params.card}`)
          .forEach((el) => {
            el.classList.add("swiper-slide");
          });
      },

      beforeDestroy() {
        this.slides.forEach((el) => {
          el.classList.remove("swiper-slide");
          el.removeAttribute("role");
          el.removeAttribute("aria-label");
        });

        this.pagination.el.remove();
      }
    }
  });
}
function destroyEventsSliderTwo(params) {
  params.cardsSlider.destroy();
  params.cardsContainer.classList.remove("swiper-container");
  params.cardsWrap.classList.remove("swiper-wrapper");
  params.cardsWrap.removeAttribute("aria-live");
  params.cardsWrap.removeAttribute("id");
}

function checkWindowWidthTwo(params) {
  const currentWidth = getWindowWidth();
  params.cardsContainer = document.querySelector(`.${params.cardsContainerNameTwo}`);
  params.cardsWrap = document.querySelector(`.${params.cardsWrapNameTwo}`);

  if (currentWidth > MOBILE_WIDTH && (!params.cardsSlider || params.cardsSlider.destroyed)) {
    activateEventsSliderTwo(params);
  } else if (
    currentWidth <= MOBILE_WIDTH &&
    params.cardsSlider
  ) {
    destroyEventsSliderTwo(params);
  }
}

checkWindowWidthTwo(sliderParamsTwo);

window.addEventListener('resize', function () {
  checkWindowWidthTwo(sliderParamsTwo);
})



const btn = document.querySelector('.publications__subtitle');
const labels = document.querySelectorAll('.publications__check');
const inputs = document.querySelectorAll('.checkbox');
const items = document.querySelectorAll('.publications__item');

btn.addEventListener('click', function () {
  btn.classList.toggle('publications__subtitle-active')
  labels.forEach(function (label) {
    label.classList.toggle('publications__check-active');
    if (label.querySelector('.checkbox').checked) {
      label.classList.add('publications__check-active');
      label.querySelector('.checkbox').disabled = true;
      label.classList.add('checked')
    }
    label.querySelector('.delete-button').addEventListener('click', function () {
      if (label.querySelector('.checkbox').checked) {
        label.classList.remove('publications__check-active');
        label.querySelector('.checkbox').disabled = false;
        label.classList.remove('checked')
      }
    })
  })
})
