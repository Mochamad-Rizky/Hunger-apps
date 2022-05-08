import '../styles/main.scss';


// components 
import './Components/Navbar/Navbar';
import './Components/Hero/Hero';
import './Components/ListRestaurant/ListRestaurant';
import './Components/Promotion/Promotion';
import './Components/FoodNews/FoodNews';
import './Components/Footer/Footer';

const hamburgerButton = document.getElementById('hamburger');

hamburgerButton.addEventListener('click', () => {
  const navList = document.querySelector('.nav__list');
  navList.classList.toggle('active');
});