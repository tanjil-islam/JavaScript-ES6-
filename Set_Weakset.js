function log(anything) {
  return console.log(anything)
}

//sets

let mySet = new Set()

mySet.add(1)
mySet.add('Bangladesh')
mySet.add({ name: 'John', age: 30 })
mySet.delete('Bangladesh')
log(mySet.has(1))
log(mySet.has('Bangladesh'))
log(mySet)

let mySet2 = new Set()
mySet2.add(1).add(2).add(3).add('tanjil').delete(2)
console.log(`mySet2 has: `)
log(mySet2)
mySet2.clear()
console.log(`mySet2 has: `)
log(mySet2)

log(mySet.size)

//arrays to sets
let myArray = [1, 4, 5]
let myset3 = new Set(myArray)

for (let value of myset3) {
  log(value)
}

//sets to arrays
let myArray2 = [1, 3, 5]
let myset4 = new Set(myArray2)
//let myArray3 = Array.from(myset4)
//log(myArray3)
log([...myset4])

//Usage of sets

let Array = [
  1, 2, 3, 4, 5, 4, 5, 3, 2, 1, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 4, 5, 6, 7, 8,
  9, 10,
]
log([...new Set(Array)])

let a = new Set([1, 2, 3, 4, 5])
let b = new Set([4, 5, 6, 7, 8])

let union = new Set([...a, ...b])
log(union)

let intersection = new Set([...a].filter((x) => b.has(x)))
log(intersection)

let difference = new Set([...a].filter((x) => !b.has(x)))
log(difference)

//weakset

const ws = new WeakSet([{ a: 1 }, { b: 2 }])
log(ws)

//Usages of Weakset

const ws1 = new WeakSet()
class SomeClass {
  constructor() {
    ws1.add(this)
  }
  method() {
    if (!ws1.has(this)) {
      throw new Error('Invalid object')
    } else {
      log('Method called successfully')
    }
  }
}

const obj1 = new SomeClass()
log(obj1.method())
