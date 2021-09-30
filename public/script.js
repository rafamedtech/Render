const open_btn = document.querySelector('.open-btn'),
  nav_close_btn = document.querySelector('.close-btn'),
  nav = document.querySelectorAll('.nav'),
  openNav = () => {
    nav.forEach((e) => {
      e.style.transform = 'translateX(0)';
    });
  },
  closeNav = () => {
    nav.forEach((e) => {
      (e.style.transform = 'translateX(400%)'), (open_btn.style.opacity = 1);
    });
  };
open_btn.addEventListener('click', openNav),
  nav_close_btn.addEventListener('click', closeNav),
  document.documentElement.clientWidth < 768 &&
    links.forEach((e) => {
      e.addEventListener('click', closeNav);
    });
