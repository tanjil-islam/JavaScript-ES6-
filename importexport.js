import { a, pi } from './external.js'
import * as test from './external.js'
import { a as varA, pi as varPi } from './external.js'
import external, { y, myFunc } from './external.js'

console.log(a)
console.log(test.pi)
console.log(varA)
console.log(varPi)
console.log(external, y)
myFunc()
