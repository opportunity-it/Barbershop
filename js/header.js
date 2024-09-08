// window.onscroll = () => changeHeaderBackground();

// function changeHeaderBackground() {
//   const header = document.querySelector('[data-header]');
//   const headerOffsetTrigger = header.offsetHeight;
//   const pageOffset = window.pageYOffset;

//   if (pageOffset > headerOffsetTrigger) {
//     header.classList.add('no-transparency');
//   } else {
//     header.classList.remove('no-transparency');
//   }
// }


window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
  const header = document.querySelector('[data-header]');
  const headerOffsetTrigger = header.offsetHeight;
  const pageOffset = window.pageYOffset;

  // Додаємо перевірку, чи меню активне
  const menuIsActive = document.querySelector('.menu-container').classList.contains('active');

  if (pageOffset > headerOffsetTrigger || menuIsActive) {
    header.classList.add('no-transparency');
  } else {
    header.classList.remove('no-transparency');
  }
}
// Щоб було розмиття хедера без прокрутки сторінки
