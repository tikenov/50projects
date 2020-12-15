const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);


function blurring() {
  load++;
  if (load > 99) clearInterval(int);
  loadText.innerText = `${load}%`;
  loadText.style.opacity = `${load}%`;
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (n, inMin, inMax, outMin, outMax) => {
  return ((n - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}