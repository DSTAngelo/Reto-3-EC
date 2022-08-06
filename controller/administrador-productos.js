import { productoServices } from '../servicios/productos-servicios.js';

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

const nuevoProducto = (imagen, nombre, precio, categoria ,descripcion, link, id) => {
    const card = document.createElement('div');
    const contenido = `
                
            <img id="tarjetas__imagen__producto" class="imagen" src="${imagen}">
            
            <div class="columnaB">
                <h3 class="nombre texto-estilo">${nombre}</h3>
                <h3 class="precio texto-estilo">${precio}</h3>
                <h3 class="descripcion texto-estilo">${descripcion}</h3>
                <a href="${link}" class="link texto-estilo">Ver Producto</a>
            </div>
            <div class="columnaC">
                <button type="submit" class="editar boton-estilo">Editar</button>
                <button type="submit" class="eliminar boton-estilo" id="${id}">Eliminar</button>
            </div>
            
        `;
    card.innerHTML = contenido;
    card.classList.add('card');

    const btnDelete = card.querySelector('.eliminar');
    btnDelete.addEventListener('click', () => {
        const id = btnDelete.id;
        console.log("click", id);

        productoServices.borrarProducto(id).then(respuesta => {
            
            console.log(respuesta);
            alert("Producto eliminado");

        })
            .catch(error => alert("error"));
    });

    return card;
};

const productos = document.querySelector("[datos-productos]")
const render = async () => { 
    try {
        const listaProductos = await productoServices.listaProductos();
        listaProductos.forEach(elemento => { 
            productos.appendChild(nuevoProducto(elemento.imagen, elemento.nombre,
                elemento.precio, elemento.categoria, elemento.descripcion, elemento.link, elemento.id));
        });
    }catch(error){
        console.log(error);
    }
}



render()

