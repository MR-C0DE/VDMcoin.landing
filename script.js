// === script.js ===

// Fade-in on scroll
const fadeElements = document.querySelectorAll('.fade-up');

function handleScrollFade() {
  const triggerBottom = window.innerHeight * 0.85;
  fadeElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollFade);
window.addEventListener('load', handleScrollFade);

// Smooth scroll (optional redundancy)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dark mode toggle (basic example)
const darkToggle = document.createElement('button');
darkToggle.innerText = '🌓';
darkToggle.className = 'dark-toggle';
document.body.appendChild(darkToggle);

darkToggle.style.position = 'fixed';
darkToggle.style.bottom = '1rem';
darkToggle.style.right = '1rem';
darkToggle.style.padding = '0.5rem 1rem';
darkToggle.style.borderRadius = '50px';
darkToggle.style.border = 'none';
darkToggle.style.background = '#4c1d95';
darkToggle.style.color = '#fff';
darkToggle.style.cursor = 'pointer';
darkToggle.style.zIndex = '1001';

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('vdm-theme', isDark ? 'dark' : 'light');
});

// Load theme
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('vdm-theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});

// Apply dark mode styles
const style = document.createElement('style');
style.innerHTML = `
  body.dark-mode {
    background: #1a1a2e;
    color: #ffffff;
  }
      body.dark-mode p,
  body.dark-mode li,
  body.dark-mode h1,
  body.dark-mode h2,
  body.dark-mode h3,
  body.dark-mode h4,
  body.dark-mode h5,
  body.dark-mode h6 {
    color: #ffffff;
  }
  body.dark-mode .section {
    background: #22223b;
  }
  body.dark-mode .navbar {
    background: #2e1065;
  }
  body.dark-mode .btn {
    background: #6d28d9;
    color: #fff;
  }
  body.dark-mode .btn:hover {
    background: #9f7aea;
  }
  body.dark-mode footer {
    background: #1a1a2e;
    color: #aaa;
  }
  body.dark-mode .social-links a {
    border-color: #a78bfa;
    color: #a78bfa;
  }
  body.dark-mode .social-links a:hover {
    background: #a78bfa;
    color: #222;
  }
`;
document.head.appendChild(style);

// Responsive mobile menu (if you add hamburger later)
// function toggleMobileMenu() {
//   const nav = document.querySelector('.nav-links');
//   nav.classList.toggle('show');
// }
//
// const burger = document.createElement('div');
// burger.classList.add('burger');
// burger.innerHTML = '&#9776;';
// burger.addEventListener('click', toggleMobileMenu);
// document.querySelector('.navbar').appendChild(burger);

// Counter (for fun - can be used for stats)
// const counter = document.createElement('div');
// counter.className = 'counter';
// counter.innerText = 'Visitors: ' + Math.floor(Math.random() * 5000);
// document.querySelector('footer').appendChild(counter);
