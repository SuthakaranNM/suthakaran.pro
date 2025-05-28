// Automatically set the current year in the footer

document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scrolling for navigation links

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("aside nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("aside nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// Hamburger menu functionality

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("show");
});

// Close mobile menu when a link is clicked
const mobileLinks = document.querySelectorAll("#mobileMenu a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("show");
  });
});
