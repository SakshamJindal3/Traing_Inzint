const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;
console.log(car,truck,suv)

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
    debugg
    return [add, subtract, multiply, divide];
  }
  
  const [add, subtract, multiply, divide] = calculate(8, 4);
  console.log(add, subtract, multiply, divide)
  
  const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type:'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

function myVehicle({type, color, brand, model}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
  return message;
}
console.log(myVehicle())