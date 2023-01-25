function myDisplayer(some) {
  setTimeout(myDisplayer,3000);
  console.log(some);
}

async function myFunction() {return "Hello";}

myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);