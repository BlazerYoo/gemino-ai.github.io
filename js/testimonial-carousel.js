/**
 * Testimonial carousel functionality
 */
export function setupTestimonialCarousel() {
  const testimonials = document.querySelectorAll('.testimonial');
  const indicators = document.querySelectorAll('.carousel-indicators .indicator');
  
  if (!testimonials.length || !indicators.length) return;
  
  let currentTestimonial = 0;
  const testimonialCount = testimonials.length;
  
  // Initialize carousel
  updateCarousel();
  
  // Navigate to specific testimonial when clicking indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentTestimonial = index;
      updateCarousel();
    });
  });
  
  // Auto-advance testimonials every 6 seconds
  let testimonialInterval = setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonialCount;
    updateCarousel();
  }, 6000);
  
  // Pause auto-advance on hover
  const carouselContainer = document.getElementById('testimonialCarousel');
  carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
  });
  
  carouselContainer.addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonialCount;
      updateCarousel();
    }, 6000);
  });
  
  // Touch support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  carouselContainer.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  carouselContainer.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
  
  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left - next testimonial
      currentTestimonial = (currentTestimonial + 1) % testimonialCount;
      updateCarousel();
    } else if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right - previous testimonial
      currentTestimonial = (currentTestimonial - 1 + testimonialCount) % testimonialCount;
      updateCarousel();
    }
  }
  
  // Update carousel display
  function updateCarousel() {
    // Update testimonials
    testimonials.forEach((testimonial, index) => {
      if (index === currentTestimonial) {
        testimonial.classList.add('active');
      } else {
        testimonial.classList.remove('active');
      }
    });
    
    // Update indicators
    indicators.forEach((indicator, index) => {
      if (index === currentTestimonial) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }
}