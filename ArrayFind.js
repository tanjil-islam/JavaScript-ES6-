class Student {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  test() {
    console.log('hello')
  }

  exampleFunction() {
    let array = [1, 2, 3, 4, 5]

    array.find(() => {
      this.test()
    })
  }
}
let student = new Student('John', 20)
student.exampleFunction()
