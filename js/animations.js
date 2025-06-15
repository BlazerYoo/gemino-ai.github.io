/**
 * Setup initial animations
 */
export function setupAnimations() {
  // Add classes to elements that should be animated on load
  const heroContent = document.querySelector('.hero-content');
  const heroImage = document.querySelector('.hero-image');
  
  if (heroContent) {
    heroContent.classList.add('fade-in');
    heroContent.style.animationDelay = '200ms';
  }
  
  if (heroImage) {
    heroImage.classList.add('fade-in');
    heroImage.style.animationDelay = '600ms';
  }
  
  // Video demo play button effect
  const playButton = document.getElementById('playDemo');
  if (playButton) {
    playButton.addEventListener('click', () => {
      const videoPlaceholder = document.querySelector('.video-placeholder');
      playButton.style.display = 'none';
      
      // Create video element
      const video = document.createElement('video');
      video.controls = true;
      video.autoplay = true;
      video.style.position = 'absolute';
      video.style.top = '0';
      video.style.left = '0';
      video.style.width = '100%';
      video.style.height = '100%';
      video.style.objectFit = 'cover';
      video.style.borderRadius = 'var(--radius-md)';
      
      // Add placeholder source - in a real project, you would add your actual video source
      video.innerHTML = `
        <source src="https://example.com/demo-video.mp4" type="video/mp4">
        Your browser does not support the video tag.
      `;
      
      videoPlaceholder.appendChild(video);
    });
  }
}