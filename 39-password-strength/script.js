const bg = document.getElementById('background')
const password = document.getElementById('password')

password.addEventListener('input', (e) => {
  const val = 20 - e.target.value.length * 2
  bg.style.filter = `blur(${val}px)`
})