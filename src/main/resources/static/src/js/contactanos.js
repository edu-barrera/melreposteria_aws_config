// Part 1: EmailJS initialization and form submission
(function () {
  // Public key en https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "03ig6izIYBUPnZ1qs",
  });
})(); // Inicializando servicio de emailjs

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", validarForm);
};

// Part 2: Form validation

// Form inputs
const nombre = document.getElementById("name");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const message = document.getElementById("mensaje");
let btnEnviar = document.getElementById("btnEnviar");
const containerForm = document.querySelector("#container");

//Función para mensaje de error en caso de form incompleto
const errorMensaje = function (elem) {
  const parentText = elem.parentNode.textContent;
  const confirmacion = document.createElement("div");
  document.createElement("div");
  confirmacion.classList.add("mensaje-exito");
  if (confirmacion) {
    confirmacion.remove();
  }
  confirmacion.innerHTML = `
      <div class="mensaje-incompleto">
        <h2>Formulario incompleto <span> <img class="osito-error" src="src/Iconos/sad_teddy.webp" alt=""></span> </h2>
        <p> ${
          nombre.value ? nombre.value + "," : ""
        } Por favor completa la sección ${parentText}</p>
        <button class="btn-exito btn-cierre">Ok</button>
      </div>`; // Mensaje al tratar de mandar form incompleto

  containerForm.insertAdjacentElement("afterend", confirmacion);

  document.querySelector(".btn-cierre").addEventListener("click", function () {
    confirmacion.remove();
  });
};


// Expresiones regulares para validación
let nombreTest = /^[a-zA-Z\u00C0-\u017F\s]{3,70}$/; // Validar nombres con letras (incluyendo caracteres acentuados) y espacios, entre 3 y 70 caracteres
let emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validar correos electrónicos con el formato estándar
let numeroTest =  /^(?!0)\d{1}(?!.*(\d)\1{4})(?!.*0{4})\d{9}$/; // no pueden empezar con 0, tampoco pueden tener numeros repetidos 4 veces despues de los 2 primeros y el numero debe de tener 10 digitos y solo 3 0 repetidos consecutivos
let mensajeTest = /^[a-zA-Z\u00C0-\u017F\s]{2,}$/; // Validar mensajes con letras y espacios, con un mínimo de 2 caracteres

// Función para estilizar un input válido
function valido(elem) {
  elem.classList.remove("is-invalid"); // Remover la clase de estilo inválido
  elem.classList.add("is-valid"); // Agregar la clase de estilo válido
}

// Función para estilizar un input inválido
function invalido(elem) {
  elem.classList.add("is-invalid"); // Agregar la clase de estilo inválido
  elem.classList.remove("is-valid"); // Remover la clase de estilo válido
  errorMensaje(elem); // Llamar a la función que maneja el mensaje de error
}

// Form validation function
function validarForm(event) {
  event.preventDefault();

  // Remove previous success messages if any
  const existingSuccess = document.querySelectorAll(".mensaje-exito");
  existingSuccess.forEach(function (element) {
    element.remove();
  });

  let formValid = true; // Flag to track form validity

  // Validate nombre
  if (!nombreTest.test(nombre.value.trim())) {
    invalido(nombre, "nombre");
    formValid = false;
  } else {
    valido(nombre);
  }

  // Validate email
  if (!emailTest.test(email.value.trim())) {
    invalido(email, "email");
    formValid = false;
  } else {
    valido(email);
  }

  // Validate telefono
  if (!numeroTest.test(telefono.value.trim())) {
    invalido(telefono, "telefono");
    formValid = false;
  } else {
    valido(telefono);
  }

  // Validate message
  if (!mensajeTest.test(message.value.trim())) {
    invalido(message, "mensaje");
    formValid = false;
  } else {
    valido(message);
  }

  // If all fields are valid, send the email
  if (formValid) {
    // emailjs
    //   .sendForm(
    //     "service_id",
    //     "template_n1197vv",
    //     document.getElementById("contact-form")
    //   )
    //   .then(

    console.log("SUCCESS!");

    const confirmacion = document.createElement("div");
    confirmacion.classList.add("mensaje-exito");
    confirmacion.innerHTML = `
            <div class="mensaje-exito">
              <h2>Gracias 🎉 ${nombre.value}</h2>
              <p>Hemos recibido tu mensaje y te responderemos pronto. 🍪 </p>
              <button class="btn-exito btn-cierre">Ok</button>
            </div>`;
    containerForm.insertAdjacentElement("afterend", confirmacion);

    document
      .querySelector(".btn-cierre")
      .addEventListener("click", function () {
        confirmacion.remove();
      });

    // Reset form fields
    nombre.value = "";
    email.value = "";
    telefono.value = "";
    message.value = "";

    // },
    //   (error) => {
    //     console.log("FAILED...", error);
    //   };
    // );
  }
}
