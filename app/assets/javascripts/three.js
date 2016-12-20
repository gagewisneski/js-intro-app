var boxVars = [];

function count(q) {
  if (boxVars.indexOf(q) === -1) {
    boxVars.push(q);
  };
  if (boxVars.length === 3) {
    alert("You dids it");
  };
};
