const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
]

const types = ['info', 'error', 'success']

button.addEventListener('click', () => {
  createNotification();
});

function createNotification(message = null, type = null) {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.classList.add(type ? type : getRandomType());
  toast.innerText = message ? messsage : getRandomMessage();
  toasts.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * 4)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * 3)];
}