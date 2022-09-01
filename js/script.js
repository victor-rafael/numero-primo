const form = document.querySelector('#form');
let result = document.querySelector('.result');
let inputNumber = document.forms['form']['prime'];

function removeStyle() {
  result.classList.remove('after');
  result.classList.remove('error');
}

function isValueEmpty() {
  // console.log(inputNumber.value);
  if(inputNumber.value.length === 0 || inputNumber.value) {
    result.innerText = '';
  }
}


inputNumber.onkeydown = (e) => {
  let keys = ['Backspace', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  if(inputNumber.value.length > 0) {
    setTimeout(() => {
      keys.forEach(item => e.key === item ? isValueEmpty() : item);

      if(e.key === 'Delete' && inputNumber.value.length === 0) {
        isValueEmpty();
      }
    }, 100);
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
      result.classList.add('after');
      result.innerText = 'É Primo';
    } else if(divisors !== 2) {
      removeStyle();
      result.classList.add('after')
      result.innerText = 'Não é Primo';
      
    } 

    
    
  } 
}

