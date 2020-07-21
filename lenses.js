const R = require('ramda')

const person = {
  firstName: 'Fred',
  lastName: 'Flinston'
}

const fLens = R.lensProp('firstName')

// const result = R.over(fLens, R.toUpper, person)
const result = R.set(fLens, "toUpper", person)
console.log(result)
