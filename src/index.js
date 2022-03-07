import './styles/index.scss';
import 'bootstrap';
import $ from 'jquery';

import toggleMobileNav from './javascript/mobileNav';
$('.nav__button').on('click', toggleMobileNav);

import calc from './javascript/calc';
$('.calc__option').on('click', calc);