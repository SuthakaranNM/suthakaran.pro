document.getElementById("year").textContent = new Date().getFullYear();

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
