require ("core-js")

const languages = [
  { title: 'JavaScript', type: 'scripting' },
  { title: 'Python', type: 'programming' },
  { title: 'Ruby', type: 'programming' },
  { title: 'HTML', type: 'markup' },
  { title: 'CSS', type: 'stylesheet' },
]

console.log('Languages:\n', languages, '\n------------------------')
let scriptingLanguage = {}

scriptingLanguage = Object.groupBy(languages, lang => lang.type)
console.log(scriptingLanguage)
