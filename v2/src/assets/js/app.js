import $ from 'jquery';
window.$ = $;

// This is an import to my  custom file  "hello.js"
import hello from './hello';

hello();


// -------------------------------------------------------------------------------------
// MENU TOOGLE
//--------------------------------------------------------------------------------------
function toggleMenu() {
  $('.js-page-navigation-menu').toggleClass('active');
  $('.page-navigation-toggle').toggleClass('active');
  $('.page-navigation-menu-link').toggleClass('active');
}
	$('.js-page-navigation-toggle').on('click', toggleMenu);

 