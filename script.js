document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================
  // 1. Skill Bar Animation on Scroll
  // ==========================================
  // Select all skill bar fill elements from the DOM
  const skillBars = document.querySelectorAll('.skill-bar-fill');

  // Create an Intersection Observer to watch when elements enter the viewport
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If the skill bar is visible in the viewport
      if (entry.isIntersecting) {
        // Reset and re-trigger the CSS animation
        entry.target.style.animation = 'none';
        entry.target.offsetHeight; // Trigger a reflow to restart animation
        entry.target.style.animation = null; 
      }
    });
  }, { 
    threshold: 0.2 // Trigger when at least 20% of the element is visible
  });

  // Attach the observer to each skill bar
  skillBars.forEach(bar => {
    skillObserver.observe(bar);
  });

  // ==========================================
  // 2. Contact Form Submission Simulation
  // ==========================================
  // Select the contact form and its submit button
  const contactForm = document.querySelector('.contact-form');
  const submitBtn = document.querySelector('.form-submit');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      // Prevent actual page reload (fallback for the inline onsubmit="return false;")
      e.preventDefault(); 
      
      // Store the original button text
      const originalText = submitBtn.textContent;
      
      // Update UI to show sending state
      submitBtn.textContent = 'Sending...';
      submitBtn.style.opacity = '0.7';
      submitBtn.style.cursor = 'not-allowed';

      // Simulate a network request with a 1.5-second timeout
      setTimeout(() => {
        // Show success state
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.backgroundColor = '#2F5755'; // Using your CSS variable accent color
        submitBtn.style.opacity = '1';
        
        // Clear all form inputs
        contactForm.reset();

        // Revert the button back to its original state after 3 seconds
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.cursor = 'pointer';
          submitBtn.style.backgroundColor = ''; // Remove inline style to return to CSS defaults
        }, 3000);
        
      }, 1500); // 1.5 second simulated delay
    });
  }

});