const btnpopup = document.querySelector('.btnLogin-popup');
const cover_box = document.querySelector('.cover-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');

function activateCoverBox(){
    cover_box.classList.add('active');
}

function deactivateCoverBox(){
    cover_box.classList.remove('active');
}


function activatepopup(){
    cover_box.classList.add('active-popup');
}

function deactivateCoverpopup(){
    cover_box.classList.remove('active-popup');
}

registerLink.addEventListener('click', activateCoverBox);
loginLink.addEventListener('click', deactivateCoverBox);
btnpopup.addEventListener('click', activatepopup);
iconClose.addEventListener('click', deactivateCoverpopup);
