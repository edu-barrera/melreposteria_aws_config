//valores de los campos
const form = document.getElementsByTagName("form");
const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const telefono = document.getElementById("telefono").value.trim();
const message = document.getElementById("mensaje").value.trim();
const error = document.getElementById("error");

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

let isValid = true; 

function validarForm(){
    if (name === ""){
        alert("Por favor ingrese su nombre.");
        isValid = false;
    }
    if (email === ""){
        alert("Por favor ingrese un correo válido");
        isValid = false;
    }
    if (isValid) {
        alert("Formulario enviado exitosamente!");
  }
}
let btnEnviar = document.getElementById("btnEnviar").addEventListener("click", function(event){
    event.preventDefault();
    validarForm();
});