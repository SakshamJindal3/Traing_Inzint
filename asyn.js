setTimeout(pFunction, 3000);

function pFunction() {
  console.log("Hlo 3 second passed");
}
// When you pass a function as an argument, remember not to use parenthesis.
// Right: setTimeout(pFunction, 3000);
// Wrong: setTimeout(pFunction(), 3000);

// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
//   console.log(d.getHours() + ":" +d.getMinutes() + ":" +d.getSeconds());
// }

