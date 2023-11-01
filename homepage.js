// JavaScript for the homepage slideshow
// Add any custom JavaScript here as needed

// Slideshow variables
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

// Function to show the current slide
function showSlide() {
  slides.forEach(slide => slide.style.display = 'none');
  slides[slideIndex].style.display = 'block';
}

// Function to animate slides with different transition effects
function animateSlides() {
  slides.forEach(slide => slide.classList.remove('fade-in', 'slide-from-right', 'slide-from-bottom', 'zoom-in', 'slide-diagonal', 'flip', 'slide-circular', 'parallax', 'zoom-out', 'slide-from-top'));
  const transitionEffects = ['fade-in', 'slide-from-right', 'slide-from-bottom', 'zoom-in', 'slide-diagonal', 'flip', 'slide-circular', 'parallax', 'zoom-out', 'slide-from-top'];
  slides[slideIndex].classList.add(transitionEffects[slideIndex]);
}

// Function to move to the next slide
function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
  animateSlides();
}

// Automatically move to the next slide every 5 seconds (adjust as needed)
setInterval(nextSlide, 5000);

// Show the initial slide
showSlide();


// JavaScript for mobile menu functionality
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});
