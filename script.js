function sideMenu() {
  // AJUSTES DO MENU INTERATIVO
  const menu = document.querySelector(".menu .links");
  const menuIcon = document.querySelector(".side-menu .menu-icon");

  menuIcon.addEventListener("click", () => {
    menu.classList.toggle("sideMenuActive");
  });
}

window.onload = () => {
  sideMenu();
};
