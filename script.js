let show = true;
const menuHeader = document.querySelector('header');
const menuToggle = menuHeader.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {

    menuHeader.classList.toggle('on', show);
    show = !show;

});

