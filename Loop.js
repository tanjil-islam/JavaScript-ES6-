for (var i = 0; i < 4; i++) {
  console.log(i)
}
console.log(i)

//forIn

const myObj = {
  name: 'John',
  age: 30,
  city: 'New York',
}

for (property in myObj) {
  console.log(property)
}
const myArr = [1, 4, 5]
for (property in myArr) {
  console.log(property)
}

const myString = 'Hello, World!'

for (property of myString) {
  console.log(property)
}
