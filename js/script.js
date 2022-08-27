const form = document.querySelector('#form');
let result = document.querySelector('.result');

function removeStyle() {
  result.classList.remove('itsNotPrime');
  result.classList.remove('itsPrime');
  result.classList.remove('error');
}

form.onsubmit = (e) => {
  e.preventDefault();

  let inputNumber = document.forms['form']['prime'];

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

