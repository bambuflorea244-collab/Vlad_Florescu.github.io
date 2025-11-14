const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const yearSpan = document.getElementById("year");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Set current year in footer
yearSpan.textContent = new Date().getFullYear();
