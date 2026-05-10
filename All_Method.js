//Array filter

var numbers = [4, 9, 16, 25, 30, 40, 50, 60, 70, 80, 90, 100]

var result = numbers.filter((currentValue, index, arr) => {
  //console.log(index)
  //console.log(arr)
  return currentValue > 30
})

console.log(numbers)
console.log(result)

// Array Slice

var numbers = [4, 9, 16, 25, 30, 40, 50, 60, 70, 80, 90, 100]
var result = numbers.slice(2, 5)
var result2 = numbers.slice(-5, 10)

console.log(result)
console.log(result2)
//console.log(numbers)

//Array Splice
var numbers = [4, 9, 16, 25, 30, 40]
var result = numbers.splice(1, 3, 200, 300, 400)
console.log(result)
console.log(numbers)
var result2 = numbers.splice(-2, 2, 500, 600)
console.log(result2)
console.log(numbers)

// Array Concat

var numbers1 = [4, 9, 16]
var numbers2 = [25, 30, 40]
var numbers3 = [50, 60, 70]
var result = numbers1.concat(numbers2, numbers3)
console.log(result)
console.log(numbers1)

//Array Push

var numbers = [1, 2, 3, 5]

var result = numbers.push(6, 7, 8)
console.log(result)

//Map

var numnbers = [1, 2, 3, 4, 5]
var result = numbers.map((num) => {
  return num * 2
})

console.log(result)

//Array Reduce

var numbers = [1, 2, 3, 4, 5]
var sum = numbers.reduce((prevValue, currentValue, currentIndex, arr) => {
  return prevValue + currentValue
}, 0)

console.log(sum)
