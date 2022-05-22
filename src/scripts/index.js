import 'regenerator-runtime';
import App from './views/app';
import swRegister from './utils/sw-register';

import '../styles/main.scss';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// components
import './views/Components/Navbar/Navbar';
import './views/Components/Footer/Footer';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.nav__list'),
  content: document.querySelector('#main-content'),
  skipLink: document.querySelector('.skip-to-content'),
});

window.addEventListener('DOMContentLoaded', async () => {
  await app.renderPage();
  await swRegister();
});

window.addEventListener('hashchange', async () => {
  await app.renderPage();
});
