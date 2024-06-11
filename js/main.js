// const mensaje = document.createElement("div");
// const containerForm = document.querySelector(".container");
// const footer = document.querySelector(".footer");
// const name = document.querySelector(".name");
//
// (function () {
//   // Public key en https://dashboard.emailjs.com/admin/account
//   emailjs.init({
//     publicKey: "nj_TNtUcAUozOvRJe",
//   });
// })(); // Inicializando servicio de emailjs

// window.onload = function () {
//   document
//     .getElementById("contact-form") // Nombre de la form
//     .addEventListener("submit", function (event) {
//       event.preventDefault();

//       emailjs.sendForm("service_m32z9s6", "contact_form", this).then(
//         () => {
//           console.log("SUCCESS!");
//           mensaje.classList.add("mensaje-exito");

//           mensaje.innerHTML = `
//           <div class="mensaje-exito">
//           <h2>Gracias 🎉 ${this.name.value}</h2>
//           <p>Hemos recibido tu mensaje, responderemos pronto 🍪.</p>
//           <button class="btn-exito btn-cierre">De acuerdo!</button>
//          </div>`; // mensaje que aparece cuando se mande el form por correo
//           footer.insertAdjacentElement("beforebegin", mensaje);

//           // Boton de cierre
//           document
//             .querySelector(".btn-cierre")
//             .addEventListener("click", function () {
//               mensaje.remove();
//             });
//         },
//         (error) => {
//           console.log("FAILED...", error);
//         }
//       );
//     });
// };

// btnEnviar.addEventListener("submit", validarForm); //no se llama a la funcion con parentesis

//variables expresiones regulares formulario
// const nombreTest = /^[a-zA-Z\u00C0-\u017F\s]{3,70}$/;
// const emailValidacion = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const numeroValidacion = /^[0-9]{10}$/;
// const mensajeValidacion = /^[a-zA-Z\u00C0-\u017F\s]{2,}$/;
// const isValid = true;
// const btnEnviar = document.getElementById("btnEnviar");
///
// function validarForm(event) {
//   event.preventDefault();
//   if (nombreTest.test(nombre) == false) {
//     mensaje.innerHTML = `
//           <div>
//           <h2>Llena el campo de nombre correctamente</h2>
//          </div>`; // mensaje que aparece cuando se mande el form por correo
//     footer.insertAdjacentElement("beforebegin", mensaje);
//     invalido(nombre);
//   } else {
//     valido(nombre);
//   }
//   if (emailValidacion.test(email) == false) {
//     mensaje.innerHTML = `
//           <div>
//           <h2>Llenar el campo de correo correctamente \nPor ejemplo: correo123@gmail.com </h2>
//          </div>`; // mensaje que aparece cuando se mande el form por correo
//     footer.insertAdjacentElement("beforebegin", mensaje);
//     invalido(email);
//   } else {
//     valido(email);
//   }
//   if (numeroValidacion.test(telefono) == false) {
//     mensaje.innerHTML = `
//           <div>
//           <h2>Llenar el campo de telefono con 10 digitos numericos </h2>
//          </div>`; // mensaje que aparece cuando se mande el form por correo
//     footer.insertAdjacentElement("beforebegin", mensaje);
//     invalido(telefono);
//   } else {
//     valido(telefono);
//   }
//   if (mensajeValidacion.test(message) == false) {
//     mensaje.innerHTML = `
//           <div>
//           <h2>Llena el campo de mensaje correctamente. </h2>
//          </div>`; // mensaje que aparece cuando se mande el form por correo
//     footer.insertAdjacentElement("beforebegin", mensaje);
//     invalido(message);
//   }

//   if (mensaje.length > 1) {
//     alert(mensaje);
//     isValid = false;
//   } else {
//     //reseteamos y borramos todo
//   }
// }

function addItem(item) {
    const itemHTML = '<div class="card" style="width: 16rem;">\n' +
        '    <img src="' + item.img + '" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + item.name + '</h5>\n' +
        '        <p class="card-text">' + item.description + '</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({
    'name': 'juice',
    'img': 'https://www.gs1india.org/media/Juice_pack.jpg',
    'description': 'Orange and Apple juice fresh and delicious'
});

addItem({
    'name': 'Tayto',
    'img': 'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
    'description': 'Cheese & Onion Chips'
});

addItem({
    'name': 'Tayto',
    'img': 'https://i.pinimg.com/originals/c1/f8/a6/c1f8a671e1131e8bde4f3c8ec90949a6.jpg',
    'description': 'Cheese & Onion Chips'
});

addItem({
    'name': 'Tayto',
    'img': 'https://i.pinimg.com/originals/c1/f8/a6/c1f8a671e1131e8bde4f3c8ec90949a6.jpg',
    'description': 'Cheese & Onion Chips'
});



addItem({
    'name': 'Tayto',
    'img': 'https://i.pinimg.com/originals/c1/f8/a6/c1f8a671e1131e8bde4f3c8ec90949a6.jpg',
    'description': 'Cheese & Onion Chips'
});



addItem({
    'name': 'Tayto',
    'img': 'https://i.pinimg.com/originals/c1/f8/a6/c1f8a671e1131e8bde4f3c8ec90949a6.jpg',
    'description': 'Cheese & Onion Chips'
});


addItem({
    'name': 'Tayto',
    'img': 'https://i.pinimg.com/originals/c1/f8/a6/c1f8a671e1131e8bde4f3c8ec90949a6.jpg',
    'description': 'Cheese & Onion Chips'
});


addItem({
    'name': 'Tayto',
    'img': 'https://i.pinimg.com/originals/c1/f8/a6/c1f8a671e1131e8bde4f3c8ec90949a6.jpg',
    'description': 'Cheese & Onion Chips'
});


addItem({
    'name': 'Tayto',
    'img': 'https://i.pinimg.com/originals/c1/f8/a6/c1f8a671e1131e8bde4f3c8ec90949a6.jpg',
    'description': 'Cheese & Onion Chips'
});


addItem({
    'name': 'Tayto',
    'img': 'https://i.pinimg.com/originals/c1/f8/a6/c1f8a671e1131e8bde4f3c8ec90949a6.jpg',
    'description': 'Cheese & Onion Chips'
});


addItem({
    'name': 'Tayto',
    'img': 'https://i.pinimg.com/originals/c1/f8/a6/c1f8a671e1131e8bde4f3c8ec90949a6.jpg',
    'description': 'Cheese & Onion Chips'
});


addItem({
    'name': 'Tayto',
    'img': 'https://i.pinimg.com/originals/c1/f8/a6/c1f8a671e1131e8bde4f3c8ec90949a6.jpg',
    'description': 'Cheese & Onion Chips'
});


addItem({
    'name': 'Tayto',
    'img': 'https://i.pinimg.com/originals/c1/f8/a6/c1f8a671e1131e8bde4f3c8ec90949a6.jpg',
    'description': 'Cheese & Onion Chips'
});


addItem({
    'name': 'Tayto',
    'img': 'https://i.pinimg.com/originals/c1/f8/a6/c1f8a671e1131e8bde4f3c8ec90949a6.jpg',
    'description': 'Cheese & Onion Chips'
});

