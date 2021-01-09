const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
  if (direction == "up") {
    activeSlideIndex++
    if (activeSlideIndex >= slidesLength) activeSlideIndex = 0
  } else {
    activeSlideIndex--
    if (activeSlideIndex < 0) activeSlideIndex = slidesLength - 1
  }
  setPosition()
}

window.addEventListener('resize', () => {
  setPosition()
});

const setPosition = () => {
  const sliderHeight = sliderContainer.clientHeight;
  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}
