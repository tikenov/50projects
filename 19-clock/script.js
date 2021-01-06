const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const button = document.querySelector(".toggle");
const html = document.querySelector("html");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

button.addEventListener("click", () => {
  html.classList.toggle("dark");
  button.innerHTML = html.classList.contains("dark") ? 'Dark mode' : 'Light mode';
});

let h_inc = 0;
let m_inc = 0;
let s_inc = 0;

function setClock() {
  const now = new Date();
  const month = monthList[now.getMonth()];
  const day = dayList[now.getDay()];
  const date = now.getDate();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  if (s == 0) {
    s_inc += 360;
    if (m == 0) {
      m_inc += 360;
      if (h == 0)
        h_inc += 360;
    }
  }

  const h_deg = (360 / 43200) * (3600 * h + 60 * m + s);
  const m_deg = (360 / 3600) * (60 * m + s);
  const s_deg = (360 / 60) * s;
  hourEl.style.transform = `translate(-50%, -100%) rotate(${h_deg + h_inc}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${m_deg + m_inc}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${s_deg + s_inc}deg)`;
  timeEl.innerHTML = `${h > 11 ? h - 12 : h}:${m < 10 ? '0' + m : m} ${h > 11 ? 'PM' : 'AM'}`;
  dateEl.innerHTML = `${day}, ${month} <span class="circle">${date}</span>`;

}

setClock();
setInterval(() => setClock(), 1000);