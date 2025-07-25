import * as funcWebp from './modules/functions.js';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

funcWebp.isWebp();

document.addEventListener('DOMContentLoaded', () => {
  // Навигационное меню (бургер)
  const body = document.querySelector('.body');
  const headerNav = document.querySelector('.header__nav');
  const burger = document.querySelector('.burger');
  const headerLogo = document.querySelector('.header .logo');
  const headerNavLinks = document.querySelectorAll('.header__nav ul li');

  // Убираем классы, чтобы скрыть бургерное меню при загрузке страницы
  burger.classList.remove('burger--active');
  headerLogo.classList.remove('logo--active');
  body.classList.remove('body--scroll-disabled');
  headerNav.classList.remove('header__nav--active');
  body.classList.remove('body--active');

  // Обработчик клика по бургеру
  burger.addEventListener('click', toggleBurger);

  function toggleBurger() {
    burger.classList.toggle('burger--active');
    headerLogo.classList.toggle('logo--active');
    headerNav.classList.toggle('header__nav--active');
    body.classList.toggle('body--scroll-disabled');
    body.classList.toggle('body--active');

    // Закрываем меню при клике на ссылку в навигации
    headerNavLinks.forEach((link) => link.addEventListener('click', closeBurger));
  }

  // Функция закрытия бургера
  function closeBurger() {
    body.classList.remove('body--scroll-disabled');

    setTimeout(() => {
      burger.classList.remove('burger--active');
      headerLogo.classList.remove('logo--active');
      headerNav.classList.remove('header__nav--active');
      body.classList.remove('body--scroll-disabled');
      body.classList.remove('body--active');
    }, 100);
  }

  //Слайдер иконок
  new Swiper('.payments__icons', {
    modules: [Autoplay],
    enabled: true,
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },

    breakpoints: {
      1200: {
        enabled: false,
        slidesPerView: 9,
        spaceBetween: 15,
        loop: false,
        enabled: false,
      },
    },
  });
});
