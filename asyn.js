// setTimeout(myFunction, 3000);

// function myFunction() {
//   console.log("Hlo 3 second passed");
// }
//When you pass a function as an argument, remember not to use parenthesis.
//Right: setTimeout(myFunction, 3000);
//Wrong: setTimeout(myFunction(), 3000);

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  console.log(d.getHours() + ":" +d.getMinutes() + ":" +d.getSeconds());
}