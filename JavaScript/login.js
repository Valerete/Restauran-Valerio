const cover_box = document.querySelector('.cover_box'); // Asegúrate de que el selector sea correcto
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');

// Función para mostrar el formulario de registro
registerLink.addEventListener('click', function() {
    document.querySelector('.login').classList.add('hidden'); // Oculta el formulario de login
    document.querySelector('.register').classList.remove('hidden'); // Muestra el formulario de registro
});

// Función para mostrar el formulario de login
loginLink.addEventListener('click', function() {
    document.querySelector('.register').classList.add('hidden'); // Oculta el formulario de registro
    document.querySelector('.login').classList.remove('hidden'); // Muestra el formulario de login
});

// Cierra el contenedor
iconClose.addEventListener('click', function() {
    cover_box.classList.remove('active'); // Desactiva el contenedor
});
