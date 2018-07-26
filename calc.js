//Global Variables
var inputs = [];
var total = 0;
var temp = "";

//Global Click Listener
document.addEventListener("click",buttonPress);
function buttonPress(event){
  var value = event.target.innerHTML;
  calculator(value);
}

//Reusable Functions
function storeInput(value){
  temp += value;
  document.getElementById("display").value = temp;
}
function operatorInput(operator){
  if (temp === ""){
    inputs.push(total);
    inputs.push(operator);
  } else {
    inputs.push(temp);
    inputs.push(operator);
    temp = "";
  }
}

function calculator(value){
  if (!isNaN(value) && value != 0){
    storeInput(value);
  } else if (value === "0" && temp != "0" && temp != ""){
      storeInput(value);
  } else if (value === "." && temp.slice(-1) != "."){
      storeInput(value);
  } else if (value === "AC"){
      temp = "";
      inputs = [];
      total = 0;
      document.getElementById("display").value = 0;
  } else if (value === "CE"){
      temp = "";
      document.getElementById("display").value = "";
  } else if (value === "X"){
      let operator = "*";
      operatorInput(operator);
  } else if (value === "/"){
      let operator = value;
      operatorInput(operator);
  } else if (value === "+" || value === "-" || value === "%"){
      let operator = value;
      operatorInput(operator);
  //calculation step if = input pressed
  } else if (value === "="){
      inputs.push(temp);
      var result = Number(inputs[0]);
      for (let i = 1; i < inputs.length; i++){
        var operator = inputs[i];
        var nextNum = Number(inputs[i+1]);
        if (operator === "*") {
          result *= nextNum;
        } else if (operator === "/"){
            result /= nextNum;
        } else if (operator === "+"){
            result += nextNum;
        } else if (operator === "-"){
            result -= nextNum;
        }
        i++
      }
    //Display result & reset for new calculation
    document.getElementById("display").value = Number((result).toFixed(5));
    temp = "";
    total = result;
    inputs = [];
  }
}

