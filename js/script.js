const form = document.querySelector('#form');

form.onsubmit = (e) => {
  e.preventDefault();

  let inputNumber = document.forms['form']['prime'];

  if(!inputNumber.value) {
    inputNumber.classList.add('inputError');

    let span = inputNumber.nextSibling.nextSibling;
    span.innerText = 'O campo está vazio'
  } else {
    inputNumber.classList.remove('inputError');

    let span = inputNumber.nextSibling.nextSibling;
    span.innerText = ''

    let divisors = 0

    for(let i = 1; i <= inputNumber.value; i++) {
      
      if(inputNumber.value % i === 0) {
        divisors++
      }
    }
    
    let result = document.querySelector('.result');

    if(divisors === 2) {
      result.classList.remove('itsNotPrime');
      result.classList.add('itsPrime');
      result.innerText = 'É Primo';
    } else {
      result.classList.remove('itsPrime');
      result.classList.add('itsNotPrime')
      result.innerText = 'Não é Primo';
    }
    
  }
  
}

