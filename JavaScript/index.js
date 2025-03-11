let navbar = document.querySelector('.navbar');

document.querySelector('#Menú-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
searchForm.classList.toggle('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
cartItem.classList.toggle('active');
}

function mostrarReservacion(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario

    // Obtener los valores de los campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const date = document.getElementById('date').value;

    // Crear el mensaje de confirmación
    const confirmationMessage = `
    <h3 class="confirmation-title">Reservación Confirmada</h3>
    <p class="confirmation-item">Nombre: <strong>${name}</strong></p>
    <p class="confirmation-item">Email: <strong>${email}</strong></p>
    <p class="confirmation-item">Número: <strong>${number}</strong></p>
    <p class="confirmation-item">Fecha: <strong>${date}</strong></p>
`;
    // Mostrar el mensaje de confirmación
    const confirmationDiv = document.getElementById('confirmation');
    confirmationDiv.innerHTML = confirmationMessage;
    confirmationDiv.style.display = 'block'; // Hacer visible el mensaje

    // Limpiar el formulario
    document.querySelector('.Contactos form').reset();
}