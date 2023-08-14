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



