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

  $('.events__btn').click(function (event) {
    $('.events__inner').toggleClass('active');
  });
});