const left = document.getElementById("left")
const right = document.getElementById("right")
const slides = document.querySelectorAll(".slide")
const body = document.body;

let activeSlide = 0

function setActiveSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[activeSlide].classList.add('active')
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}


left.addEventListener('click', () => {
  activeSlide--
  if (activeSlide < 0) activeSlide = slides.length - 1
  setActiveSlide()
});

right.addEventListener('click', () => {
  activeSlide++
  if (activeSlide > slides.length - 1) activeSlide = 0
  setActiveSlide()
});

window.addEventListener('keydown', (event) => {
  if (event.key == "ArrowLeft")
    left.click()
  if (event.key == "ArrowRight")
    right.click()
})