//Global Variables
var inputs=[];
var total=0;
var temp= '';


//Global Click Listener
document.addEventListener("click",buttonPress);
function buttonPress(event){
  var value = event.target.innerHTML;
  calculator(value);
}

function calculator(value){
  if (!isNaN(value) && value != 0){
    temp += value;
    document.getElementById("display").value = temp;
  } else if (value === "0" && temp != "0" && temp != ""){
    temp += value;
    document.getElementById("display").value = temp;
  } else if (value === "." && temp.slice(-1) != "."){
    temp += value;
    document.getElementById("display").value = temp;
  } else if (value === "AC"){
    temp = '';
    inputs = [];
    total = 0;
    document.getElementById("display").value = 0;
  } else if (value === "CE"){
    temp = '';
    document.getElementById("display").value = '';
  } else if (value === "X"){
    inputs.push(temp);
    inputs.push('*');
    temp = '';
  } else if (value === "/"){
    inputs.push(temp);
    inputs.push("/");
    temp = '';
  } else if (value === "+" || value === "-" || value === "%"){
    if (temp = ''){
      inputs.push(nt);
    } else {
    inputs.push(temp);
    inputs.push(value);
    temp = '';
    }
  //calculation step if = input pressed
  } else if (value === "="){
    inputs.push(temp);
    //store initial number for calculation
    var nt = Number(inputs[0]);
    for (let i = 1; i < inputs.length; i++){
      var operator = inputs[i];
      var nextNum = Number(inputs[i+1]);
      if (operator === "*") {
        nt *= nextNum;
      } else if (operator === "/"){
        nt /= nextNum;
      } else if (operator === "+"){
        nt += nextNum;
      } else if (operator === "-"){
        nt -= nextNum;
      }
      i++
    }
    /*negative result parsing
    if (nt < 0) {
      */
    //Display Result
    document.getElementById("display").value = Number((nt).toFixed(5));
    temp = '';
    }
}

