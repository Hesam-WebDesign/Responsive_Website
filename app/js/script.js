// Hamburger icon animation
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
//const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function() {
    console.log('click hamburger');
    if (header.classList.contains('open')) { // close Hamburger menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else { // open Hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});