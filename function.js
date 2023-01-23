let a=4,b=2;
//Additon
function Add(a,b)
{a+=b;
return a;}
//Subtraction
function Sub(a,b)
{a-=b;
return a;}
//Division
function Div(a,b)
{a/=b;
return a;}
//Multiplication
function Mul(a,b)
{a*=b;
return a;}
//Modulus
function Mod(a,b)
{a%=b;
return a;}
//Raise to the power
function Pow(a,b)
{a**=b;
return a;
}
console.log(Add(a,b));
console.log(Sub(a,b));
console.log(Div(a,b));
console.log(Mul(a,b));
console.log(Mod(a,b));
console.log(Pow(a,b));