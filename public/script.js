const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");
const links = document.querySelectorAll(".list li a");

const openNav = () => {
  nav.forEach((nav_el) => {
    nav_el.style.transform = "translateX(0)";
  });
};

const closeNav = () => {
  nav.forEach((nav_el) => {
    nav_el.style.transform = "translateX(400%)";
    open_btn.style.opacity = 1;
  });
};

links.forEach((link) => {
  link.addEventListener("click", closeNav);
});

open_btn.addEventListener("click", openNav);
close_btn.addEventListener("click", closeNav);
