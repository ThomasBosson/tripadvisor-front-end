const $ = document;
const modal = $.querySelector(".modal");
const body = $.body;

$.addEventListener("DOMContentLoaded", () => {
  $.querySelector(".signup").addEventListener("click", () => {
    // Display modal
    modal.classList.remove("hidden");
    // Disable scroll
    body.classList.add("overflow-hidden");
  });
  $.querySelector(".cross").addEventListener("click", () => {
    // Hide modal
    modal.classList.add("hidden");
    // Enable scroll
    body.classList.remove("overflow-hidden");
  });

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
  });
});
