// (() => {
//     const mobileMenu = document.querySelector('.js-menu-container');
//     const openMenuBtn = document.querySelector('.js-open-menu');
//     const closeMenuBtn = document.querySelector('.js-close-menu');
  
//     const toggleMenu = () => {
//       const isMenuOpen =
//         openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//       openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//       mobileMenu.classList.toggle('is-open');
  
//       const scrollLockMethod = !isMenuOpen
//         ? 'disableBodyScroll'
//         : 'enableBodyScroll';
//       bodyScrollLock[scrollLockMethod](document.body);
//     // БЛОКУВАННЯ - РОЗБЛОКУВАННЯ ПРОКРУТКИ ПРИ ВІДКРИТОМУ МОБІЛЬНОМУ МЕНЮ 
//     };
  
//     openMenuBtn.addEventListener('click', toggleMenu);
//     closeMenuBtn.addEventListener('click', toggleMenu);
  
//     window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//       if (!e.matches) return;
//       mobileMenu.classList.remove('is-open');
//       openMenuBtn.setAttribute('aria-expanded', false);
//       bodyScrollLock.enableBodyScroll(document.body);
//     });
//   })();



// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('.header-burger').addEventListener('click', function() {
//     document.querySelector('.header-burger').classList.toggle('active');
//     document.querySelector('.menu-container').classList.toggle('active');
//     document.body.classList.toggle('no-scroll');
//   });
// });


document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.header-burger');
  const menuContainer = document.querySelector('.menu-container');
  const header = document.querySelector('[data-header]');

  burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    menuContainer.classList.toggle('active');
    document.body.classList.toggle('no-scroll');

    if (menuContainer.classList.contains('active')) {
      header.classList.add('no-transparency');
    } else {
      header.classList.remove('no-transparency');
    }
  });
});
// Щоб було розмиття хедера без прокрутки сторінки
