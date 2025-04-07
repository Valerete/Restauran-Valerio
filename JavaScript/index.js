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


const cartClose = document.querySelector("#cart-close");
const cart = document.getElementById('cart-items-container');
cartClose.addEventListener("click", () => {
    cart.classList.remove("active")
});

const addCartButtons = document.querySelectorAll (".fas fa-shopping-cart");
addCartButtons.forEach(button => {
button.addEventListener("click", event =>{
    const productBox = event.target.closest(".box");
    addTocart(box); 
});
});

const cartcontent = document.querySelector(".cart-content");

const addToCart =  box => {

    const productImgsrc = box.querySelector("img").src;
    const productTitle = box.querySelector(".product-title").textcontent;
    const productPrice = box.querySelector(".price").textcontent;
   
    const cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");
    cartBox.innerHTML = `
    
     <span class="fas fa-times"></span>
       <img src="${productImgsrc} alt="">
       <div class="content">
        <h3 class="product-title">${productTitle}</h3>
        <span class="price">${productPrice}</span>
        <div class="cart-quantity">
          <button id="decrement">-</button>
          <span class="number">1</span>
          <button id="increment">+</button>
        </div>
       </div>
       <i class="ri-delete-bin-line cart-remove"></i>
    </div>
    
    `; 

    cartcontent.appendChild(cartBox);
};