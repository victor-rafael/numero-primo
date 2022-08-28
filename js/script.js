const form = document.querySelector('#form');
let result = document.querySelector('.result');
let inputNumber = document.forms['form']['prime'];

function removeStyle() {
  result.classList.remove('itsNotPrime');
  result.classList.remove('itsPrime');
  result.classList.remove('error');
}

function isValueEmpty() {
  console.log(inputNumber.value);
  if(inputNumber.value.length <= 1) {
    result.innerText = '';
  }
}


inputNumber.onkeydown = (e) => {
  if(e.key === 'Backspace' || e.key === 'Delete') {
    isValueEmpty();
  }
}


form.onsubmit = (e) => {
  e.preventDefault();
  

  if(!inputNumber.value) {
    inputNumber.classList.add('inputError');
    removeStyle();
    result.classList.add('error');
    result.innerText = 'O campo está vazio';

  } else {
    inputNumber.classList.remove('inputError');

    let divisors = 0

    for(let i = 1; i <= inputNumber.value; i++) {
      
      if(inputNumber.value % i === 0) {
        divisors++
      }
      if(divisors === 3) {
        break;
      }
    }


    if(divisors === 2) {
      removeStyle();
      result.classList.add('itsPrime');
      result.innerText = 'É Primo';
    } else if(divisors !== 2) {
      removeStyle();
      result.classList.add('itsNotPrime')
      result.innerText = 'Não é Primo';
      
    } 

    
    
  } 
}

