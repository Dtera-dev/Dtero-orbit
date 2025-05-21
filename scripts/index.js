// ScrollReveal Animations
ScrollReveal().reveal('#home', { delay: 200, duration: 1000, origin: 'top', distance: '50px' });
ScrollReveal().reveal('#about', { delay: 200, duration: 1000, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('#projects', { delay: 200, duration: 1000, origin: 'top', distance: '50px' });
ScrollReveal().reveal('#contact', { delay: 200, duration: 1000, origin: 'top', distance: '50px' });

// Secret Reveal Button
document.getElementById('secret-btn').addEventListener('click', () => {
  const secretText = document.getElementById('secret-text');
  secretText.classList.toggle('visible');
});

// Hamburger Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close menu when a link is clicked on mobile
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 769) {
      navMenu.classList.remove('active');
    }
  });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Active Menu Highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === entry.target.id) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));

// Skill Bar Animation
const aboutSection = document.getElementById('about');
const skillBars = aboutSection.querySelectorAll('.skill-bar-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillBars.forEach(bar => {
        bar.style.width = bar.getAttribute('data-width');
      });
    }
  });
}, { threshold: 0.5 });
 
skillObserver.observe(aboutSection);
