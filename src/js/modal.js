const openModalBtn = document.querySelector('[data-menu-open');
const backdrop = document.querySelector('[data-modal');
const closeBtn = document.querySelector('[data-modal-close]');
const menuItemsRefs = document.querySelectorAll('[data-menu-link]');

openModalBtn.addEventListener('click', onModalOpen);
backdrop.addEventListener('click', onBackdropClick);
closeBtn.addEventListener('click', onCloseBtnClick);

function onModalOpen() {
  backdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';

  window.addEventListener('keydown', onEscClick);
}

function onEscClick(e) {
  if (e.code === 'Escape') {
    onCloseBtnClick();
  }
}

function onBackdropClick(e) {
  if (e.target === backdrop) {
    backdrop.classList.add('is-hidden');
    document.body.style.overflow = 'scroll';
  }
}

function onCloseBtnClick() {
  backdrop.classList.add('is-hidden');
  document.body.style.overflow = 'scroll';

  window.removeEventListener('keydown', onEscClick);
}

menuItemsRefs.forEach(item => {
  item.addEventListener('click', onCloseBtnClick);
});
