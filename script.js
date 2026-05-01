// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Typing effect
const roles = ['Android Developer', 'Web Developer', 'Problem Solver', 'CS Student'];
let i = 0, j = 0, deleting = false;
const typeEl = document.getElementById('typeTarget');
function type() {
  const word = roles[i];
  typeEl.textContent = deleting ? word.slice(0, --j) : word.slice(0, ++j);
  if (!deleting && j === word.length) { deleting = true; setTimeout(type, 1000); return; }
  if (deleting && j === 0) { deleting = false; i = (i + 1) % roles.length; }
  setTimeout(type, deleting ? 40 : 75);
}
type();

// Lightbox
const lightbox  = document.getElementById('lightbox');
const openPhoto = document.getElementById('openPhoto');
const closeBtn  = document.getElementById('closeLightbox');
openPhoto.addEventListener('click', () => lightbox.classList.add('open'));
closeBtn.addEventListener('click',  () => lightbox.classList.remove('open'));
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('open'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.classList.remove('open'); });

// Scroll fade-in
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .skill-card, .emp-card, .contact-item, .about-grid, .hero-content').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
