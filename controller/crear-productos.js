import { productoServices } from "../servicios/productos-servicios.js";


function tiempo() {
  const alertaTiempo = document.getElementById("status");
  alertaTiempo.innerHTML = "";
  alertaTiempo.classList.remove("status-Offline");
}


function verificar(mensaje, consola) {
    const status = document.getElementById("status");
    status.classList.add("status-Offline");
    status.innerHTML = mensaje;
    console.log(consola);
    event.preventDefault();
    setInterval(tiempo, 7000);
}
 
/*  validacion Boton */
const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  
  evento.preventDefault();

  const imagen = document.querySelector("[data-imagen]").value;
  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const categoria = document.querySelector("[data-categoria]").value;
  const descripcion = document.querySelector("[data-descripcion]").value;
  const link = document.querySelector("[data-link]").value;
  
  if (imagen === "") {
    verificar("Campo Imagen vacio todos los campos son obligatorios",
      "campo imagen vacio");
    return false;
  }

  if (nombre === "") {
    verificar("Campo Nombre vacio todos los campos son obligatorios ", "campo nombre vacio");
    return false;
  }

  if (precio === "") {
    verificar("Campo Precio vacio todos los campos son obligatorios", "campo precio vacio");
    return false;
  }

  if (categoria === "") { 
    verificar("Campo Categoria vacio todos los campos son obligatorios", "campo categoria vacio");
    return false;
  }

   if (link === "") {
    verificar("Campo Link vacio todos los campos son obligatorios", "campo link vacio");
    return false;
  }
   

  if (descripcion === "") { 
    verificar("Campo Descripcion vacio todos los campos son obligatorios", "campo descripcion vacio");
    return false;
  }

  else {
    
    productoServices
      .crearProducto(imagen, nombre, precio, categoria, descripcion, link)

      .then((respuesta) => {
        alert("Producto creado correctamente");
        status.classList.add("status-Online");
        status.innerHTML = "Producto creado correctamente";
        window.location.href = "/agregar-productos.html";
        console.log(respuesta);
      })
      .catch((error) => {
        console.log(error);
        status.classList.add("status-Offline");
        status.innerHTML = "Error al crear el producto";
        alert("Error al crear el producto");
        window.location.href = "/agregar-productos.html";
      })
  }
});





