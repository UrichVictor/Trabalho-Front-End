const nav = document.querySelector('#menu');
const abrir = document.querySelector('#Abrirmenu');
const cerrar = document.querySelector('#fecharmenu');

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})