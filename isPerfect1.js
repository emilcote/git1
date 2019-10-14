const isPerfect = (num) => {
let sum = 0;

for (let i = 1 ; i <= num / 2 ; i += 1 ) {

if (num % i === 0) {
sum += i ;
}
}

if ((sum === num) && ( num > 0))  {
console.log(true);
} else 
console.log(false);

}


console.log(isPerfect(0));
console.log(isPerfect(8128));
console.log(isPerfect(33550336));
console.log(isPerfect(5));
console.log(isPerfect(45));
