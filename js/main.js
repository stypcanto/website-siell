const switchInput = document.getElementById('switch');
const menuHamButton = document.querySelector('.hamburger-menu');  //Icono de las tres rayitas
const mobileMenu = document.querySelector('.mobile-menu'); //Clase mobile-menu
const content = document.querySelector('.content');

// Agregar event listeners a los elementos seleccionados
menuHamButton.addEventListener('click', toggleMenu); // Corrección de la variable a menuHamButton




switchInput.addEventListener('change', function () {

  if (this.checked) {
    document.body.classList.add('dark-mode'); // Agrega la clase para modo oscuro
  } else {
    document.body.classList.remove('dark-mode'); // Remueve la clase de modo oscuro
  }
});



function toggleMenu() { // Cambio de nombre de función para ser coherente
  mobileMenu.classList.toggle('active'); // Cambia la clase para mostrar u ocultar el menú
  // Si el menú está activo, oculta el contenido; de lo contrario, muestra el contenido
  if (mobileMenu.classList.contains('active')) {
    content.style.display = 'none';
  } else {
    content.style.display = 'block'; // O cualquier otro valor de display que corresponda
  }
}



// Agrega este event listener para todos los enlaces del menú móvil
const enlacesMenuMovil = mobileMenu.querySelectorAll('a'); // Usa 'a' para seleccionar los enlaces
enlacesMenuMovil.forEach(enlace => {
  enlace.addEventListener('click', () => {
    mobileMenu.classList.remove('active'); // Usa 'active' en lugar de 'activo'
    content.style.display = 'block';
  });
});



function enviarformulario() {
  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value;
  const codigo_pais = document.getElementById("codigo_pais").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;

  // Realiza la validación para cada campo
  if (nombre === "") {
      alert("!Falta el campo Nombre!");
  } else {
      console.log("Nombre:", nombre);
  }

  if (apellidos === "") {
      alert("!Falta el campo Apellidos!");
  } else {
      console.log("Apellidos:", apellidos);
  }

  if (codigo_pais === "") {
      alert("!Falta seleccionar el Código de País!");
  } else {
      console.log("Código de País:", codigo_pais);
  }

  if (telefono === "") {
      alert("!Falta el campo Teléfono!");
  } else {
      console.log("Teléfono:", telefono);
  }

  if (correo === "") {
      alert("!Falta el campo Correo Electrónico!");
  } else {
      console.log("Correo Electrónico:", correo);
  }

  if (mensaje === "") {
      alert("!Falta el campo Mensaje!");
  } else {
      console.log("Mensaje:", mensaje);
  }

  alert("Información enviada");
}

