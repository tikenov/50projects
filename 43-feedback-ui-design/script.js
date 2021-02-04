const ratingsContainer = document.querySelector('.ratings-container')
const send = document.getElementById('send')
const ratings = document.querySelectorAll('.rating')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('rating')) makeActive(e.target)
  if (e.target.parentNode.classList.contains('rating')) makeActive(e.target.parentNode)
})

send.addEventListener('click', () => {
  panel.innerHTML = `
  <i class="fas fa-heart"></i>
  <strong>Thank You!</strong>
  <br>
  <strong>Feedback ${selectedRating}</strong>
  <p>We'll use your feedback to improve our customer service</p>
  `
})

function makeActive(e) {
  ratings.forEach(rating => rating.classList.remove('active'))
  e.classList.add('active')
  selectedRating = e.querySelector('small').innerText
}