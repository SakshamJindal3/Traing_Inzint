let myPromise = new Promise(function(myResolve, myReject) {
   let x = 0;
    if (x == 0) {
     myResolve("Successfull")
    } else {
     myReject("Error");
    } });
   console.log(myPromise)
   myPromise.then(
    function(first) {myDisplayer(first);},
    function(error) {myDisplayer(error);}
   );