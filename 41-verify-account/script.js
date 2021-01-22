const digits = document.querySelectorAll('.code')
let j = 0;
digits.forEach((digit, i) => digit.addEventListener('keydown', (e) => {
  e.preventDefault()
  console.log(e.key);
  if (e.key >= 0 && e.key <= 9) {
    e.target.value = e.key
    if (++j > digits.length - 1) j = digits.length - 1
    digits[j].focus()
  } else if (e.key == 'Backspace') {
    digits[j].value = '';
    if (--j < 0) j = 0
    digits[j].focus()
  }
}))

digits.forEach((digit, i) => digit.addEventListener('click', (e) => {
  e.preventDefault()
  digits[j].focus()
}))
