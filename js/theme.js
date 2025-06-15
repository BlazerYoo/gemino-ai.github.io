/**
 * Theme toggle functionality
 */
export function setupThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const themeContainer = document.querySelector('.theme-container');
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    themeContainer.setAttribute('data-theme', savedTheme);
  } else {
    // Check if user prefers dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode) {
      themeContainer.setAttribute('data-theme', 'dark');
    }
  }
  
  // Toggle theme when the button is clicked
  themeToggle.addEventListener('click', () => {
    const currentTheme = themeContainer.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    themeContainer.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Apply smooth transition when changing themes
    themeContainer.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    setTimeout(() => {
      themeContainer.style.transition = '';
    }, 300);
  });
}