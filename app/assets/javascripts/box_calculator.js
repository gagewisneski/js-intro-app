var total = 0
function calculator(number) {
  total = total + parseInt(number)
  var display = document.getElementById("display")
  display.innerHTML = total
}