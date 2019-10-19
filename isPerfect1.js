const isPerfect = (num) => {
let sum = 0;

for (let i = 1 ; i <= num / 2 ; i += 1 ) {

if (num % i === 0) {
sum += i ;
}
}

return (sum === num) && ( num > 0) ;

}


console.log(isPerfect(6));
console.log(isPerfect(8128));
console.log(isPerfect(33550336));
console.log(isPerfect(28));
console.log(isPerfect(45));
