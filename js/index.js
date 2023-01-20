const btn = document.querySelector('.header-burger');
const nav = document.querySelector ('.nav');
const link = document.querySelectorAll ('.nav-link');

btn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    btn.classList.toggle('nav-close');
});
for (let i = 0; i < link.length; i += 1) {
    link[i].addEventListener ('click', () => {
        nav.classList.remove('nav-open');
        btn.classList.remove('nav-close');
    })
}