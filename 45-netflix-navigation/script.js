const btnOpen = document.querySelector('.open-btn')
const btnClose = document.querySelector('.close-btn')
const navs = document.querySelectorAll('.nav')

btnClose.addEventListener('click', () => {
  navs.forEach(nav => nav.classList.remove('visible'))
})
btnOpen.addEventListener('click', () => {
  navs.forEach(nav => nav.classList.add('visible'))
})