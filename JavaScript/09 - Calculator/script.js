let calculation = localStorage.getItem('calculation') || '';
document.querySelector('.js-result').innerHTML = calculation;

function updateCalculation(symbol) {
  if(symbol === '=') {
    calculation = String(eval(calculation));
  } else if(symbol === 'X') {
    calculation = calculation.slice(0, -1);
  } else {
    calculation += symbol;
  }
  
  document.querySelector('.js-result').innerHTML = calculation;
  localStorage.setItem('calculation', calculation);
}