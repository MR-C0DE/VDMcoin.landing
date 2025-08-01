// === script.js ===

// --- 1. Fade-in on scroll ---
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

// --- 2. Smooth scroll ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// --- 3. Dark mode toggle ---
const darkToggle = document.createElement('button');
darkToggle.innerText = '🌓';
darkToggle.className = 'dark-toggle';
document.body.appendChild(darkToggle);

// Style du bouton
Object.assign(darkToggle.style, {
  position: 'fixed',
  bottom: '1rem',
  right: '1rem',
  padding: '0.6rem 1rem',
  borderRadius: '50px',
  border: 'none',
  background: '#4c1d95',
  color: '#fff',
  fontSize: '1.2rem',
  cursor: 'pointer',
  boxShadow: '0 3px 6px rgba(0,0,0,0.2)',
  zIndex: '1001',
  transition: 'all 0.3s ease'
});

// Toggle & sauvegarde
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('vdm-theme', isDark ? 'dark' : 'light');
});

// Charge le thème au démarrage
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('vdm-theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});

// --- 4. Styles dynamiques pour dark mode ---
const style = document.createElement('style');
style.innerHTML = `
  body.dark-mode {
    background: #121212;
    color: #e0e0e0;
    transition: background 0.4s ease, color 0.4s ease;
  }

  body.dark-mode .navbar {
    background: linear-gradient(to right, #1e1b4b, #4c1d95);
  }

  body.dark-mode .logo span {
    color: #fff;
  }

  body.dark-mode .nav-links a {
    color: #e0e0e0;
  }

  body.dark-mode .nav-links a::after {
    background-color: #fff;
  }

  body.dark-mode .btn,
  body.dark-mode .cta-btn {
    background: #a78bfa;
    color: #121212;
  }

  body.dark-mode .btn:hover,
  body.dark-mode .cta-btn:hover {
    background: #c4b5fd;
    color: #1a1a2e;
  }

  body.dark-mode .section {
    background: #1e1e2f;
  }
 body.dark-mode .intro {
    background: #292944;
    border-left-color: #a78bfa;
  }
  body.dark-mode .tokenomics {
    background: #292944;
    border-left-color: #a78bfa;
  }

  body.dark-mode table {
    color: #e0e0e0;
  }

  body.dark-mode thead th {
    background-color: #5b21b6;
  }

  body.dark-mode tbody tr:nth-child(even) {
    background-color: #2e2e48;
  }

  body.dark-mode footer {
    background: #111;
    color: #aaa;
  }

  body.dark-mode .social-links a {
    border-color: #a78bfa;
    color: #a78bfa;
  }

  body.dark-mode .social-links a:hover {
    background: #a78bfa;
    color: #121212;
  }

  body.dark-mode h1,
  body.dark-mode h2,
  body.dark-mode h3,
  body.dark-mode h4,
  body.dark-mode h5,
  body.dark-mode h6,
  body.dark-mode p,
  body.dark-mode li {
    color: #ffffff;
  }

  body.dark-mode .hero {
    background: linear-gradient(to bottom,#301757, #1f2937);
    color: #e5e7eb;
    transition: background 0.3s ease, color 0.3s ease;
  }

  /* Optional: dark mode for inputs, cards, etc. */
  body.dark-mode input,
  body.dark-mode textarea,
  body.dark-mode select {
    background: #2d2d44;
    color: #eee;
    border: 1px solid #555;
  }

  body.dark-mode input::placeholder,
  body.dark-mode textarea::placeholder {
    color: #bbb;
  }

  body.dark-mode .card {
    background: #1e1e2f;
    border: 1px solid #333;
  }
`;
document.head.appendChild(style);

// --- 5. Burger menu optionnel (si tu veux l'activer plus tard) ---
// function toggleMobileMenu() {
//   const nav = document.querySelector('.nav-links');
//   nav.classList.toggle('show');
// }
//
// const burger = document.createElement('div');
// burger.classList.add('burger');
// burger.innerHTML = '&#9776;';
// burger.style.cssText = `
//   font-size: 2rem;
//   cursor: pointer;
//   color: white;
//   display: none;
// `;
// document.querySelector('.navbar').appendChild(burger);
//
// // Responsive activation
// window.addEventListener('resize', () => {
//   burger.style.display = window.innerWidth <= 768 ? 'block' : 'none';
// });
// toggleMobileMenu(); // à activer si menu responsive souhaité
