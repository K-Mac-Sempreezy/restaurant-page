import '/dist/style.css';
import { createNav } from './nav';
import { createMenu } from './menu';
import { createAbout } from './about';
import { resetPage } from './home';


const createHeader = () => {
  const header = document.createElement('header');
  header.setAttribute('id', 'header');
  
  return header;
};

const createOverlay= () => {
  const overlayContainer = document.createElement('div');
  overlayContainer.setAttribute('id', 'overlay-container');

  const overlay = document.createElement('div');
  overlay.setAttribute('id', 'overlay');

  overlayContainer.appendChild(overlay);
  content.insertBefore(overlayContainer, content.childNodes[1]);

  return overlayContainer;
};

const createFooter = () => {
  const footer = document.createElement('footer');
  footer.setAttribute('id', 'footer');

  const navContainer = document.createElement('div');
  navContainer.setAttribute('id', 'footer-nav');

  const home = document.createElement('p');
  home.setAttribute('id', 'footer-nav-home');
  home.addEventListener('click', resetPage);
  home.textContent = 'home';
  
  const menu = document.createElement('p');
  menu.setAttribute('id', 'footer-nav-menu');
  menu.addEventListener('click', createMenu);
  menu.textContent = 'menu';
  
  const about = document.createElement('p');
  about.setAttribute('id', 'footer-nav-about');
  about.addEventListener('click', createAbout);
  about.textContent = 'about';

  const authorContainer = document.createElement('div');
  authorContainer.setAttribute('id', 'footer-author-container');
  
  const websiteAuthor = document.createElement('a');
  websiteAuthor.setAttribute('id', 'website-author');
  websiteAuthor.textContent = 'website by k_mac_sempreezy';
  websiteAuthor.href = 'https://github.com/K-Mac-Sempreezy';

  const githubIcon = document.createElement('svg');
  githubIcon.setAttribute('id', 'footer-author-svg');

  const otherInfo = document.createElement('div');
  otherInfo.setAttribute('id', 'footer-other-info');

  navContainer.appendChild(home);
  navContainer.appendChild(menu);
  navContainer.appendChild(about);
  authorContainer.appendChild(githubIcon);
  authorContainer.appendChild(websiteAuthor);
  footer.appendChild(navContainer);
  footer.appendChild(authorContainer);
  footer.appendChild(otherInfo);

  return footer;
};

const createBackgroundImage = () => {
  const image = document.createElement('img');
  image.setAttribute('class', 'background-img');

  return image;
};

const createLogo = () => {
  const logo = document.createElement('div');
  logo.setAttribute('id', 'logo');
  logo.textContent = 'the fruit stand';

  return logo;
};

const pageLoad = () => {

  const content = document.getElementById('content');

  const header = createHeader();
  const overlay = createOverlay();
  const nav = createNav();
  const logo = createLogo();
  const image = createBackgroundImage();
  const footer = createFooter();

  header.appendChild(nav);
  overlay.appendChild(footer);
  content.appendChild(logo);
  content.appendChild(image);
  content.appendChild(header);
  content.appendChild(overlay);
  
};

export { pageLoad };