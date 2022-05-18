import 'regenerator-runtime';
import App from './views/app';

import '../styles/main.scss';

// components
import './views/Components/Navbar/Navbar';
import './views/Components/Footer/Footer';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.nav__list'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
