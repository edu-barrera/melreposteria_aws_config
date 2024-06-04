const mensaje = document.createElement("div");
const containerForm = document.querySelector(".container");
const footer = document.querySelector(".footer");
const name = document.querySelector(".name");
//
(function () {
  // Public key en https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "nj_TNtUcAUozOvRJe",
  });
})(); // Inicializando servicio de emailjs

window.onload = function () {
  document
    .getElementById("contact-form") // Nombre de la form
    .addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("service_m32z9s6", "contact_form", this).then(
        () => {
          console.log("SUCCESS!");
          mensaje.classList.add("mensaje-exito");
          mensaje.innerHTML = `
          <div class="mensaje-exito">
          <h2>Gracias 🎉 ${this.name.value}</h2>
          <p>Hemos recibido tu mensaje, responderemos pronto 🍪.</p>
          <button class="btn-exito btn-cierre">De acuerdo!</button>
         </div>`; // mensaje que aparece cuando se mande el form por correo
          footer.insertAdjacentElement("beforebegin", mensaje);

          // Boton de cierre
          document
            .querySelector(".btn-cierre")
            .addEventListener("click", function () {
              mensaje.remove();
            });
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    });
};

//valores de los campos
const form = document.getElementsByTagName("form");
const nombre = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const telefono = document.getElementById("numCel").value.trim();
const message = document.getElementById("mensaje").value.trim();
const error = document.getElementById("error");

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

let isValid = true;

function validarForm() {
  if (nombre === "") {
    alert("Por favor ingrese su nombre.");
    isValid = false;
  }
  if (email === "") {
    alert("Por favor ingrese un correo válido");
    isValid = false;
  }
  if (isValid) {
    alert("Formulario enviado exitosamente!");
  }
}

let btnEnviar = document
  .getElementById("btnEnviar")
  .addEventListener("click", function (event) {
    event.preventDefault();
    validarForm();
  });

const numCel = document.getElementById("numCel");
document.getElementById("numCel").addEventListener("input", function () {
  const errorMessage = document.getElementById("error-message");
  const valNum = /^\d{10}$/;

  if (valNum.test(numCel.value)) {
    errorMessage.style.display = "none";
    numCel.style.borderColor = "initial";
  } else {
    errorMessage.style.display = "block";
    numCel.style.borderColor = "red";
  }
});

//formulario  evento  click
btnEnviar.addEventListener("click", validarForm); //no se llama a la funcion con parentesis
//estulo entrada invalida
function valido(elem) {
  elem.classList.remove("is-invalid");
  elem.classList.add("is-valid");
}
//Estilo entrada valida
function invalido(elem) {
  elem.value = "";
  elem.classList.add("is-invalid");
  elem.classList.remove("is-valid");
}
//funcion para validar las entradas del formulario
function validarForm(event) {
  event.preventDefault();
  let mensaje = "";
  if (nombreTest.test(nombre.value.trim()) == false) {
    mensaje += "Llenar el campo de nombre correctamente \n";
    invalido(nombre);
  } else {
    valido(nombre);
  }
  if (Email.test(email.value.trim()) == false) {
    mensaje +=
      "Llenar el campo de correo correctamente \nPor ejemplo: correo123@gmail.com \n";
    invalido(email);
  } else {
    valido(email);
  }
  if (Numero.test(telefono.value.trim()) == false) {
    mensaje += "Llenar el campo de telefono correctamente  \n";
    invalido(telefono);
  } else {
    valido(telefono);
  }
  if (Mensaje.test(message.value.trim()) == false) {
    mensaje += "El campo de mensaje esta vacio";
    invalido(message);
  } else {
    valido(message);
  }
  if (mensaje.length > 1) {
    alert(mensaje);
    isValid = false;
  } else {
    //reseteamos y borramos todo
    isValid = true;
    nombre.value = "";
    telefono.value = "";
    email.value = "";
    message.value = "";
    alert("Formulario enviado exitosamente!");
  }
}
