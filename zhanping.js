var arr = [ [1,2] , 3,[4,[5,[6]] , 7] ],a=[];
function even(arr)
{
 for(var item in arr)
 {
  console.log(item);
  // a=item;
 }
  //console.log(a);
}
even(arr);