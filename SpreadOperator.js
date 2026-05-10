var numbers = [1, 2, 3]
var numbers2 = [4, 5, 6]
var numbers3 = [...numbers]
numbers3.push(7)
console.log(numbers)
console.log(numbers3)
var numbers = [...numbers, ...numbers2]
console.log(numbers)

//Object Spreading

var obj1 = { a: 1, b: 2 }
var obj2 = { c: 3, d: 4 }
var obj3 = { ...obj1, ...obj2 }
console.log(obj3)
