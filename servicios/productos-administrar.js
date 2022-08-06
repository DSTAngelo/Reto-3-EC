const listaProductos = () => fetch('http://localhost:3000/productos').then(respuesta => respuesta.json());

const crearProducto = ( imagen, nombre, precio, categoria, descripcion, link) => { 
    return fetch('http://localhost:3000/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({ imagen, nombre, precio, categoria ,descripcion, link })
        }) 
        .then(respuesta => {
            if(respuesta.ok) {
                return respuesta.body;
        } 
         throw new Error('Error al crear el producto');
    })
}

export const productoServices = { listaProductos, crearProducto,};