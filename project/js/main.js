import { setupThemeToggle } from './theme.js';
import { setupNavigation } from './navigation.js';
import { setupProductSlider } from './product-slider.js';
import { setupTestimonialCarousel } from './testimonial-carousel.js';
import { setupPricingToggle } from './pricing.js';
import { setupAnimations } from './animations.js';
import { setupNewsletter } from './newsletter.js';
import { setupScrollEffects } from './scroll-effects.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  setupThemeToggle();
  setupNavigation();
  setupProductSlider();
  setupTestimonialCarousel();
  setupPricingToggle();
  setupAnimations();
  setupNewsletter();
  setupScrollEffects();
});