let a=[1,2,3,4,3,2,1,5,5];
let b=[];
var temp=0
for(let i=0;i<a.length;i++)
{
    temp=0;
    for(let j=i+1;j<a.length;j++)
    {
        if(a[i]==a[j])
        {
            temp=1;
        }
    }
    if(temp==0)
    b.push(a[i])
}
console.log(b)