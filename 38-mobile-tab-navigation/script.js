const imgs = document.querySelectorAll('.content')
const navs = document.querySelectorAll('nav ul li')

navs.forEach((nav, index) =>
  nav.addEventListener('click', () => {
    imgs.forEach(item => item.classList.remove('show'))
    navs.forEach(item => item.classList.remove('active'))
    imgs[index].classList.add('show')
    nav.classList.add('active')
  })
)