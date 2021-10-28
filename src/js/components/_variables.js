// Variables
const body = document.querySelector('.body');
const isMobileDevice = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
const myBurger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const burgerCl = new Burger(myBurger, nav);
const themeSwitcher = document.querySelector('.header__theme-switcher');