import '/dist/style.css';
import { updateNav } from './nav';
import { resetPage } from './home';

// Main card constructor
class MenuCard {
  constructor (title, description, image, price) {
    this.title = title;
    this.description = description;
    this.image = image; // img size should be 400px x 400px;
    this.price = price;
  }
}

//database of all menu items as new MenuCards
const fruitShake = new MenuCard (
  'fantastic fruit shake',
  'Huge chunks of fruit, superfoods, and other goodies, blended together',
  './imgs/sara-julie-9Gz5bMWdGYE-unsplash.png',
  '$14'
);

const fruitShake1 = new MenuCard(
  'fat maker',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id nibh tortor id. Praesent elementum facilisis',
  './imgs/usman-yousaf-DaxUJPNxALs-unsplash.png',
  '$20'
);

const fruitShake2 = new MenuCard (
  'frothy goodness',
  'Massa id neque aliquam vestibulum morbi blandit cursus. Elit sed vulputate mi sit.',
  './imgs/alexander-mils-w8POFpfCRP8-unsplash.png',
  '$16'
);

const fruitShake3 = new MenuCard (
  'frutti tutti',
  'Tortor at auctor urna nunc id cursus metus aliquam. Quis eleifend quam adipiscing vitae. Urna molestie at elementum eu facilisis sed odio',
  './imgs/sebastian-coman-photography-rwBJaJdesGg-unsplash.png',
  '$18'
);

const fruitShake4 = new MenuCard (
  'fruit stand special',
  'It\'s a surprise!',
  './imgs/victor-rutka-4FujjkcI40g-unsplash.png',
  '$14'
);

const overlayAnimate = (card, index, container, overlay, overlayContainer) => {
  setTimeout(function() {
    overlayContainer.style.transform = 'translateY(0px)';
    overlay.style.backgroundColor = 'rgba(241, 180, 196, 0.75)';
    renderCard(card, container, index);
  }, 200);
  
};

const overlaySet = (card, index, container, overlay, overlayContainer) => {
  overlay.style.backgroundColor = 'rgba(241, 180, 196, 0.0)'
  overlayContainer.style.transform = 'translateY(800px)';
  overlayAnimate(card, index, container, overlay, overlayContainer);
};

const renderCard = (card, container, index) => {

  const menuItem = document.createElement('div');
  menuItem.setAttribute('data-index', index);
  menuItem.setAttribute('id', `card${index}`);
  menuItem.setAttribute('class', 'card');

  const textDiv = document.createElement('div');
  textDiv.setAttribute('class', 'text')

  const img = document.createElement('img');
  img.src = card.image;

  const title = document.createElement('h3');
  title.textContent = card.title;

  const description = document.createElement('p');
  description.textContent = card.description;

  const price = document.createElement('p');
  price.textContent = card.price;
  price.setAttribute('class', 'price');

  textDiv.append(title);
  textDiv.append(price);
  textDiv.append(description);
  menuItem.append(textDiv);
  menuItem.append(img);

  container.appendChild(menuItem);
  // overlayAnimate()
};

const createMenu = (e) => {
  if (document.getElementById('container')) {
    return;
  }

  resetPage(e);

  const overlay = document.getElementById('overlay');
  // if (document.getElementById('big-div')) {
  //   while(overlay.firstElementChild) {
  //     console.log(overlay.firstElementChild)
  //     overlay.firstElementChild.remove();
  //   };
  // };

  updateNav(e);
  
  const overlayContainer = document.getElementById('overlay-container');
  const container = document.createElement('div');

  
  container.setAttribute('id', 'container');

  overlay.appendChild(container);

  cardItems.forEach((card, index) =>
    overlaySet(card, index, container, overlay, overlayContainer)
  );
};

//items put in array to help create cards for menu
const cardItems = [fruitShake, fruitShake1, fruitShake2, fruitShake3, fruitShake4];

export { createMenu };