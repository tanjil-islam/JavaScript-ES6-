var myVar = 'hi'
// False,0,"",undefined,null,NaN are all falsy values in JavaScript. Any other value is considered truthy.
//  In this case, since myVar is null, it is a falsy value and the else block will be executed, printing

if (!myVar) {
  console.log('The value of myVar is true')
} else {
  console.log('The value of myVar is false')
}
