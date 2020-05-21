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

if (localStorage.getItem('theme') == 'sombre') {
  modeSombre();
}

function modeSombre() {
  document.body.className = 'dark-theme';
}

function changerTheme() {
  if (document.body.classList.contains('dark-theme')) {
    document.body.className = '';
    localStorage.setItem('theme', 'clair');
  } else {
    modeSombre();
    localStorage.setItem('theme', 'sombre');
  }
}

darkToggle.addEventListener('click', changerTheme);

// Anim logo

const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  document.body.classList.toggle('clic-logo');
});
