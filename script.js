let elements = {
  menu: "",
  menuIcon: "",
  logoIcon: "",
  copyRights: "",
  form: "",
  formName: "",
  formMail: "",
  formPhone: "",
  formSubject: "",
  formMessage: "",
  formBtnSubmit: "",
};

function mappingElements() {
  const body = document.querySelector("body");
  elements.menu = body.querySelector(".menu .links"); //Guarda todos o menu
  elements.menuIcon = body.querySelector(".side-menu .menu-icon"); //Guarda referencia das "barrinhas"
  elements.logoIcon = body.querySelector(".menu .logo");
  elements.copyRights = body.querySelector(".text-rights .current-year");

  // Cria uma variável com o formulário para pesquisar e apontar dentro dela todos os campos
  const form = body.querySelector(".contact form");
  elements.form = form;
  elements.formName = form.querySelector("#name");
  elements.formMail = form.querySelector("#email");
  elements.formPhone = form.querySelector("#phone");
  elements.formSubject = form.querySelector("#subject");
  elements.formMessage = form.querySelector("#message");
  elements.formBtnSubmit = form.querySelector(".btn-send-message");
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
  await mappingElements();
  await btnSideMenu();
  await removeSideMenuAfterClick();
  await updateCopyrights();
  // await sendMessage();
};
