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
   
  cardName.innerHTML = inputName.value;

  if(inputNumberCard.value.length == 16 ){
    cardNumber.innerHTML = inputNumberCard.value;
  }

  if(inputCVC.value.length == 3){
    cvcNumber.innerHTML = inputCVC.value;
  }
  
  if(inputMM.value.length == 2){
    mmCard.innerHTML = inputMM.value;
  } 

  if(inputAA.value.length == 2){
    aaCard.innerHTML = inputAA.value;
  } 

});

function inputNameImpress(val) {
  document.getElementById("cardName").innerHTML = val; 
}

function inputNumberImpress(val) {
  document.getElementById("cardNumber").innerHTML = val; 
}

function inputMMImpress(val) {
  document.getElementById("mmCard").innerHTML = val; 
}

function inputAAImpress(val) {
  document.getElementById("aaCard").innerHTML = val; 
}

function inputCVCImpress(val) {
  document.getElementById("cvcNumber").innerHTML = val; 
}
