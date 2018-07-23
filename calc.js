var inputs=[];
var total=0;

var temp= '';
var buttons = document.getElementsByTagName("button");
console.log(buttons);
/*for (let i = 0; i < buttons.length; i++){
buttons[i].addEventListener("click", function (){
console.log("hello world");
})
}
*/
console.log(buttons[0].innerTEXT);

function calculator(){
  var value = keypress;
  if (value === !NaN || value === "."){
    temp += value;
    document.getElementById("display").innerHTML = temp;
  } else if (val === "AC"){
    temp = '';
    inputs = [];
    total = 0;
    document.getElementById("display").innerHTML = '';
  } else if (val === "CE"){
    temp = '';
    document.getElementById("display").innerHTML = '';
  } else if (val === "X"){
    inputs.push(temp);
    inputs.push('*');
    temp = '';
  } else if (val === "/"){
    inputs.push(temp);
    inputs.push("/");
    temp = '';
  } else if (val === "+" || val === "-" || val === "%"){
    inputs.push(temp);
    inputs.push(val);
    temp = '';
  //calculation step if = input pressed
  } else if (val === "="){
    inputs.push(temp);
    //store initial number for calculation
    var nt = Number(entries[0]);
    for (let i = 1; i < entries.length; i++){
      var operand = entries[i];
      var nextNum = Number(entries[i+1]);
      if (operand === "*") {
        nt *= nextNum;
      } else if (operand === "/"){
        nt /= nextNum;
      } else if (operand === "+"){
        nt += nextNum;
      } else if (operand === "-"){
        nt -= nextNum;
      }
      i++
    }
    /*negative result parsing
    if (nt < 0) {
      */
    document.getElementById("display").innerHTML = nt;
    inputs = [];
    temp = "";
    }
}

