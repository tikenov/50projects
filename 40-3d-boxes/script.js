const btn = document.getElementById("btn");
const boxes = document.getElementById("boxes");

(function createBoxes() {
  for (let i = 0; i < 4; i++)
    for (let j = 0; j < 4; j++) {
      const el = document.createElement('div')
      el.classList.add('box')
      el.style.backgroundPosition = `${-125 * j}px ${-125 * i}px`
      boxes.appendChild(el)
    }
})()

btn.addEventListener('click', () => boxes.classList.toggle('big'))