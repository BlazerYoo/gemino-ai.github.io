/**
 * Scroll effects and animations
 */
export function setupScrollEffects() {
  const animatedElements = document.querySelectorAll('[data-aos]');
  
  // Check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }
  
  // Check scroll position and animate elements
  function checkScrollPosition() {
    animatedElements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('aos-animate');
      }
    });
  }
  
  // Initialize on load
  checkScrollPosition();
  
  // Update on scroll
  window.addEventListener('scroll', checkScrollPosition);
  
  // Update on resize
  window.addEventListener('resize', checkScrollPosition);
}