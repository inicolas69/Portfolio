// Nav menu

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

// Dark theme

const darkToggle = document.querySelector('.dark');
const logo = document.querySelector('.logo');

if (localStorage.getItem('theme') == 'sombre') {
  modeSombre();
}

function modeSombre() {
  document.body.className = 'dark-theme';
  logo.innerHTML = `<img src="img/logo-text-white.png" alt="logo" />`;
}

function changerTheme() {
  if (document.body.classList.contains('dark-theme')) {
    document.body.className = '';
    logo.innerHTML = `<img src="img/logo-text-black.png" alt="logo" />`;
    localStorage.setItem('theme', 'clair');
  } else {
    modeSombre();
    localStorage.setItem('theme', 'sombre');
  }
}

darkToggle.addEventListener('click', changerTheme);

// Anim logo

logo.addEventListener('click', () => {
  document.body.classList.toggle('clic-logo');
});

// Anim texte

new TypeIt('#anim', {
  //   strings: ['Bonjour,', 'Salut,', 'Hey,'],
  speed: 80,
  loop: false,
  startDelete: true,
  breakLines: false,
  lifeLike: true,
  startDelay: 500,
})
  .type(`Bonjour, moi c'est <strong>Nicolas&nbspIniesta</strong>`, {
    delay: 400,
  })
  .move(-27, { speed: 25, delay: 400 })
  .delete(8)
  .type('Hey !', { delay: 500 })
  .move(3, { speed: 25, delay: 400 })
  .delete(3)
  .type(' M', { delay: 500, speed: 120 })
  .pause(500)
  .delete(7, { delay: 500, speed: 120 })
  .type('Salut, m', { delay: 500, speed: 150 })
  .move('END', { speed: 25, delay: 400 })
  //   .delete(10)
  .go();
