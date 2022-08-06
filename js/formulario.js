const formulario = document.getElementById("zona__contacto");
const entradas = document.querySelectorAll("#zona__contacto input");
const textEntradas = document.querySelectorAll("#zona__contacto textarea");
const botonContacto = document.getElementById("boton__contacto");


const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  mensaje: /^[a-zA-Z0-9.+\s]{1,100}$/, // Letras y espacios, pueden llevar acentos.
};

const validarCampos = {
  nombre_input: false,
  mensaje_text: false,
};

const validacion = (e) => {
  switch (e.target.name) {
    case "nombre":
      validacionCajas(expresiones.nombre,e.target,"nombre_input","* Letras y espacios, no ingrese simbolos, maximo 40 caracteres");
      break;
    case "mensaje":
      ValidarCajaTexto(expresiones.mensaje,e.target,"mensaje_text","Mensaje a enviar Letras y espacios, no ingrese simbolos maximo 100 caracteres");
      break;
  }
};

const validacionCajas = (expresiones, entrada, campo, mensaje) => {
  if (expresiones.test(entrada.value)) {
    document.getElementById(`${campo}`).classList.remove("input-incorrecto");
    document.getElementById(`${campo}`).classList.add("input-correcto");
    document.getElementById(`${campo}`).style.borderColor = "green";
    document.getElementById("label_contenido").innerHTML = "";
    validarCampos[campo] = true;
    console.log(validarCampos[campo] + " " + campo);
  } else {
    document.getElementById(`${campo}`).classList.add("input-incorrecto");
    document.getElementById(`${campo}`).style.borderColor = "red";
    document.getElementById("label_contenido").classList.add("input-incorrecto");
    document.getElementById("label_contenido").innerHTML = mensaje;
    validarCampos[campo] = false;
    console.log(validarCampos[campo] + " " + campo);
  }
};

const ValidarCajaTexto = (expresiones, entrada, campo, mensaje) => {
  if (expresiones.test(entrada.value)) {
    
    document.getElementById(`${campo}`).classList.remove("input-incorrecto");
    document.getElementById(`${campo}`).classList.add("input-correcto");
    document.getElementById(`${campo}`).style.borderColor = "green";
    document.getElementById("label_contenido").innerHTML = "";
    validarCampos[campo] = true;
    console.log(validarCampos[campo] + " " + campo);
  } else {
    document.getElementById(`${campo}`).classList.add("input-incorrecto");
    document.getElementById(`${campo}`).style.borderColor = "red";
     document.getElementById("label_contenido").classList.add("input-incorrecto");
    document.getElementById("label_contenido").innerHTML = mensaje;
    validarCampos[campo] = false;
    console.log(validarCampos[campo] + " " + campo);
  }
};

entradas.forEach((input) => {
  input.addEventListener("keyup", validacion);
  input.addEventListener("blur", validacion);
});

textEntradas.forEach((textarea) => {
  textarea.addEventListener("keyup", validacion);
  textarea.addEventListener("blur", validacion);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const btnEnviar = document.querySelector("#boton__contacto");
  if (
    validarCampos.nombre_input &&
    validarCampos.mensaje_text
  ) {
    console.log(validarCampos);
    console.log("Formulario Enviado");
    // btnEnviar.disabled = true;
    formulario.reset();

    document.getElementById("label_contenido").innerHTML =
      "Datos enviados correctamente";
    document.getElementById("label_contenido").style.color = "#40e42a";
    document.getElementById("label_contenido").style.fontSize = "18px";

    setTimeout(function () {
      window.location.reload();
    }, 3000);
  } else {
    console.log(validarCampos);
    console.log("Formulario NO ENVIADO");
    document.getElementById("label_contenido").innerHTML =
      "Formulario No Enviado";
    document.getElementById("label_contenido").style.color = "#e40c0c";
    document.getElementById("label_contenido").style.fontSize = "18px";
  }
});
