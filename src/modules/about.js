import { resetPage } from './home';

const createAbout = (e) => {

  const overlay = document.getElementById('overlay');
  const content = document.getElementById('content');
  overlay.style.backgroundColor = 'rgba(241, 180, 196, 0.00)';

  const aboutContainer = document.createElement('div');
  aboutContainer.setAttribute('id', 'about-container');

  const aboutDiv = document.createElement('div');
  aboutDiv.setAttribute('class', 'about-div');

  const h2 = document.createElement('h2');
  h2.textContent = 'The Fruit Stand';
  
  const p = document.createElement('p');
  p.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto in eaque vel assumenda, facilis ipsam. There's always money in the banana stand. Sint accusamus. Corporis accusamus repellat error animi nisi ipsam veritatis praesentium in tempore nam repellendus ipsum, suscipit perferendis fugiat!";
  
  const img = document.createElement('img');
  img.setAttribute('class', 'img');
  img.src = '/imgs/fruit-stand.png';
  
  aboutDiv.appendChild(h2);
  aboutDiv.appendChild(p);
  aboutContainer.appendChild(img);
  aboutContainer.appendChild(aboutDiv);
  
  content.insertBefore(aboutContainer, content.childNodes[0]);
  resetPage(e)
};

export { createAbout };