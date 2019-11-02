var a,b;
a=3,b=4;
function goodmood(a,b)
{
 var t;
 t=a;
 a=b;
 b=t;
 console.log(a,b);
}
goodmood(a,b);