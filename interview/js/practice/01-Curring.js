const sumTwo = (a) => {
    return (b) => {
        return a + b
    }
}
const result = sumTwo(5)(10)
console.log(result)




/* ===================================== 
    multi-chain or n number of curring
   ===================================== */
var count = 0
function sum(a) {
   count = a
    //   returning function which return itself
    function inner (b){
        if(typeof b === 'number'){
            count+=b
        }
        return inner
    }
    return inner
}

console.log(sum(1)(2)(3)(4)(10)()(-5));
console.log("count:",count)
