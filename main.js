// Typewriter in hero terminal
const phrases = [
  'building cool things...',
  'open to opportunities',
  'coffee.exe running...',
  'git push origin main',
  'miami nights, neon code...',
  'always learning.',
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;
const el = document.getElementById('typewriter');

function type() {
  const current = phrases[phraseIndex];

  if (!deleting) {
    el.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    el.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(type, deleting ? 45 : 80);
}

type();

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + entry.target.id
          ? 'var(--cyan)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));
