const cars = ["Saab", "Volvo", "BMW"];
const bike=["Ninja","Honda","Bajaj"];
const vehicals=cars.concat(bike);
//console.log(vehicals);
const b= bike.entries();
for (let x of b) {
    console.log(x + "\n");
  }
