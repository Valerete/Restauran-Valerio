let navbar = document.querySelector('.navbar');

document.querySelector('#Menú-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');


}
let SearchForm= document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    SearchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');


}

let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active'); 
    navbar.classList.remove('active');
    SearchFormearchform.classList.remove('active');
   


}
window.onscroll = () =>{
    navbar.classList.remove('active');
    SearchForm.classList.remove('active');
    cartItem.classList.remove('active');

}
