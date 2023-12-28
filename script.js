let elements = {
  menu: "",
  menuIcon: "",
  logoIcon: "",
  copyRights: "",
  form: "",
  // formName: "",
  // formMail: "",
  // formPhone: "",
  // formSubject: "",
  // formMessage: "",
  // formBtnSubmit: "",
};

function mappingElements() {
  const body = document.querySelector("body");
  elements.menu = body.querySelector(".menu .links"); //Guarda todos o menu
  elements.menuIcon = body.querySelector(".menu .side-menu"); //Guarda referencia das "barrinhas"
  elements.logoIcon = body.querySelector(".menu .logo");
  elements.copyRights = body.querySelector(".text-rights .current-year");

  // Cria uma variável com o formulário para pesquisar e apontar dentro dela todos os campos
  // const form = body.querySelector(".contact form");
  // elements.form = form;
  // elements.formName = form.querySelector("#name");
  // elements.formMail = form.querySelector("#email");
  // elements.formPhone = form.querySelector("#phone");
  // elements.formSubject = form.querySelector("#subject");
  // elements.formMessage = form.querySelector("#message");
  // elements.formBtnSubmit = form.querySelector(".btn-send-message");
}

// AO ABRIR A APLICAÇÃO, ADICIONA EVENTO DE REMOVER MENU, NOS ITENS DO PRÓPRIO MENU E NA LOGO
function removeSideMenuAfterClick() {
  [elements.logoIcon, elements.menu].forEach((element) => {
    element.addEventListener("click", () => {
      elements.menu.classList.remove("sideMenuActive");
      elements.menuIcon.classList.remove("menuBarActive");
    });
  });
}

// ADICIONA EVENTO DE ACIONAR E ESCONDER O MENU ATRAVÉS DAS BARRAS
function btnSideMenu() {
  elements.menuIcon.addEventListener("click", () => {
    //Adiciona o vento de ao clicar nas "barrinhas" adicionar ou remover o menu
    elements.menu.classList.toggle("sideMenuActive");
    elements.menuIcon.classList.toggle("menuBarActive");
  });
}

function updateCopyrights() {
  const date = new Date();
  const currentYear = date.getFullYear().toString();
  elements.copyRights.innerText = currentYear;
}

function adjustViewport() {
  let heightPresentation = window.innerHeight;
  console.log(`adjustViewport(${heightPresentation})`);
  if (heightPresentation <= 667) {
    console.log("Entrou no loop!");
    let sectionPresentation = document.getElementById("presentation");
    sectionPresentation.style.minHeight = heightPresentation + "px";

    let divDescription = document.querySelector(".presentation-description");
    divDescription
      .querySelectorAll("h1, h3, p, .description-buttons")
      .forEach((element) => {
        element.style.margin = "0";
        element.style.gap = "2rem";
      });

    let heightDescription = heightPresentation - 110;
    divDescription.style.minHeight = heightDescription + "px";
  }
}

// function sendMessage() {
//   function preventReload(event) {
//     //Impede o formulário de fazer reload na pagina
//     event.preventDefault();
//   }

//   function preparingMessage() {
//     let text = `
// Nome: ${elements.formName.value}

// E-mail: ${elements.formMail.value}

// Telefone: ${elements.formPhone.value}

// Assunto: ${elements.formSubject.value}

// Mensagem: ${elements.formMessage.value}
//     `;

//     let message = elements.formMessage.value.replace(" ", "%20");
//     console.log(message);

//     let text2 = `
//     https://api.whatsapp.com/send?phone=5569992691959&text=Nome%3A%20${elements.formName}%0A%0AE-mail%3A%20${elements.formMail}%0A%20%20%20%20%0ATelefone%3A%20${elements.formPhone}%0A%20%20%20%20%0AAssunto%3A%20${elements.formSubject}%0A%20%20%20%20%0AMensagem%3A%20message%20ipsum%20lorem
//     `;

//     console.log(text);
//   }

//   elements.form.addEventListener("submit", preventReload);
//   elements.formBtnSubmit.addEventListener("click", preparingMessage);
// }

window.onload = async () => {
  console.log("Script is running!");
  await mappingElements();
  await btnSideMenu();
  await removeSideMenuAfterClick();
  await adjustViewport();
  await updateCopyrights();
  // await sendMessage();
};
