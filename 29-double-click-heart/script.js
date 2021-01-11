const times = document.getElementById('times')
const loveMe = document.querySelector('.loveMe')

let prevTime = 0
let count = 0

loveMe.addEventListener('click', (e) => {
  const time = new Date().getTime()
  if (time - prevTime < 250) {
    createHeart(e)
    times.innerHTML = ++count;
    prevTime = 0
  } else {
    prevTime = time
  }
})

const createHeart = (e) => {
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')
  heart.style.top = `${e.clientY - e.target.offsetTop}px`
  heart.style.left = `${e.clientX - e.target.offsetLeft}px`
  loveMe.appendChild(heart)
  setTimeout(() => heart.remove(), 1000)
}