let elements = {
  menu: "",
  menuIcon: "",
  logoIcon: "",
  copyRights: "",
};

function mappingElements() {
  const body = document.querySelector("body");
  elements.menu = body.querySelector(".menu .links"); //Guarda todos o menu
  elements.menuIcon = body.querySelector(".side-menu .menu-icon"); //Guarda referencia das "barrinhas"
  elements.logoIcon = body.querySelector(".menu .logo");
  elements.copyRights = body.querySelector(".text-rights .current-year");
}

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

  elements.menuIcon.addEventListener("click", () => {
    //Adiciona o vento de ao clicar nas "barrinhas" adiciona ou remove o menu
    elements.menu.classList.toggle("sideMenuActive");
  });
}

function updateCopyrights() {
  const date = new Date();
  const currentYear = date.getFullYear().toString();
  elements.copyRights.innerText = currentYear;
}

window.onload = async () => {
  await mappingElements();
  await btnSideMenu();
  await removeSideMenuAfterClick();
  await updateCopyrights();
};
