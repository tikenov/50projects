const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach(button =>
  button.addEventListener('click', function () {
    this.parentNode.classList.toggle('active')
  })
);