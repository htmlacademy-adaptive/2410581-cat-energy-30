const burger = document.querySelector('.toggle-burger');
const mainNavList = document.querySelector('.main-nav__list');
const mainHeaderContainer = document.querySelector('.main-header__container');
const mainNavItem = document.querySelectorAll('.main-nav__item');

burger.classList.remove('toggle-burger--no-js');
mainNavList.classList.remove('main-nav__list--no-js');
mainHeaderContainer.classList.remove('main-header__container--no-js');
mainNavItem.forEach((item) => {
  item.classList.remove('main-nav__item--no-js');
});
