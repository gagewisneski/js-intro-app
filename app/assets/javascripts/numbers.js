var nextNumber = 1;
var lastNumber = 10;
function clickNumber(number, box) {
  box.style["background-color"] = "red"

  if (number === nextNumber) {
    nextNumber++;
    if (number === lastNumber) {
      alert("You can count to 10");
    }
  }
  else {
    nextNumber = 1;
    alert("Restart");
  }
};








