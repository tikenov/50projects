const inc = document.getElementById('increase');
const dec = document.getElementById('decrease');
const value = document.getElementById('value');
const reset = document.getElementById('reset');
const colorEl = document.getElementById('color');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let color = '#000000'
let size = 20
let isPressed = false
let x = undefined
let y = undefined

colorEl.addEventListener('change', (e) => {
  color = e.target.value
})

inc.addEventListener('click', () => {
  size += 5
  if (size > 100) size = 100
  value.innerHTML = size;
})

dec.addEventListener('click', () => {
  size -= 5
  if (size < 5) size = 5
  value.innerHTML = size;
})

reset.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
});


canvas.addEventListener('mousedown', (e) => {
  isPressed = true
  x = e.offsetX
  y = e.offsetY
  drawCircle(x, y)
})

canvas.addEventListener('mouseup', (e) => {
  isPressed = false
  x = undefined
  y = undefined
})

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    let x2 = e.offsetX
    let y2 = e.offsetY

    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2
    y = y2
  }
})


function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size / 2, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.stroke();
}
