/**
 * Navigation functionality
 */
export function setupNavigation() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const header = document.getElementById('header');
  const navItems = document.querySelectorAll('.nav-links a');
  
  // Toggle mobile menu
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('menu-open');
    document.body.classList.toggle('nav-open');
  });
  
  // Close mobile menu when a link is clicked
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      menuToggle.classList.remove('menu-open');
      document.body.classList.remove('nav-open');
    });
  });
  
  // Change header background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Smooth scroll to section when clicking nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Handle scroll indicator click
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        const headerHeight = header.offsetHeight;
        const targetPosition = featuresSection.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  }
}