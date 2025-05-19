let navbar = document.querySelector('.navbar')
const CarItems = document.querySelectorAll(".box")

console.log("xxxxs")
console.log(CarItems)

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


const cartClose = document.querySelector("#cart-close");
const cart = document.getElementById('cart-items-container');
cartClose.addEventListener("click", () => {
    cart.classList.remove("active")
});



const cartContent = document.querySelector(".cart-content");
const totalPriceElement = document.querySelector(".total-price");

// Función para agregar un producto al carrito
const addToCart = (productBox) => {
    const productImgSrc = productBox.querySelector("img").src;
    const productTitle = productBox.querySelector(".product-title").textContent;
    const productPrice = productBox.querySelector(".price").textContent;

    const existingItem = Array.from(cartContent.querySelectorAll(".cart-item")).find(item => {
        return item.querySelector(".product-title").textContent === productTitle;
    });

    if (existingItem) {
        const quantitySpan = existingItem.querySelector(".number");
        quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
    } else {
        const cartBox = document.createElement("div");
        cartBox.classList.add("cart-item");
        cartBox.innerHTML = `
            <span class="fas fa-times"></span>
            <img src="${productImgSrc}" alt="${productTitle}">
            <div class="content">
                <h3 class="product-title">${productTitle}</h3>
                <span class="price">${productPrice}</span>
                <div class="cart-quantity">
                    <button class="decrement">-</button>
                    <span class="number">1</span>
                    <button class="increment">+</button>
                </div>
            </div>
        `;
        cartContent.appendChild(cartBox);
        setupQuantityButtons(cartBox);
    }

    updateTotal();
};


// Función para actualizar el total
const updateTotal = () => {
    let total = 0;
    const cartItems = cartContent.querySelectorAll(".cart-item");
    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector(".price").textContent.replace("$", ""));
        const quantity = parseInt(item.querySelector(".number").textContent);
        total += price * quantity;
    });
    totalPriceElement.textContent = `$${total}`;
};

// Función para agregar los eventos de incrementar y decrementar
const setupQuantityButtons = () => {
    const quantityButtons = cartContent.querySelectorAll(".cart-item");
    quantityButtons.forEach(item => {
        const incrementButton = item.querySelector(".increment");
        const decrementButton = item.querySelector(".decrement");
        const quantitySpan = item.querySelector(".number");

        incrementButton.addEventListener("click", () => {
            quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
            updateTotal();
        });

        decrementButton.addEventListener("click", () => {
            if (parseInt(quantitySpan.textContent) > 1) {
                quantitySpan.textContent = parseInt(quantitySpan.textContent) - 1;
                updateTotal();
            }
        });

        const removeButton = item.querySelector(".fas.fa-times");
        removeButton.addEventListener("click", () => {
            item.remove();
            updateTotal();
        });
    });
};
console.log(CarItems)

CarItems.forEach(element => {
    console.log(element)
    element.addEventListener("click", ()=> {
        console.log("aqui")
        addToCart(element)
    })
});

// Llamar a la función para configurar los botones de cantidad
setupQuantityButtons();
updateTotal(); // Inicializar el total al cargar


