function myDisplayer(some) {
  
  console.log(some);
  setTimeout(myDisplayer,3000);
}

async function myFunction() {return "Hello";}

myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);