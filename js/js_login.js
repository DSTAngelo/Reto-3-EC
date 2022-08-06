const alerta = document.getElementById("alertas");
const username = document.getElementById("email");
const password = document.getElementById("password");
const imagenLink = document.getElementById("logo_head");


// const btnAgregar = document.querySelector("#agregarProductos");

// btnAgregar.addEventListener("click", (e) => {
//   e.preventDefault();
//   especificar_formulario("agregar-productos.html");
// });

function tiempo() {
  const alertaTiempo = document.getElementById("alertas");
  alertaTiempo.innerHTML = "";
}



function login_autorizacion() {
  
  let username_valor = "admin@correo.com";
  let password_valor = "admin004";

  if (username.value == "") {
    alerta.classList.add("alerta");
    alerta.innerHTML = "Por favor ingrese su Email";
    console.log(username);
    event.preventDefault();
    setInterval(tiempo, 7000);
    username.focus();
    return false;
  }

  if (password.value == "") {
    alerta.classList.add("alerta");
    alerta.innerHTML = "Por favor ingrese su Password";
    console.log(password);
    event.preventDefault();
    setInterval(tiempo, 7000);
    password.focus();
    return false;
  }

  if (username.value == username_valor && password.value == password_valor) {
    alerta.classList.add("alerta");
    alerta.innerHTML = "Bienvenido";
    console.log(username + " " + password);
    event.preventDefault();
    setInterval(tiempo, 5000);
    especificar_formulario("agregar-productos.html");
    return true;
  }
   setInterval(tiempo, 7000);
   alerta.innerHTML = "Datos incorrectos";
}
