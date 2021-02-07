const url = 'https://source.unsplash.com/random/'
const container = document.querySelector('.container')

const rows = 10

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');
  img.src = `${url}30${i % 10}x30${i / 10}`;
  container.appendChild(img)
}