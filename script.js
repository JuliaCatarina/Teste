var vermelho = 0;
var verde = 0;
var azul = 0;
var on_vermelho = document.querySelector("#ON_vermelho");
var off_vermelho = document.querySelector("#OFF_vermelho");
var status_vermelho = document.querySelector("#status_vermelho");
var on_verde = document.querySelector("#ON_verde");
var off_verde = document.querySelector("#OFF_verde");
var status_verde = document.querySelector("#status_verde");
var on_azul = document.querySelector("#ON_azul");
var off_azul = document.querySelector("#OFF_azul");
var status_azul = document.querySelector("#status_azul");

on_vermelho.addEventListener("click", function () {
    vermelho = 1;
    status_vermelho.textContent = "ON";
});
off_vermelho.addEventListener("click", function () {
    vermelho = 0;
    status_vermelho.textContent = "OFF";
});
on_verde.addEventListener("click", function () {
    verde = 1;
    status_verde.textContent = "ON";
});
off_verde.addEventListener("click", function () {
    verde = 0;
    status_verde.textContent = "OFF";
});
on_azul.addEventListener("click", function () {
    azul = 1;
    status_azul.textContent = "ON";
});
off_azul.addEventListener("click", function () {
    azul = 0;
    status_azul.textContent = "OFF";
});
