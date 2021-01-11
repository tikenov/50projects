const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = "Take me to church, I'll worship like a dog at the shrine of your lies"

textEl.innerText = "";
let index = 0
let speed = 300 / speedEl.value

writeText()

function writeText() {
  if (index < text.length) {
    textEl.innerHTML += text.charAt(index++);
    if (textEl.innerHTML.length > 20) textEl.innerHTML = textEl.innerHTML.substring(1)
  } else {
    textEl.innerText = "";
    index = 0
  }
  setTimeout(() => writeText(), speed)
}

speedEl.addEventListener('input', e => speed = 300 / e.target.value)