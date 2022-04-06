// Simple Modal Demo

// HTML Variables
let showModalBtnEl = document.getElementById("show-modal-btn");
let hideModalBtnEl = document.getElementById("hide-modal-btn");
let modalEl = document.getElementById("modal");

// Event Listener
showModalBtnEl.addEventListener("click", showModal);
hideModalBtnEl.addEventListener("click", hideModal);
modalEl.addEventListener("click", checkModalClose);

// Event Functions
function showModal() {
  modalEl.style.display = "block";
}

function hideModal() {
  modalEl.style.display = "none";
}

function checkModalClose(e) {
  // Close Modal if outer area clicked
  if (e.target === modalEl) {
    modalEl.style.display = "none";
  }
}