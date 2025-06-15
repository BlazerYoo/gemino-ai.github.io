/**
 * Newsletter form functionality
 */
export function setupNewsletter() {
  const newsletterForm = document.getElementById('newsletterForm');
  const formMessage = document.getElementById('formMessage');
  const emailInput = document.getElementById('emailInput');
  
  if (!newsletterForm) return;
  
  newsletterForm.addEventListener('submit', e => {
    e.preventDefault();
    
    // Validate email
    const email = emailInput.value.trim();
    if (!isValidEmail(email)) {
      showMessage('Please enter a valid email address.', 'error');
      return;
    }
    
    // Simulate form submission
    showMessage('Sending...', 'info');
    
    setTimeout(() => {
      // Simulate successful subscription
      showMessage('Thank you for subscribing to our newsletter!', 'success');
      emailInput.value = '';
    }, 1500);
  });
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = 'form-message';
    formMessage.classList.add(`form-${type}`);
  }
}