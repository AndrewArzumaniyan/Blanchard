const { default: JustValidate } = require("just-validate");

document.addEventListener('DOMContentLoaded', () => {
  new JustValidate('.contacts__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30,
      },
      tel: {
        required: true,

      }
    }
  });
});