// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("toggle");
});

// Fade-in Sections on Scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight - 100;
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
}); // Select donation buttons and input
const donationButtons = document.querySelectorAll(".donation-amount");
const customAmountInput = document.getElementById("customAmount");

donationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const amount = button.textContent.replace("$", "");
    customAmountInput.value = amount;
  });
});
