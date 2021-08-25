$(document).ready(function () {
  $('.catalog__accordion-title').click(function (event) {
    if ($('.catalog__accordion').hasClass('only-one')) {
      $('.catalog__accordion-title').not($(this)).removeClass('active');
      $('.catalog__accordion-wrapper').not($(this).next()).slideUp('active');
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});