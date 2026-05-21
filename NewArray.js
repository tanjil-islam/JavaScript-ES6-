//toReversed() method creates a new array with the elements in reverse order, without modifying the original array.
const arr = [1, 2, 3, 4, 5]
const reversedArray = arr.toReversed()

console.log(reversedArray)
console.log(arr)

//toSpliced() method creates a new array with the specified elements removed and/or replaced, without modifying the original array.

const arr1 = [1, 2, 3, 4, 5]
const splicedArray = arr1.toSpliced(2, 2, 'a', 'b')

console.log(splicedArray)
console.log(arr1)

//Array.with() method creates a new array with the specified element replaced at the given index, without modifying the original array.

const arr2 = [1, 2, 3, 4, 5]
const result = arr.with(1, 400)
console.log(result)
console.log(arr2)

//Array toSorted() method creates a new array with the elements sorted in ascending order, without modifying the original array.

const arr3 = [5, 2, 9, 1, 5]

const compare = function (a, b) {
  //return a - b;
  return b - a
}

const sortedArray = arr3.sort(compare)
console.log(sortedArray)

const cars = [
  {
    type: 'Saab',
    year: 2016,
  },
  {
    type: 'Volvo   ',
    year: 2001,
  },
  {
    type: 'BMW',
    year: 2010,
  },
]

// const result1 = cars.sort(function (a, b) {
//   return a.year - b.year
// })
// console.log(result1)

const result2 = cars.toSorted(function (a, b) {
  const x = a.type.toLowerCase()
  const y = b.type.toLowerCase()

  if (x < y) {
    return 1
  } else if (x > y) {
    return -1
  } else {
    return 0
  }
})

console.log(result2)
console.log(cars)
