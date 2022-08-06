function especificar_formulario(formulario) {
  location.href = formulario;
}

function navegacion_Link() {
  imagenLink.addEventListener("click", function () {
    especificar_formulario("index.html");
  });
}

