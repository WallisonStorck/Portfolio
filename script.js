let elements = {
  menu: "",
  menuIcon: "",
};

function removeSideMenuAfterClick() {
  // AO CLICAR NO MENU ELE ESCONDE
  elements.menu.addEventListener("click", () => {
    elements.menu.classList.remove("sideMenuActive");
  });
}

function btnSideMenu() {
  // AJUSTES DO MENU INTERATIVO
  elements.menu = document.querySelector(".menu .links");
  elements.menuIcon = document.querySelector(".side-menu .menu-icon");

  elements.menuIcon.addEventListener("click", () => {
    elements.menu.classList.toggle("sideMenuActive");
  });
}

window.onload = () => {
  btnSideMenu();
  removeSideMenuAfterClick();
};
