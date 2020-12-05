const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".navbar__menu")
const navLogo = document.querySelector(".navbar__logo")
const body = document.querySelector("body")


// display mobile menu
const mobileMenu =() => {
  menu.classList.toggle("is-active")
  menuLinks.classList.toggle("active")
  body.classList.toggle("active")
}

menu.addEventListener("click", mobileMenu)

// Animation
gsap.registerPlugIn(ScrollTrigger)

gsap.from(".animate-hero", {
  duration:0.6,
  opacity: 0,
  y:-150,
  stagger:0.3
});

gsap.from(".animate-services", {
  ScrollTrigger: animate-services,
  duration:0.6,
  opacity: 0,
  y:-150,
  stagger:0.3
});




