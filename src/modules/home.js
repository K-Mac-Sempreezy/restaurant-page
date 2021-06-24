import { updateNav } from "./nav";

const resetPage = (e) => {
  console.log(e.target.id);
  const cards = document.querySelectorAll('.card');
  const overlay = document.getElementById('overlay');
  const overlayContainer = document.getElementById('overlay-container');
  const aboutContainer = document.getElementById('about-container');

  overlayContainer.style.transform = 'translateY(1200px)';

  if (e.target.id === 'nav-menu' || e.target.id === 'footer-nav-menu') {
    if (aboutContainer) {
      setTimeout(function () {
        aboutContainer.style.visibility = 'hidden';
      }, 500);
    }
  } else if (
    e.target.id === 'nav-about' ||
    e.target.id === 'footer-nav-about'
  ) {
    aboutContainer.style.visibility = 'visible';
    overlayReset(cards, overlay, overlayContainer);
  } else if (e.target.id === 'nav-home' || e.target.id === 'footer-nav-home') {
    if (aboutContainer) {
      aboutContainer.style.visibility = 'hidden';
    }
    overlayReset(cards, overlay, overlayContainer);
  }
  updateNav(e);
};

const overlayReset = (cards, overlay, overlayContainer) => {
  if (overlay.childNodes) {
    clearMenu(cards, overlay, overlayContainer);
    resetOverlayPosition(cards, overlay, overlayContainer);
  }
};

const clearMenu = (cards, overlay, overlayContainer) => {
  setTimeout(function () {
    overlayContainer.style.transform = 'translateY(1200px)';
    overlay.style.backgroundColor = 'rgba(241, 180, 196, 0.0)';
    cards.forEach(card => {
      card.style.opacity = '0';
    });
  }, 200);
};

const resetOverlayPosition = (cards, overlay, overlayContainer) => {
  setTimeout(function () {
    overlayContainer.style.transform = 'translateY(0px)';
    overlay.style.backgroundColor = 'rgba(241, 180, 196, 0.0)';
    emptyOverlay(overlay);
  }, 1000);
};

const emptyOverlay = (overlay) => {
  while(overlay.firstElementChild) {
    overlay.firstElementChild.remove();
    overlay.style.backgroundColor = 'rgba(241, 180, 196, 0.0)';
  };

  //remove container from overlay => it negatively affects footer placement
  //set timeout to wait for other animations to finish
  setTimeout(function () {
    if (document.getElementById('container')) {
      while (overlay.firstElementChild) {
        overlay.firstElementChild.remove();
      };
    };
  }, 700);
};

export { resetPage }