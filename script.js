// Slideshow Functionality
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  updateSlide();
}

function updateSlide() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
  });
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds



// Script to handle form switching
$(document).ready(function () {
  // Toggle signup and login forms
  $(".form-switch label").on("click", function () {
    const formType = $(this).attr("for");
    $(".signup-form, .login-form").hide();
    $("#" + formType).show();
  });

  // Client-side validation for signup form
  function validateSignup() {
    // Your validation logic for the signup form here
    // Return true if the form is valid, or return false and display error messages
    // Example:
    // if (formIsInvalid) {
    //   displayErrorMessages();
    //   return false;
    // }
    // return true;
  }

  // Client-side validation for login form
  function validateLogin() {
    // Your validation logic for the login form here
    // Return true if the form is valid, or return false and display error messages
    // Example:
    // if (formIsInvalid) {
    //   displayErrorMessages();
    //   return false;
    // }
    // return true;
  }
});



