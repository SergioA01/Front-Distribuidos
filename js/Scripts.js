//variables locales

var overlayPerfil = document.getElementById("overlayPerfil");
var popupPerfil = document.getElementById("popupPerfil");

var overlayPago = document.getElementById("overlayPago")
var popupPago = document.getElementById("popupPago");

var overlayInmueble = document.getElementById("overlayInmueble");
var popupInmueble = document.getElementById("popupInmueble");

function mostrarPerfil(){
    overlayPago.classList.remove('active');
    overlayInmueble.classList.remove('active');
    popupPerfil.classList.add('active');
    overlayPerfil.classList.add('active');
}

function mostrarPago(){
    overlayPerfil.classList.remove('active');
    overlayInmueble.classList.remove('active');
    popupPago.classList.add('active');
    overlayPago.classList.add('active');
}

function mostrarInmueble(){
    overlayPerfil.classList.remove('active');
    overlayPago.classList.remove('active');
    popupInmueble.classList.add('active');
    overlayInmueble.classList.add('active');
}