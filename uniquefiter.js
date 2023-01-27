let a=[1,2,3,4,3,2,1,5,5];
var myfunc=function(a){
    let b=[]
    
    for(let i=0;i<a.length;i++){
        a.sort();
        if(a[i]!=a[i+1]){
            b.push(a[i]);
        }
    }
    return b;
}
console.log(a.filter(myfunc));