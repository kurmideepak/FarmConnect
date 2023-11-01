// JavaScript for the features page animations and effects
// Add any custom JavaScript here as needed

// Function to animate the hero section on page load
function animateHeroSection() {
  const heroTitle = document.querySelector('.hero h1');
  const heroDescription = document.querySelector('.hero p');

  heroTitle.classList.add('fade-in');
  heroDescription.classList.add('fade-in');
}

// Call the function to animate the hero section on page load
animateHeroSection();
