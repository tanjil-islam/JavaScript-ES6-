function Person(name, age) {
  //let person = Object.create(Person.prototype);

  this.name = name
  this .age = age
  // return person;
}

Person.prototype = {
  eat() {
    console.log(`Person is eating`)
  },
  sleep() {
    console.log(`Person is sleeping`)
  },
  walk() {
    console.log(`Person is walking`)
  },
}
// const sakib =Person('sakib', 35);
// sakib.eat();
// const tamim = Person('tamim', 35);
// tamim.sleep();

const sakib = new Person('sakib', 35)
sakib.eat()
const tamim = new Person('tamim', 35)
tamim.sleep()

//Prototype to create class

class PersonClass {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  eat() {
    console.log(`Person is eating`)
  }
  sleep() {
    console.log(`Person is sleeping`)
  }
  walk() {
    console.log(`Person is walking`)
  }
}

const sakibClass = new PersonClass('sakib', 35)
sakibClass.eat()
const tamimClass = new PersonClass('tamim', 35)
tamimClass.sleep()