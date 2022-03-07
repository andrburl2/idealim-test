import $ from 'jquery';

function toggleMobileNav() {
  $('.nav__button').toggleClass('nav__button_active');
  $('.nav__list').toggleClass('nav__list_hidden');
}

export default toggleMobileNav;