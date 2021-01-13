const nums = document.querySelectorAll(".nums span")
const counter = document.querySelector(".counter")
const final = document.querySelector(".final")
const replay = document.getElementById("replay")

replay.addEventListener('click', () => {
  nums.forEach(num => num.classList.value = "")
  nums[0].classList.add('in')
  counter.classList.remove('hide')
  final.classList.remove('show')
  countdown()
})

function countdown() {
  nums.forEach(num => {
    num.addEventListener('animationend', (e) => {
      if (num.nextElementSibling) {
        if (e.animationName == 'goIn') {
          num.classList.add('out')
          num.classList.remove('in')
        } else num.nextElementSibling.classList.add('in')
      } else {
        counter.classList.add('hide')
        final.classList.add('show')
      }
    })
  })
}

countdown()