// const refs = {
//     openModalBtns: document.querySelectorAll("[data-open-modal]"),
//     closeModalBtn: document.querySelector("[data-close-modal]"),
//     backdrop: document.querySelector("[data-backdrop]"),
// };

// refs.openModalBtns.forEach(function (btn) {
//     btn.addEventListener("click", toggleModal);
// });

// refs.closeModalBtn.addEventListener("click", toggleModal);

// refs.backdrop.addEventListener("click", logBackdropClick);

// function toggleModal() {
//     refs.backdrop.classList.toggle("is-hidden");
// }

// function logBackdropClick() {
//     console.log("Це при кліці в бекдроп");
// }


(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open]'), // Змінили на querySelectorAll
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    const isModalOpen = refs.modal.classList.contains('is-hidden');
    
    refs.modal.classList.toggle('is-hidden');
    
    const scrollLockMethod = isModalOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  }
})();

  
  
  
  
  