const url = 'https://randomuser.me/api/?results=50'
const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
  const res = await fetch(url)
  const { results } = await res.json()
  result.innerHTML = ''
  results.forEach(user => listItems.push(createUser(user)))
  listItems.forEach(user => result.appendChild(user))
}

const createUser = (user) => {
  console.log(user);
  const li = document.createElement('li')
  li.innerHTML =
    `<img src="${user.picture.large}" alt="${user.name.first}" />
    <div class="user-info">
      <h4>${user.name.first} ${user.name.last}</h4>
      <p>${user.location.city}, ${user.location.country}</p>
    </div>`
  return li
}

const filterData = (searchTerm) => {
  listItems.forEach(item => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase()))
      item.classList.remove('hide')
    else
      item.classList.add('hide')

  })
}