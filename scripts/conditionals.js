const id = 100;

if (id == 101) {
  console.log("correct");
} else {
  console.log("incorrect");
}

if (typeof foo !== "undefined") {
  console.log(`the foo is ${foo}`);
} else {
  console.log("No defined foo");
}

const color = "red";

switch (color) {
  case "red":
    console.log("red");
    break;
  case "yello":
    console.log("yellow");
    break;
  default:
    console.log("unknown");
    break;
}
