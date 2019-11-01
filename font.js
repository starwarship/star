var a="hello world",i,flag=0;
function change(a)
{
   for(i in a)
     {
         if(a[i]==" "){
             flag=0;
             console.log(" ");
             }
         else if(flag==0){
             flag=1;
             console.log(a[i].toUpperCase());
         }
         else{
         console.log(a[i]);
         }
     } 
}
change(a);
    