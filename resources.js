// JavaScript for the Resources page (animations, transitions, etc.)
// Add any custom JavaScript here as needed

// Get the modal
const modal = document.getElementById("resource-details-modal");

// Get the button that opens the modal
const cards = document.querySelectorAll(".card");
const closeModal = document.querySelector(".close");

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModalFn() {
  modal.style.display = "none";
}

// Event listeners for opening and closing the modal
cards.forEach((card) => card.addEventListener("click", openModal));
closeModal.addEventListener("click", closeModalFn);

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModalFn();
  }
});
