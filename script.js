function calculate(result){
  calculator.result.value = calculator.result.value + result;

}

function equate(){
  calculator.result.value = eval(calculator.result.value);
}

function clear(){
  calculator.result.value = 0;
}
