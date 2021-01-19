const POKE_COUNT = 100;
const container = document.getElementById('poke-container');

const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
}

const fetchPokes = async () => {
  for (let i = 1; i <= POKE_COUNT; i++)
    await fetchPoke(i)
}

const fetchPoke = async (i) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
  const data = await response.json();
  appendPoke(data);
}

const appendPoke = (pokemon) => {
  const el = document.createElement('div');
  el.classList.add('pokemon')
  el.style.background = colors[pokemon.types[0].type.name];
  el.innerHTML = `
  <div class="img-container"">
    <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="">
  </div>
  <div class="info">
    <span class="number">#${(pokemon.id.toString()).padStart(3, '0')}</span>
    <h3 class="name">${pokemon.name}</h3>
    <small class="type">Type: <span>${pokemon.types[0].type.name}</span></small>
  </div>`
  container.appendChild(el);
}

fetchPokes();