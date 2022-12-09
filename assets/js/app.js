const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (this.scrollY > 0) {
    navbar.classList.remove("py-4");
    navbar.classList.add("shadow", "py-3");
  } else {
    navbar.classList.add("py-4");
    navbar.classList.remove("shadow", "py-3");
  }
});

// AOS
AOS.init({
  duration: 700,
});

// typed.js
const typedtext = document.getElementsByClassName("typedtext")[0];
var typed = new Typed(typedtext, {
  strings: [
    "Full Stack Developer",
    "Ui/Ux Designer",
    "Freelancer",
    "Data Scientist",
  ],
  typeSpeed: 130,
  backSpeed: 100,
  loop: true,
});
