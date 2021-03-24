
//function that display value
function display(val) {
  document.getElementById("userInput").value += val;
}

//function that clear the display
function clr() {
  document.getElementById("userInput").value = " ";
}

//function that evaluates the digit and return result
function solve() {
  var x = document.getElementById("userInput").value;
  var y = eval(x);
  document.getElementById("userInput").value = y;
}


