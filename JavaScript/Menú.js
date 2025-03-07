document.getElementById('search-box').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    let found = false; // Variable para verificar si se encontró una tarjeta

    // Mostrar solo la tarjeta que coincide con la búsqueda
    cards.forEach(card => {
        const h3Text = card.querySelector('h3').textContent.toLowerCase(); // Obtener texto del <h3>
        
        if (h3Text.includes(searchValue) && !found) { // Comprobar si incluye el texto de búsqueda y aún no se encontró
            card.style.display = 'block'; // Mostrar la tarjeta
            found = true; // Marcar que se encontró una tarjeta
        } else {
            card.style.display = 'none'; // Ocultar otras tarjetas
        }
    });

    // Si no se encuentra ninguna tarjeta, puedes agregar un mensaje o realizar otra acción
    if (!found) {
        console.log('No se encontró ninguna tarjeta.');
    }
});