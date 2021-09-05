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

function readMore() {
  $('.more').css('display', 'block');
  $('.events__button').css('display', 'none');
}
