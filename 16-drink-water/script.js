const glassTop = document.querySelector('.glass-top');
const glassBottom = document.querySelector('.glass-bottom');
const glasses = document.querySelectorAll('.glasses .glass');
const remained = document.querySelector('.remained');
const percentage = document.querySelector('.percentage');
const goal = document.querySelector('.goal');

remained.innerText = glasses.length * 0.25 + 'L';
goal.innerText = glasses.length * 0.25;

glasses.forEach((glass, idx) => {
  glass.addEventListener('click', () => {
    const p = 100 * (idx + 1) / glasses.length;
    glassTop.style.height = (100 - p) + "%";
    glassBottom.style.height = p + "%";
    const current = Number.parseInt(percentage.innerHTML);
    const inc = (p - current) / 15;
    if (Math.abs(current - p) > 1) animatePercentage(current, p, inc, 15);
    else {
      remained.innerText = (Math.round((glasses.length * 0.25 - glasses.length * 0.25 * p / 100) * 100) / 100).toString() + 'L';
      percentage.innerText = (Math.round(p * 100) / 100).toString() + "%";
    }
    glasses.forEach((g, i) => {
      if (i <= idx) g.classList.add('full'); else g.classList.remove('full')
    });
  });
});


function animatePercentage(current, final, inc, count) {
  console.log(current, final, inc);
  remained.innerText = (Math.round((glasses.length * 0.25 - glasses.length * 0.25 * current / 100) * 100) / 100).toString() + 'L';
  percentage.innerText = (Math.round(current * 100) / 100).toString() + "%";
  if (Math.abs(final - current) < Math.abs(inc) || count == 0) {
    remained.innerText = (Math.round((glasses.length * 0.25 - glasses.length * 0.25 * final / 100) * 100) / 100).toString() + 'L';
    percentage.innerText = (Math.round(final * 100) / 100).toString() + "%";
  } else {
    setTimeout(() => { animatePercentage(current + inc, final, inc, count - 1) }, 10);
  }
}

