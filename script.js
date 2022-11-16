const form = document.getElementById('formulario');
const inputName = document.getElementById('inputName');
const inputNumberCard = document.getElementById('inputNumberCard');
const inputMM = document.getElementById('inputMM');
const inputAA = document.getElementById('inputAA');
const inputCVC = document.getElementById('inputCVC');

const cardName = document.getElementById('cardName');
const cardNumber = document.getElementById('cardNumber');
const cvcNumber = document.getElementById('cvcNumber');
const mmCard = document.getElementById('mmCard');
const aaCard = document.getElementById('aaCard');


form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  cardName.innerText = inputName.value;
  cardNumber.innerText = inputNumberCard.value;
  cvcNumber.innerText = inputCVC.value;
  mmCard.innerText = inputMM.value;
  aaCard.innerText = inputAA.value;
});

