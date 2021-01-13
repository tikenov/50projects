const generate = document.getElementById('generate')
const clipboard = document.getElementById('clipboard')
const result = document.getElementById('result')

const length = document.getElementById('length')
const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const symbols = document.getElementById('symbols')
const numbers = document.getElementById('numbers')

generate.addEventListener('click', () => {
  const password = generatePassword(
    uppercase.checked,
    lowercase.checked,
    numbers.checked,
    symbols.checked,
  )
  result.innerText = password
})

clipboard.addEventListener('click', () => {
  let range = document.createRange();
  range.selectNode(document.getElementById("result"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
})

function generatePassword(upper, lower, number, symbol) {
  const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(item => Object.values(item)[0])
  const typesCount = upper + lower + number + symbol
  let result = ""
  let i = 0;
  while (result.length < length.value) {
    if (i == typesCount) i = 0;
    result += rand[Object.keys(typesArr[i])[0]]();
    i++;
  }
  return result.split('').sort(() => Math.random() - 0.5).join('')
}

const rand = {
  upper: getRandomUpper,
  lower: getRandomLower,
  symbol: getRandomSymbol,
  number: getRandomNumber,
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol() {
  const s = `!@#$%^&*(){}[]=<>/,.`;
  return s[Math.floor(Math.random() * s.length)];
}