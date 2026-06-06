let light = "red"; // current state of the light

function nextLight() {
  // Given the current state of the light, decide the next one using these cases
  switch (light) {
    case "red":
      light = "green";
      break;
    case "green":
      light = "yellow";
      break;
    case "yellow":
      light = "red";
      break;
  }
  console.log("light is now: " + light);
}

// To make it automatic
// run nextlight over and over again every 2 seconds
setInterval(nextLight, 3000);


