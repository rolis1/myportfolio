// Add these to your existing script.js

// Touch support for mobile devices
document.addEventListener('DOMContentLoaded', function() {
  // Handle touch events for menu
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const menuLinks = document.querySelector('.menu-links');
  
  hamburgerIcon.addEventListener('touchstart', function(e) {
    e.preventDefault();
    toggleMenu();
  });

  // Close menu when clicking/touching outside
  document.addEventListener('touchstart', function(e) {
    if (!menuLinks.contains(e.target) && !hamburgerIcon.contains(e.target)) {
      menuLinks.classList.remove('open');
      hamburgerIcon.classList.remove('open');
    }
  });

  // Smooth scroll for all devices
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Add loading state for images
window.addEventListener('load', function() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.classList.add('loaded');
  });
});