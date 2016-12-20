function daylight(variable) {
  if (variable === 'x') {
    var body = document.getElementById("body");
    body.style["background-color"] = "yellow";
    var text = document.getElementById("text");
    var box = document.getElementById("morning")
    text.innerHTML = box.innerHTML;
  } else if (variable === 'y') {
    var body = document.getElementById("body");
    body.style["background-color"] = "orange";
    var text = document.getElementById("text");
    var box = document.getElementById("afternoon")
    text.innerHTML = box.innerHTML;
  } else if (variable === 'z') {
    var body = document.getElementById("body");
    body.style["background-color"] = "black";
    var text = document.getElementById("text");
    var box = document.getElementById("evening")
    text.innerHTML = box.innerHTML;
  }
}