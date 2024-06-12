// scripts.js

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Scroll Reveal
  ScrollReveal().reveal('.animate-fade-in-down', { 
    delay: 200, 
    duration: 1000, 
    origin: 'top', 
    distance: '20px' 
  });
  ScrollReveal().reveal('.animate-fade-in-up', { 
    delay: 200, 
    duration: 1000, 
    origin: 'bottom', 
    distance: '20px' 
  });
  