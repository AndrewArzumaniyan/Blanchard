document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.header__select');
  elements.forEach(function (element) {
    const choices = new Choices(element, {
      searchEnabled: false,
      placeholder: true,
      itemSelectText: '',
    });
  });
});
