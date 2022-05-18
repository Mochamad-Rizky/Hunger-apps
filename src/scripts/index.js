import 'regenerator-runtime';
import '../styles/main.scss';

// components
import './views/Components/Navbar/Navbar';
import './views/Components/Hero/Hero';
import './views/Components/ListRestaurant/ListRestaurant';
import './views/Components/Promotion/Promotion';
import './views/Components/FoodNews/FoodNews';
import './views/Components/Footer/Footer';

const hamburgerButton = document.getElementById('hamburger');

hamburgerButton.addEventListener('click', () => {
  const navList = document.querySelector('.nav__list');
  navList.classList.toggle('active');
});
