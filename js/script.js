"Use strict";

const modalWindow = document.querySelector('.modal__window');
const buttonModalWindow = document.querySelector('.banner__btn');
const buttonClosedModalWindow = document.querySelector('.modal__window_closed');
const inputName = document.querySelector('.window__input');

buttonModalWindow.addEventListener('click', () => {
    modalWindow.classList.toggle('hidden');
    document.body.classList.add('no-scroll');
    inputName.focus();
});

buttonClosedModalWindow.addEventListener('click', () => {
    modalWindow.classList.add('hidden');
    document.body.classList.remove('no-scroll');
});

modalWindow.addEventListener('click', () => {
    modalWindow.classList.add('hidden');
    document.body.classList.remove('no-scroll');
});

window.addEventListener('keydown', function(event) {
    if(event.code === "Escape" && !modalWindow.classList.contains('hidden')) {
        modalWindow.classList.add('hidden');
        document.body.classList.remove('no-scroll');
        buttonModalWindow.focus();
    }
});