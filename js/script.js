"Use strict";

const modalWindow = document.querySelector('.modal__window');
const buttonModalWindow = document.querySelector('.banner__btn');
const buttonClosedModalWindow = document.querySelector('.modal__window_closed');
const inputName = document.querySelector('.window__input');

buttonModalWindow.addEventListener('click', () => {
    modalWindow.classList.toggle('hidden');
    inputName.focus();
});

buttonClosedModalWindow.addEventListener('click', () => {
    modalWindow.classList.add('hidden');
});

modalWindow.addEventListener('click', () => {
    modalWindow.classList.add('hidden');
});

window.addEventListener('keydown', function(event) {
    if(event.code === "Escape" && !modalWindow.classList.contains('hidden')) {
        modalWindow.classList.add('hidden');
        buttonModalWindow.focus();
    }
});

window.addEventListener('scroll', function(event) {
    if (!modalWindow.classList.contains('hidden')) {
        window.scrollTo(0,0);
    }
  });