$(document).ready(function(){
let hamburger = document.querySelector('.hamburger-menu');

let firstSpan = document.querySelector('.first')
let secSpan = document.querySelector('.second')
let lastSpan = document.querySelector('.last')

let modal = document.querySelector('.inactive')


hamburger.onclick = function () {
    firstSpan.classList.toggle('activeFirst')
    firstSpan.classList.toggle('first')
    secSpan.classList.toggle('activeSec')
    secSpan.classList.toggle('second')
    lastSpan.classList.toggle('activeLast')
    lastSpan.classList.toggle('last')
    modal.classList.toggle('modal-window')
    modal.classList.toggle('inactive')
};







    $('#number').inputmask("aa-9999");  //static mask
    $('#number').inputmask({mask: "aa-9999"});  //static mask
  



  });