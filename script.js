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
      
      const formData = new FormData(contactForm);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      
      console.log("Attempting to send data to Web3Forms:", object);

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      })
      .then(async (response) => {
        let jsonResponse = await response.json();
        if (response.status == 200) {
          console.log("Success response from Web3Forms:", jsonResponse);
          submitBtn.textContent = 'Message Sent Successfully!';
          submitBtn.style.backgroundColor = 'var(--accent-color)';
          contactForm.reset();
        } else {
          console.log("Error response from Web3Forms:", response.status, jsonResponse);
          submitBtn.textContent = 'Error: Check Console';
          submitBtn.style.backgroundColor = 'var(--secondary-color)';
        }
      })
      .catch(error => {
        console.log("Network/Fetch error:", error);
        submitBtn.textContent = 'Network Error';
        submitBtn.style.backgroundColor = 'var(--secondary-color)';
      })
      .finally(() => {
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.backgroundColor = ''; // Reset to default
        }, 3000);
      });
    });
  }
});
