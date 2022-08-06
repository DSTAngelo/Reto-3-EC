import { productoServices } from '../servicios/productos-servicios.js';

const nuevoProducto = (imagen, nombre, precio, categoria ,descripcion, link ) => {
    const card = document.createElement('div');
    const contenido = `
            <img id="tarjetas__imagen__producto" class="imagen" src="${imagen}">
            <h3 class="nombre">${nombre}</h3>
            <h3 class="precio">${precio}</h3>
            <h3 class="descripcion">${descripcion}</h3>
            <a href="${link}" class="link">Ver Producto</a>
        `;
    card.innerHTML = contenido;
    card.classList.add('card');
    return card;
};
const productos = document.querySelector("[datos-productos]")
const render = async () => { 
    try {
        const listaProductos = await productoServices.listaProductos();
        listaProductos.forEach(elemento => { 
            productos.appendChild(nuevoProducto(elemento.imagen, elemento.nombre,
                elemento.precio, elemento.categoria, elemento.descripcion, elemento.link));
        });
    }catch(error){
        console.log(error);
    }
}

render()

