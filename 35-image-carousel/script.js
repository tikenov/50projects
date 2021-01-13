const left = document.getElementById('left')
const right = document.getElementById('right')
const imgs = document.getElementById('imgs')
const numsOfImgs = imgs.querySelectorAll('img').length

let current = 0
let int = setInterval(run, 2000)

function run() {
  current++
  changeImage()
}

function resetInterval() {
  clearInterval(int)
  int = setInterval(run, 2000)
}

function changeImage() {
  if (current < 0) current = numsOfImgs - 1
  if (current >= numsOfImgs) current = 0
  imgs.style.transform = `translateX(-${current * 500}px)`
}

right.addEventListener('click', () => {
  resetInterval()
  current++
  changeImage()
})

left.addEventListener('click', () => {
  resetInterval()
  current--
  changeImage()
})

run()