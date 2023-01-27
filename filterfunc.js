a=[1,2,3,4,5,6,7,8,9,10];

var myfunc=function(a){
    for(let i=0;i<10;i++){
        if(a%3==0){
            return a;
        }
    }
}
console.log(a.filter(myfunc));