// AUF TRIP - Main JS
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
}

const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 50
      ? '0 6px 24px rgba(0,0,0,0.12)'
      : '0 4px 20px rgba(0,0,0,0.08)';
  });
}

console.log('AUF TRIP Loaded');
