const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let current = 1;

next.addEventListener('click', () => {
  if (current < circles.length) {
    current++;
    update(true);
  }
});

prev.addEventListener('click', () => {
  if (current > 1) {
    current--;
    update(false);
  }
});

const update = (add) => {
  if (add) circles[current - 1].classList.add('active');
  else circles[current].classList.remove('active');

  if (current == 1)
    prev.disabled = true;
  else if (current == circles.length)
    next.disabled = true;
  else {
    next.disabled = false;
    prev.disabled = false;
  }

  progress.style.width = (current - 1) * (100 / (circles.length - 1)) + "%";
}