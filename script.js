document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      // In a real app, this would open a mobile menu
      // For this landing page, we can scroll to the bottom or show an alert
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    });
  }

  // Form Submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('.btn-submit');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        submitBtn.textContent = 'Message Sent Successfully!';
        submitBtn.style.backgroundColor = 'var(--accent-color)';
        
        // Reset form
        contactForm.reset();
        
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }
});
