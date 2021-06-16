const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");
const links = document.querySelectorAll(".list li a");

open_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => {
    nav_el.classList.add("visible");
    open_btn.style.opacity = 0;
  });
});

const closeNav = () => {
  nav.forEach((nav_el) => {
    nav_el.classList.remove("visible");
    open_btn.style.opacity = 1;
    nav.style.display = "none";
  });
};

close_btn.addEventListener("click", closeNav);

links.forEach((link) => {
  link.addEventListener("click", closeNav);
});
