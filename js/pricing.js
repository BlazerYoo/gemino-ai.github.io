/**
 * Pricing toggle functionality
 */
export function setupPricingToggle() {
  const billingToggle = document.getElementById('billingToggle');
  const pricingCards = document.querySelectorAll('.pricing-card');
  
  if (!billingToggle) return;
  
  billingToggle.addEventListener('change', () => {
    const isAnnual = billingToggle.checked;
    
    pricingCards.forEach(card => {
      const monthlyPrice = card.querySelector('.price.monthly');
      const annualPrice = card.querySelector('.price.annual');
      
      if (isAnnual) {
        monthlyPrice.style.display = 'none';
        annualPrice.style.display = 'inline';
      } else {
        monthlyPrice.style.display = 'inline';
        annualPrice.style.display = 'none';
      }
    });
  });
}