function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Smooth scrolling for "Contact Info" button
function scrollToContact() {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
}
