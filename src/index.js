import spitNum from './card';
import about from './about';

const moreBtn = document.querySelector('.loader');
const ul = document.querySelector('.navbar-ul');
const content = document.getElementById('content');
const home = document.getElementById('home');
const abt = document.getElementById('abt');

moreBtn.addEventListener('click', () => {
  spitNum(5);
});

// loads about 5 cards when the dom loads
document.addEventListener('DOMContentLoaded', () => {
  spitNum(5);
  moreBtn.classList.remove('d-none');
});

ul.addEventListener('click', (e) => {
  if (e.srcElement.id === 'abt') {
    content.classList.remove('grid-container');
    e.target.parentElement.classList.add('active');
    content.innerHTML = '';
    home.parentElement.classList.remove('active');
    moreBtn.classList.add('d-none');
    about(1);
  } else if (e.srcElement.id === 'home') {
    content.classList.add('grid-container');
    content.innerHTML = '';
    moreBtn.classList.remove('d-none');
    home.parentElement.classList.add('active');
    abt.parentElement.classList.remove('active');
    spitNum(5);
  }
});