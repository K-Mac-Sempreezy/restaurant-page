import '/dist/style.css';


const createHeader = () => {
  const header = document.createElement('header');
  header.setAttribute('id', 'header');
  
  return header;
};


const createFooter = () => {
  const footer = document.createElement('footer');
  footer.setAttribute('id', 'footer');

  return footer;
};


const pageLoad = () => {

  const content = document.getElementById('content');

  const header = createHeader();
  const footer = createFooter();

  content.appendChild(header);
  content.appendChild(footer);
  
};

export { pageLoad };