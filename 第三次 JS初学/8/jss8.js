let arr = [5, 3, 8, 1];
let filtered =[];

function filterRange(arr,a,b){
    let t=0;
    for(let i=a;i<=b;i++)
    {
     filtered[t]=arr[i];
     t++;
    }
} 
filterRange(arr, 1, 4);
alert( filtered );
alert( arr ); 