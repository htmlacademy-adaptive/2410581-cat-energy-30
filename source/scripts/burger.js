const toggleBurger = document.querySelector('.toggle-burger');
const mainNavList = document.querySelector('.main-nav__list');
const line1 = document.querySelector('.toggle-burger__line1');
const line2 = document.querySelector('.toggle-burger__line2');
const line3 = document.querySelector('.toggle-burger__line3');
const burgerHelp = document.querySelector('.toggle-burger__help');

toggleBurger.onclick = function() {
  mainNavList.classList.toggle('main-nav__list--closed');
  toggleBurger.classList.toggle('toggle-burger--opened');
  line1.classList.toggle('toggle-burger__line1--close');
  line2.classList.toggle('toggle-burger__line2--close');
  line3.classList.toggle('toggle-burger__line3--close');
  switch(burgerHelp.textContent) {
    case 'Открыть меню':
      burgerHelp.textContent = 'Закрыть меню';
      break;
    case 'Закрыть меню':
      burgerHelp.textContent = 'Открыть меню';
  }
};
