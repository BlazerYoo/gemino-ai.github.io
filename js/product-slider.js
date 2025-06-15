/**
 * Product slider functionality
 */
export function setupProductSlider() {
  const slides = document.querySelectorAll('.product-slide');
  const dots = document.querySelectorAll('.slider-dots .dot');
  const prevButton = document.getElementById('prevSlide');
  const nextButton = document.getElementById('nextSlide');
  
  if (!slides.length || !dots.length) return;
  
  let currentSlide = 0;
  const slideCount = slides.length;
  
  // Initialize slider
  updateSlider();
  
  // Navigate to previous slide
  prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateSlider();
  });
  
  // Navigate to next slide
  nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlider();
  });
  
  // Navigate to specific slide when clicking dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateSlider();
    });
  });
  
  // Auto-advance slides every 5 seconds
  let slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlider();
  }, 5000);
  
  // Pause auto-advance on hover
  const sliderContainer = document.getElementById('productSlider');
  sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });
  
  sliderContainer.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % slideCount;
      updateSlider();
    }, 5000);
  });
  
  // Touch support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  sliderContainer.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  sliderContainer.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
  
  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left - next slide
      currentSlide = (currentSlide + 1) % slideCount;
      updateSlider();
    } else if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right - previous slide
      currentSlide = (currentSlide - 1 + slideCount) % slideCount;
      updateSlider();
    }
  }
  
  // Update slider display
  function updateSlider() {
    // Update slides
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
    
    // Update dots
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
}