const APIURL = "https://api.github.com/users/"

const form = document.getElementById('form');
const main = document.getElementById('main');
const search = document.getElementById('search');

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username)
    crateUserCard(data)
    getRepos(username)
  } catch (error) {
    crateErrorCard("No profile with this username");
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created")
    addReposToCard(data);
  } catch (error) {
    crateErrorCard("Problem fetching repos");
  }
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');

  repos.slice(0, 10).forEach(repo => {
    const repoEl = document.createElement('a');
    repoEl.classList.add('repo');
    repoEl.href = repo.html_url;
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
}

function crateUserCard(data) {
  const cardHTML = `
    <div class="card">
      <div>
        <img
          src="${data.avatar_url}"
          alt="" class="avatar">
      </div>
      <div class="user-info">
        <h2>${data.name}</h2>
        <p>${data.bio}</p>
        <ul>
          <li>${data.followers} <strong>Followers</strong></li>
          <li>${data.following} <strong>Following</strong></li>
          <li>${data.public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos">
        </div>
      </div>
    </div>
  `;
  main.innerHTML = cardHTML;
}

function crateErrorCard(data) {
  const cardHTML = `
    <div class="card">
      <h1>${data}</h1>
    </div>
  `;
  main.innerHTML = cardHTML;
}


form.addEventListener('submit', (e) => {
  e.preventDefault()
  const user = search.value
  if (user) {
    getUser(user)
    search.value = ''
  }
})