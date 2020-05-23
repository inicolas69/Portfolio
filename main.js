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
