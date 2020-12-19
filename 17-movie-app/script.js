const API_KEY = "41e58cdcdd2c942d073c0a1bfed857b3";
const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + API_KEY;
const API_SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&query=";
const IMG_PATH = "https://image.tmdb.org/t/p/w300"

const main = document.getElementById('main')
const search = document.getElementById('search')
const form = document.getElementById('form')

getMovies(API_URL);

form.addEventListener('submit', (event) => {
  const { value } = search;
  if (value && value !== '') {
    search.value = ''
    getMovies(API_SEARCH_URL + value)
  } else window.location.reload()
  event.preventDefault()
})


async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  const getColor = (val) => {
    if (val < 5) return "red"
    if (val < 7) return "orange"
    return "green"
  }

  main.innerHTML = data.results.reduce((a, movie) =>
    a + `
    <div class="movie">
      <img
        src="${IMG_PATH + movie.poster_path}"
        alt="">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <span class="${getColor(movie.vote_average)}">${movie.vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${movie.overview}
      </div>
    </div>`
    , "");
}
