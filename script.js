const HamburgerToggle = document.querySelector("[data-hamburger]");
const NavBar = document.querySelector("[data-navbar]");
const Ripples = document.querySelectorAll(".ripple");

// Dropdown Menu Fuctionality
document.addEventListener("click", (e) => {
  const IsDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!IsDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let CurrentDropdown;
  if (IsDropdownButton) {
    CurrentDropdown = e.target.closest("[data-dropdown]");
    CurrentDropdown.classList.toggle("active-down");
  }

  // Will close all the dropdown except the Current Dropdown Menu

  document
    .querySelectorAll("[data-dropdown].active-down")
    .forEach((dropdown) => {
      if (dropdown === CurrentDropdown) return;
      dropdown.classList.remove("active-down");
    });
});

// Hamburger Menu
HamburgerToggle.addEventListener("click", () => {
  HamburgerToggle.classList.toggle("is-active");
  document.body.classList.toggle("hidden");
  NavBar.classList.toggle("active");
});

// Ripple Effect
Ripples.forEach((button) => {
  button.addEventListener("click", function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripple = document.createElement("span");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 1000);
  });
});
