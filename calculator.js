$(document).ready(function() {
  var inputs = [""];
  //string to store current input
  var totalString;
  //operator array for validation without dot
  var operator1 =["+", "-", "/", "*"];
  //operator array for validation with dot
  var operator2 = ["."];
  //numbers
  var numbers = [0,1,2,3,4,5,6,7,8,9];

  function getValue(input) {
    if(operator2.includes(inputs[inputs.length -1] === true && input === "." )) {
      console.log("error... Duplicate '.'.");
    }
    else if (inputs.length === 1 && operator1.includes(input) === false) {
      inputs.push(input);
    }
    else if (operator1.includes(inputs[inputs.length -1]) === false) {
      inputs.push(input);
    }
    else if (numbers.includes(Number(input))) {
      inputs.push(input);
    }
    update();
  }

  function update() {
    totalString = inputs.join("");
    $("#steps").html(totalString);
  }
  function getTotal() {
    totalString = inputs.join("");
    $("#steps").html(eval(totalString));
  }

  $("a").on("click", function() {
    if(this.id === "deleteAll") {
      inputs = [""];
      update();
    }
    else if(this.id === "backOne") {
      inputs.pop();
      update();
    }
    else if(this.id === "total") {
      getTotal();
    }
    else {
      if(inputs[inputs.length-1].indexOf("+", "-", "/", "*") === -1) {
        getValue(this.id);
      }
      else {
        getValue(this.id);
      }
    }
  });

});
