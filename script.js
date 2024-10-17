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
  elements.menu = body.querySelector(".menu .links"); // Guarda todo o menu
  elements.menuIcon = body.querySelector(".menu .side-menu"); // Guarda referência das "barrinhas"
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

  // Adiciona a máscara no campo de telefone
  elements.formPhone.addEventListener("input", () =>
    maskPhone(elements.formPhone)
  );
}

// Função para aplicar a máscara no telefone
function maskPhone(phoneField) {
  let phone = phoneField.value;

  // Remove todos os caracteres que não sejam números
  phone = phone.replace(/\D/g, "");

  // Adiciona os parênteses em torno do DDD e o hífen entre os dígitos
  phone = phone.replace(/^(\d{2})(\d)/g, "($1) $2");
  phone = phone.replace(/(\d)(\d{4})$/, "$1-$2");

  // Atualiza o valor do campo
  phoneField.value = phone;
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
    // Adiciona o vento de ao clicar nas "barrinhas" adicionar ou remover o menu
    elements.menu.classList.toggle("sideMenuActive");
    elements.menuIcon.classList.toggle("menuBarActive");
  });
}

function updateCopyrights() {
  console.log("updateCopyrights()");
  const date = new Date();
  const currentYear = date.getFullYear().toString();
  elements.copyRights.innerText = currentYear;
}

function sendMessage() {
  // Impede o formulário de fazer reload na página ao submeter
  elements.form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Preparar a mensagem para envio via WhatsApp
    const name = elements.formName.value;
    const email = elements.formMail.value;
    const phone = elements.formPhone.value;
    const subject = elements.formSubject.value;
    const message = elements.formMessage.value;

    // Criar a mensagem formatada
    const formattedMessage = `Nome: ${name}%0AEmail: ${email}%0ATelefone: ${phone}%0AAssunto: ${subject}%0AMensagem: ${message}`;
    const whatsappNumber = "5569992691959";
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${formattedMessage}`;

    // Para abrir o WhatsApp com a mensagem
    window.open(whatsappURL, "_blank");
  });
}

window.onload = () => {
  console.log("Script is running!");
  mappingElements();
  btnSideMenu();
  removeSideMenuAfterClick();
  updateCopyrights();
  sendMessage(); // Inicia a função de envio de mensagem
};
