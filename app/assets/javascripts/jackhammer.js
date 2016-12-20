var i = 0
function jackhammer(x) {
  i ++
  if (i === 1) {
    x.style["background-color"] = "red";
  } else if (i === 2) {
    x.style["background-color"] = "green";
  } else if (i === 3) {
   x.style["background-color"] = "yellow";
  } else if (i === 4) {
    x.style["background-color"] = "black";
  } else if (i === 5) {
    x.style["background-color"] = "purple";
    alert("You win");
  }
};