//fat arrow functions

//this is how wewrite functions in ES5
var javascript = {
  name: 'javascript',
  libraries: ['react', 'angular', 'vue'],
  printLibraries: function () {
    self = this
    this.libraries.forEach(function (a) {
      console.log(`${self.name} loves ${a}`)
    })
  },
}

javascript.printLibraries()
console.log('\nES6\n')

//this is how we write functions in ES6
var javascript = {
  name: 'javascript',
  libraries: ['react', 'angular', 'vue'],
  printLibrary: function () {
    this.libraries.forEach((a) => {
      console.log(`$${this.name} Loves ${a}`)
    })
  },
}
javascript.printLibrary()
