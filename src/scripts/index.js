import '../styles/main.scss';


// components 
import './Components/Navbar/Navbar';
import './Components/Hero/Hero';

const hamburgerButton = document.getElementById('hamburger');

hamburgerButton.addEventListener('click', () => {
  const navList = document.querySelector('.nav__list');
  navList.classList.toggle('active');
});