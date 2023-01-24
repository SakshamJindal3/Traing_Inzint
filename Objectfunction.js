let x=5;
console.log(x);
delete x;
console.log(x);

//primitive datatype
//pass by value
let num=20;
let num2=num
num=10
console.log(num);
console.log(num2);
//Reference Datatype
//pass by reference
let obj={number:70};
let obj2=obj;
obj.number=80;
console.log(obj);
console.log(obj2);

//pass by value in object
const a={
    title:"Javascript",
    duration:6,
    topics:["Marketing","Sales"],
    Fees:2500,
    Address:"Jalandhar,India"
    };
console.log('HIIIIIIII')
const a1={...a};
console.log(a);
console.log(a1);
a1.title="C++";
console.log(a);
console.log(a1);
//Assign 
const a3=Object.assign({},a);
console.log('HIIIIIIII')
console.log(a3);

//loops

for(let key in a){
    console.log(key);
}
console.log("********");
for(let key of Object.keys(a)){
    console.log(a[key]);
}

function createproduct(product,price,discount,itemcode){
    return{
        itemname:product,
        price:price,
        discount:discount,
        itemcode:itemcode
    }
};
const football=createproduct('Football',1500,10,'f30')

function Product(product,price,discount=5,itemcode="error"){
    this.itemname=product,
    this.price=price,
    this.discount=discount,
    this.itemcode=itemcode,
    this.discount=function(){
        return price*discount/100;
    }
}

const mobile=new Product("Oneplus Nord",30000,5);
console.log(mobile.discount());
