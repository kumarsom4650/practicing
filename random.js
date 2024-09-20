const mathfun = require("./app")

console.log(mathfun) // its holding in form of object '{}'
console.log(mathfun.random(4,9))
console.log(mathfun.sum(4,5))

// here aise karna pad raha hai: mathfun.random, mathfun.sum, etc, so 
// we will destructure them, because overall its an object..
//  const {fun1, fun2,...} = obj name

const {random, max, sum} = mathfun

console.log(random(4,19))
console.log(sum(4,8))
console.log(max(4,8))