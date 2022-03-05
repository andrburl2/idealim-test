import './styles/index.scss';
import 'bootstrap';
import $ from 'jquery';

function showMobileNav() {
  $('.nav__button').toggleClass('nav__button_active');
  $('.nav__list').toggleClass('nav__list_hidden');
}

$('.nav__button').on('click',showMobileNav);