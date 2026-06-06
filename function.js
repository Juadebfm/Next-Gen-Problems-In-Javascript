function addLogged(a, b) {
  console.log(a + b); // prints value of exec but returns or gives nothing back
}

function addReturned(a, b) {
  return a + b; // Hands the answer back to be used
}

const total = addReturned(2, 3); //total of 5, 5 as a value is usable somewhere else

const newValue = total;

const nothing = addLogged(2, 3); // prints 5, but nothing is undefined
const newValue2 = nothing;

console.log("from total", newValue);
console.log("from nothing", newValue2);
