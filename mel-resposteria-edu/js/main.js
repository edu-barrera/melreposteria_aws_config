const mensaje = document.createElement("div");
const containerForm = document.querySelector(".container");
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
          <h2>Gracias 🎉</h2>
          <p>Hemos recibido tu mensaje, recibirás pronto una respuesta de nuestra parte.</p>
          <button class="btn-exito btn-cierre">De acuerdo!</button>
         </div>`; // mensaje que aparece cuando se mande el form por correo
          containerForm.insertAdjacentElement("afterend", mensaje);

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
const telefono = document.getElementById("telefono").value.trim();
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
