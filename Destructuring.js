const user = {
  name: 'John',
  age: 30,
  city: 'New York',
}

const { name: title } = user
console.log(title)

//nested destructuring

const user2 = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA',
  },
}

const {
  address: { country: x },
} = user2
console.log(x)

//default values

const user3 = {
  name: 'John',
  age: 30,
  // address: {
  //     city: 'New York',
  //     country: 'USA'
  // }
}

const { address: { country: y } = {  } } = user3
console.log(y)


//Array destructuring 

var numbers = [1, 2, 3, [4, 10,20,40], 5]

var [a,b] = numbers
console.log(a, b)
var [,c,,,d] = numbers
console.log(c, d)
var [,,,[,e,,f],g]  = numbers
console.log(e, f, g)


// funny swapping 

var a=5;
var b=10;

[b, a]=[a, b]
console.log(a, b)