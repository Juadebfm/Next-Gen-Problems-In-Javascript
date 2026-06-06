let temp = 25; // celcius

if (temp > 40) {
  console.log("Wear a loose cotton t-shirt");
} else if (temp > 20) {
  console.log("Wear a long sleave");
} else if (temp > 10) {
  console.log("Wear a jacket");
} else {
  console.log("Wear a rain coat or use an umbrella");
}

let tempSwitch = 25;
switch (true) {
  case tempSwitch > 40:
    console.log("Wear a loose cotton t-shirt");
    break;
  case tempSwitch > 20:
    console.log("Wear a long sleave");
    break;
  case tempSwitch > 10:
    console.log("Wear a jacket");
    break;
  default:
    console.log("Wear a rain coat or use an umbrella");
}
