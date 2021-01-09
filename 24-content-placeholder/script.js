const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");


function getData() {
  title.innerHTML = "Lorem ipsum dolor sit amet."
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1516571855259-d5988a8ff76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="">'
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, doloremque.'
  profile_img.innerHTML = '<img  src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY256_CR9,0,172,256_AL_.jpg" alt="">';
  date.innerHTML = "Oct 08, 2020"
  name.innerHTML = "Leonardo DiCaprio"
  animated_bgs.forEach(item => item.classList.remove('animated-bg'))
  animated_bg_texts.forEach(item => item.classList.remove('animated-bg-text'));
}


setTimeout(getData, 2000);