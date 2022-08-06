const listaProductos = () => fetch('http://localhost:3000/productos').then(respuesta => respuesta.json());

const crearProducto = ( imagen, nombre, precio, categoria, descripcion, link, id) => { 
    return fetch('http://localhost:3000/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ imagen, nombre, precio, categoria, descripcion, link, id }),
    })
        .then(respuesta => {
            if (respuesta.ok) {
                return respuesta.body;
            }
            throw new Error('Error al crear el producto');
        });  // modificado
}

const borrarProducto = (id) => { 
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(respuesta => {
            if (respuesta.ok) {
                return respuesta.body;
            }
            throw new Error('Error al borrar el producto');
        }); 
}

export const productoServices = { listaProductos, crearProducto, borrarProducto, };