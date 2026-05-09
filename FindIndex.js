//Array Prototype.findIndex()

var numbers = [4, 9, 16, 25, 30, 40, 50, 60, 70, 80, 90, 100]

var result = numbers.findIndex((currentValue, index, arr) => {
  return currentValue > 50
})
console.log(result)
