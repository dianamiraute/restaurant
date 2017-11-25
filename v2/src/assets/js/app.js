import $ from 'jquery';
window.$ = $;

// This is an import to my  custom file  "hello.js"
import hello from './hello';

hello();


// -------------------------------------------------------------------------------------
// MOBILE MENU
//--------------------------------------------------------------------------------------
function toggleMenu() {
  $('.js-page-navigation-menu').toggleClass('active');
  $('.js-page-navigation-toggle').toggleClass('active');
  $('.js-page-navigation-menu-link').toggleClass('active');
}

$('.js-page-navigation-toggle').on('click', toggleMenu);

 