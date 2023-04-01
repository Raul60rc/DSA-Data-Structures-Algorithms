// function primeNumbers(){
//     let result;
//     let isPrime5 = 5
//     let isPrime4 = 4
//     if (isPrime5 === 5){
//         result = "Prime Number"
//     } else if (isPrime4 === 4) {
//     }else result = "Not Prime"
// }
// primeNumbers(4+1)
// console.log(primeNumbers)

function isPrime(n){
    if (n < 2){
        return false 
    }
    for( let i = 2 ; i <= Math.sqrt(n); i++){
        if (n % i === 0){
            return false
        }else return true;
    }
}
isPrime(5);

//Big = = 0sqrt(n)

