const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target')
    const inc = target / 200
    const c = +counter.innerText

    if (c < target) {
      counter.innerText = Math.ceil(c + inc)
      setTimeout(updateCounter, 1)
    } else
      counter.innerText = target

  }
  updateCounter()
});