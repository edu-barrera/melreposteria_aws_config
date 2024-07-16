// mostrar alertas de bootstrap
function mostrarAlerta(campoId, mensaje, tipo = "warning") {
  const alertContainer = document.getElementById(campoId);
  if (alertContainer) {
    alertContainer.innerText = mensaje;
    alertContainer.className = `alert alert-${tipo}`;
    alertContainer.style.display = "block";
  }
}
// ocultaar alertas de bootstrap
function ocultarAlerta(campoId) {
  const alertContainer = document.getElementById(campoId);
  if (alertContainer) {
    alertContainer.style.display = "none";
  }
}

// ==============================REGISTRO =============================================//

const registroForm = document.querySelector("#registroFormulario");
registroForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // ocultar las alertas al iniciar la validación
  ocultarAlerta("nameAlert");
  ocultarAlerta("emailRegistroAlert");
  ocultarAlerta("telefonoAlert");
  ocultarAlerta("passwordRegistroAlert");
  ocultarAlerta("passwordConfirmAlert");
  ocultarAlerta("registroSuccessAlert");

  const nombre = document.querySelector("#name").value;
  const telefono = document.querySelector("#telefono").value;
  const emailRegistro = document.querySelector("#emailRegistro").value;
  const contraseñaRegistro = document.querySelector("#passwordRegistro").value;
  const confirmContraseña = document.querySelector("#passwordConfirm").value;

  const nombreForm = document.getElementById("name");
  const telefonoForm = document.getElementById("telefono");
  const emailRegistroForm = document.getElementById("emailRegistro");
  const contraseñaRegistroForm = document.getElementById("passwordRegistro");
  const confirmContraseñaForm = document.getElementById("passwordConfirm");

  // expresiones regulares y validaciones
  //const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //const telefonoRegex = /^[1-9]\d{9}$/;
  //const contraseñaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // expresiones regulares y validaciones
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telefonoRegex = /^(?!0)\d{1}(?!.*(\d)\1{4})(?!.*0{4})\d{9}$/; //solo numeros como entrada , no se permite numeros repetidos consecutivamente 5 veces ni que empiezen con 0, y solo se puede repetir 3 veces seguidas el 0
  const contraseñaRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/; //contraeña con IhateRegEx para contraeñas con 1 Mayuscula,1 minuscula, 1 numero, 1 caracter especial de los siguientes  " #?!@$ %^&*- "

  let errores = false;

  if (!emailRegex.test(emailRegistro)) {
    mostrarAlerta("emailRegistroAlert", "Email no válido.");
    errores = true;
  }

  if (!telefonoRegex.test(telefono)) {
    mostrarAlerta(
      "telefonoAlert",
      "Teléfono no válido. Debe contener 10 dígitos, no se permiten números repetidos consecutivamente.\nEjemplo: 5522446688"
    );
    errores = true;
  }

  if (!contraseñaRegex.test(contraseñaRegistro)) {
    mostrarAlerta(
      "passwordRegistroAlert",
      "La contraseña no es válida. Debe contener al menos 8 caracteres, incluyendo al menos una mayúscula, una minúscula, un número y uno de los siguientes caracteres especiales: `#?!@$%^&*-`\nEjemplo: Contr4$eña"
    );
    errores = true;
  }

  if (contraseñaRegistro !== confirmContraseña) {
    mostrarAlerta("passwordConfirmAlert", "Las contraseñas no coinciden.");
    errores = true;
  }

  if (errores) {
    return;
  }

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    nombre: nombre,
    telefono: telefono || null,
    email: emailRegistro,
    password: contraseñaRegistro,
    calleNumero: null,
    colonia: null,
    codigoPostal: null,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://18.118.13.214/api/clientes/", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          mostrarAlerta("emailRegistroAlert", "Error al registrar el usuario.")
        );
      }
      return response.text(); // Read the response as text
    })
    .then((responseText) => {
      console.log("Raw response:", responseText); // Log the raw response text
      try {
        const result = JSON.parse(responseText); // Parse the text as JSON
        mostrarAlerta("registroSuccessAlert", "Registro exitoso", "success");
        nombreForm.value = "";
        telefonoForm.value = "";
        emailRegistroForm.value = "";
        contraseñaRegistroForm.value = "";
        confirmContraseñaForm.value = "";
      } catch (e) {
        console.error("Error parsing JSON:", e);
        mostrarAlerta("emailRegistroAlert", "Error parsing server response.");
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      mostrarAlerta("emailRegistroAlert", "Error en el proceso de registro.");
    });
});

// =========================================== LOGIN ============================================/////
// =========================================== LOGIN ============================================/////
const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // ocultar alertas al iniciar la validación
  ocultarAlerta("emailLoginAlert");
  ocultarAlerta("passwordLoginAlert");

  const email = document.querySelector("#emailLogin").value;
  const contraseña = document.querySelector("#passwordLogin").value;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    email: email,
    password: contraseña,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("/api/login/", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Correo y/o contraseña incorrectos.");
      }
      return response.json();
    })
    .then((result) => {
      const { accessToken } = result;
      mostrarAlerta(
        "emailLoginAlert",
        `Bienvenido!!`,
        "success"
      );
      sessionStorage.setItem(
        "usuarios",
        JSON.stringify({ email, password: contraseña })
      );
      sessionStorage.setItem("Bearer", `Bearer ${accessToken}`);

      myHeaders.append("Authorization", `Bearer ${accessToken}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch("/api/clientes/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          console.log(result[0]);
          for (let i = 0; i < result.length; i++) {
            if (result[i].email === email) {
              sessionStorage.setItem("Nombre", result[i].nombre);
              setTimeout(() => {
                ocultarAlerta("emailLoginAlert");
                // redireccionar a la página principal
                window.location.href = "index.html";
              }, 2000);
            }
          }
        })
        .catch((error) => console.error(error));
    })
    .catch((error) => {
      console.error(error);
      mostrarAlerta("emailLoginAlert", error.message);
    });
});
