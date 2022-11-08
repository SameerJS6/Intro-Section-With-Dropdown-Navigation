const HamburgerToggle = document.querySelector("[data-hamburger]");
const NavBar = document.querySelector("[data-navbar]");
const Ripples = document.querySelectorAll(".ripple");

HamburgerToggle.addEventListener("click", ()=> {
  HamburgerToggle.classList.toggle("is-active");
  NavBar.classList.toggle("active")
})

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
