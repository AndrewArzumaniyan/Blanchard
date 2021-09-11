$(document).ready(function () {
  $('.catalog__accordion-title--active').toggleClass('active').next().slideDown(300);
  $('.catalog__accordion-title').click(function (event) {
    $('.catalog__accordion-title').removeClass('active');
    if ($('.catalog__accordion').hasClass('only-one')) {
      $('.catalog__accordion-title').not($(this)).removeClass('active');
      $('.catalog__accordion-wrapper').not($(this).next()).slideUp('active');
    }
    $(this).toggleClass('active').next().slideDown(300);
  });

  $('.catalog').on('click', '.catalog__points a', function () {
    $('.catalog__points a').removeClass('is-active');
    $(this).addClass('is-active');
    let href = $(this).attr('href');
    console.log(href);
    $('.catalog__inner').removeClass('is-active').removeClass('in');
    $(href).addClass('is-active');;
    function fade() {
      $(href).addClass('in')
    }
    setTimeout(fade, 300);
    return false;
  });

  $('.catalog').on('click', '.catalog__accordion-item a', function () {
    $('.catalog__accordion-item a').removeClass('active');
    let link = $(this);
    $(this).addClass('active');
    let href = $(this).attr('href');
    console.log(href);
    $('.catalog__info').removeClass('active').removeClass('in');
    $(href).addClass('active');;
    function fade() {
      $(href).addClass('in')
    }
    setTimeout(fade, 300);
    setTimeout(function () {
      let elementClick = link.attr('href');
      let destination = $(elementClick).offset().top;
      $('html, body').animate({ scrollTop: destination }, 600);
    }, 200)
    return false;
  });

  $('.events__btn').click(function (event) {
    $('.events__inner').toggleClass('active');
  });
});