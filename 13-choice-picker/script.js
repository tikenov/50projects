const textarea = document.querySelector('.textarea')
const tagsEl = document.querySelector('.tags')

textarea.addEventListener('keyup', function (event) {
  createTags(this.value)
  if (event.key === 'Enter') {
    setTimeout(() => this.value = '', 10)
    randomSelect()
  }
});



function createTags(text) {
  const tags = text.split(',').map(tag => tag.trim()).filter(tag => tag != '')
  tagsEl.innerHTML = ''

  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerHTML = tag
    tagsEl.appendChild(tagEl)
  });
};

function randomSelect() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => unHighlightTag(randomTag), 100);
  }, 100);
  setTimeout(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    clearInterval(interval);
  }, times * 100);
}

function pickRandomTag() {
  const tags = tagsEl.children;
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}