const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
const buttons = document.querySelector('.buttons')

sounds.forEach(sound => {
  const button = document.createElement('button')
  button.classList.add('btn')
  button.innerText = sound

  button.addEventListener('click', () => {
    stopSounds();
    document.getElementById(sound).play()
  })

  buttons.appendChild(button)
})

const stopSounds = () => {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound)
    audio.pause()
    audio.currentTime = 0
  });
}