const switchInput = document.getElementById('switch');

switchInput.addEventListener('change', function () {
  
  if (this.checked) {
    document.body.classList.add('dark-mode'); // Agrega la clase para modo oscuro
  } else {
    document.body.classList.remove('dark-mode'); // Remueve la clase de modo oscuro
  }
});