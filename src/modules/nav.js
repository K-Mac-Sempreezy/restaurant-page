// import { pageLoad } from './initial-load';
import { createMenu } from './menu';
import { createAbout } from './about';
import { resetPage } from './home';

const createNav = () => {
  
  const nav = document.createElement('div');
  nav.setAttribute('id', 'nav');

  const home = document.createElement('h4');
  home.textContent = 'home'.toUpperCase();
  home.classList.add('active');
  home.setAttribute('id', 'nav-home');
  home.addEventListener('click', resetPage);
  
  const menu = document.createElement('h4');
  menu.textContent = 'menu'.toUpperCase();
  menu.setAttribute('id', 'nav-menu');
  menu.addEventListener('click', createMenu);
  
  const about = document.createElement('h4');
  about.textContent = 'about'.toUpperCase();
  about.setAttribute('id', 'nav-about');
  about.addEventListener('click', createAbout)

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(about);

  return nav;
};


const updateNav = (e) => {
  const navHome = document.getElementById('nav-home');
  const navMenu = document.getElementById('nav-menu');
  const navAbout = document.getElementById('nav-about');

  if (e.target.id === 'nav-about') {
    navHome.classList.remove('active');
    navMenu.classList.remove('active');
    navAbout.classList.add('active');
  } else if (e.target.id === 'nav-menu') {
    navHome.classList.remove('active');
    navAbout.classList.remove('active');
    navMenu.classList.add('active');
  } else if (e.target.id === 'nav-home') {
    navAbout.classList.remove('active');
    navMenu.classList.remove('active');
    navHome.classList.add('active');
  }
};

export { 
  createNav, 
  updateNav 
};