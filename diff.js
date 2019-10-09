const diff = (a, b) => {

  let big ;
  let small ;
  let res1 ;
  let res2 ;
  
  if (a >= b) {
    big = a;
    small = b;
  }
  else {
    big = b;
    small = a;
  }

  res1 = big - small; 
  res2 = 360 - big + small;
 
  if (res1 > res2) {
    return res2;
  }
   else {  
    return res1;
  }  
}
console.log(diff(0,0 ));
console.log(diff(0,45 )); 
console.log(diff(0, 180)); 
console.log(diff(0, 190)); 
console.log(diff(120,280 )); 
