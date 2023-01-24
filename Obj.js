var a={
    firstname:"Saksham",
    lastname:"Jindal",
    age:22,
    Roles:["Marketing","Sales"],
    salary:function(){
        return 25000;
    },
    fullname:function(){
        return this.firstname+" "+this.lastname;
    },
    address:{
        city:"Jalandhar",
        country:"India"
    }
};
console.log(a);
console.log(a.salary());
console.log(a.fullname());
console.log(a.address.city);