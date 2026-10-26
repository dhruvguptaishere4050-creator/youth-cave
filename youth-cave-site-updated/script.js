const nav = document.querySelector('.nav');
const menuButton = document.querySelector('.menu-toggle');
if (nav && menuButton) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('nav-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => nav.classList.remove('nav-open')));
}
