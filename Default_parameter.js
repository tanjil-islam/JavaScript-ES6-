function myFunc(x = 10) {
  return x
}

console.log(myFunc()) // Output: 10
console.log(myFunc(5)) // Output: 5
console.log(myFunc(null))
console.log(myFunc(undefined))
