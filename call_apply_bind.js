let name={
    fname:"Saksham",
    Lname:"jindal",

};
let name1={
    fname:"Jasmine",
    Lname:"Thakur",

};
//console.log(name.fullname());
let fullname = function(relation,Rname){
    console.log(this.fname+ " "+this.Lname+relation+Rname);
};
fullname.call(name," s/0"," Sanjeev k Jindal")
fullname.apply(name,[" s/0"," Sanjeev k Jindal"])

let pn=fullname.bind(name," s/0"," Sanjeev k Jindal");
pn();

