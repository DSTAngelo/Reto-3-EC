npm init -y
npm i json-server
npm run server


import { productoServices } from '../servicios/productos-servicios.js';

const nuevoProducto = (imagen, nombre, precio, descripcion) => {
    const card = document.createElement('div');
    const contenido = `
            <img id="tarjetas__imagen__producto" class="imagen" src="${imagen}">
            <h3 class="nombre">${nombre}</h3>
            <h3 class="precio">${precio}</h3>
            <h3 class="descripcion">${descripcion}</h3>
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
            productos.appendChild(nuevoProducto(elemento.imagen, elemento.nombre, elemento.precio, elemento.descripcion));
        });
    }catch(error){
        console.log(error);
    }
}

render()

/*

// <h3 class="categoria">${categoria}</h3>



<!-- Agregar Productos        -->
        <section class="agregar">
            <div class="contenedor__formulario">
                <div class="drop-area">
                    <i class="fa-solid fa-image"></i>
                    <p>Arrastre para Agregar Imagen de Producto</p>
                </div>
                <button type="submit" class="boton_drop">Busque en su PC</button>
                <input type="file" name="" id="input-file" hidden="hidden" multiple="multiple">

                <form id="formulario__login" class="formulario__login" data-form> 
                    <div class="form-campos">
                        <span id="preview" name="imagen"  required data-imagen >---</span>
                        <!-- <input type="text" name="Imagen" id="input-file"  multiple="multiple"> -->
                        <input type="text" name="Agregar-nombre" id="campo_nombre" class="campo_nombre input__caja" placeholder="Nombre del Producto" data-nombre>
                        <input type="number" name="Agregar-precio" id="campo_precio" class="campo_precio input__caja" placeholder="Precio del Producto" data-precio>
                        <input type="text" name="Agregar-categoria" id="campo_categoria" class="campo_categoria input__caja" placeholder="Categoria" data-categoria>
                        <input type="text" name="Agregar-url" id="campo_url" class="campo_url input__caja" placeholder="Url Consulta de descripcion" data-link>
                        <textarea  name="descripcion" id="formulario__textarea" class="campo_descripcion input__textarea" rows="5" cols="38" 
                            placeholder="Descripción del producto" maxlength="300" data-descripcion></textarea>
                        
                        <button type="submit" id="boton__agregar" class="boton__agregar">Agregar Producto</button>
                        <span id="status">---</span>
                    </div>
                </form>
            </div>
        </section>
<!-- final Agregar -->

/* codigo alterno validacion de formulario */

function verificar(mensaje, consola) {
    const status = document.getElementById("status");
    status.classList.add("status-Offline");
    status.innerHTML = mensaje;
    console.log(consola);
    event.preventDefault();
    setInterval(tiempo, 7000); 
    return false;
 }

    function tiempo() {
        const status = document.getElementById("status");
        status.classList.remove("status-Offline");
        status.innerHTML = "";
    }