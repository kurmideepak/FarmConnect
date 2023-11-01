// JavaScript for the Terms and Conditions page (animations, transitions, etc.)
// Add any custom JavaScript here as needed

// Get the acceptance checkboxes
const checkboxes = document.querySelectorAll(".accept-checkbox");

// Function to enable the call-to-action button when all checkboxes are checked
function checkAcceptance() {
  const isAllChecked = Array.from(checkboxes).every((checkbox) => checkbox.checked);
  const ctaSection = document.querySelector(".call-to-action");
  if (isAllChecked) {
    ctaSection.style.display = "block";
  } else {
    ctaSection.style.display = "none";
  }
}

// Event listener for the acceptance checkboxes
checkboxes.forEach((checkbox) => checkbox.addEventListener("change", checkAcceptance));
