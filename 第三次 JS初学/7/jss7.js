const arr=[1,1,1,2,2,3,4,4,5,5,5];
let copy=[],bool,t=0;
function uniq(arr){
    for(let i=0;i<arr.length;i++)
    {
     bool=true;
     for(let j=0;j<=i-1;j++)
     {
      if(arr[i]==arr[j])
      {
          bool=false;
          break;
      }
     }
     if(bool==true){
         copy[t]=arr[i];
         t++;
     }
    }
}
uniq(arr);
console.log(copy);