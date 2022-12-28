let elements = {
  menu: "",
  menuIcon: "",
  logoIcon: "",
};

function removeSideMenuAfterClick() {
  // AO ABRIR A APLICAÇÃO, ADICIONA EVENTO DE REMOVER MENU, NOS ITENS DO PRÓPRIO MENU E NA LOGO
  [elements.logoIcon, elements.menu].forEach((element) => {
    element.addEventListener("click", () => {
      elements.menu.classList.remove("sideMenuActive");
    });
  });
}

function btnSideMenu() {
  // ADICIONA EVENTO DE ACIONAR E ESCONDER O MENU ATRAVÉS DAS BARRAS
  const header = document.querySelector("header");
  elements.menu = header.querySelector(".menu .links"); //Guarda todos o menu
  elements.menuIcon = header.querySelector(".side-menu .menu-icon"); //Guarda referencia das "barrinhas"
  elements.logoIcon = header.querySelector(".menu .logo");

  elements.menuIcon.addEventListener("click", () => {
    //Adiciona o vento de ao clicar nas "barrinhas" adiciona ou remove o menu
    elements.menu.classList.toggle("sideMenuActive");
  });
}

window.onload = () => {
  btnSideMenu();
  removeSideMenuAfterClick();
};
