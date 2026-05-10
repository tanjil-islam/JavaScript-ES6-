var myObj = {
  name: 'John',
  age: 30,
  city: 'New York',
  founder: 'Elon Musk',
  CEO: 'Elon Musk',
  country: 'USA',
}

var keys = Object.keys(myObj)
console.log(keys)

var values = Object.values(myObj)
console.log(values)

var entries = Object.entries(myObj)
console.log(entries)

// Object ShortHand

 var x = 10
 var y = 20 
 var z = x *y;

var myObj = {
    name: 'John',
    age: 30,
    city: 'New York',
  x: x,
  y,
  z
}

console.log(myObj)