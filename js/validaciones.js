const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
  descripcion: /^[a-zA-Z0-9.+\s]{1,150}$/, // Letras y espacios, pueden llevar acentos.
};

const validarCampos = {
  Agregar_nombre: false,
  descripcion: false,
};

const validacion = (e) => {
  switch (e.target.name) {
    case "nombre":
      validacionCajas(
        expresiones.nombre,
        e.target,
        "Agregar_nombre",
        "Maximo 40 caracteres"
      );
      break;
    case "descripcion":
      ValidarCajaTexto(
        expresiones.descripcion,
        e.target,
        "descripcion",
        "Maximo 150 caracteres"
      );
      break;
  }
};


const validacionCajas = (expresiones, entrada, campo, mensaje) => {
  if (expresiones.test(entrada.value)) {
    // document.getElementById(`${campo}`).classList.remove("input-incorrecto");
    // document.getElementById(`${campo}`).classList.add("input-correcto");
    document.getElementById(`${campo}`).style.borderColor = "green";
    document.getElementById("status").innerHTML = "";
    validarCampos[campo] = true;
    console.log(validarCampos[campo] + " " + campo);
  } else {
    // document.getElementById(`${campo}`).classList.add("input-incorrecto");
    document.getElementById(`${campo}`).style.borderColor = "red";
    // document.getElementById("label_contenido").classList.add("input-incorrecto");
    document.getElementById("status").innerHTML = mensaje;
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