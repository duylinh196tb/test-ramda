const R = require('ramda')

const pets = [
  { name: "Spike", type: 'dog' },
  { name: "Miten", type: 'cat' },
  { name: "Ola", type: 'dog' },
  { name: "Asida", type: 'cat' },
  { name: "Ahihi", type: 'dog' },

]

const dogCheck = pet => pet.type === 'dog'

const result = R.reject(dogCheck, pets)
const result2 = R.filter(dogCheck, pets)
const result3 = R.partition(dogCheck, pets)

console.log(result)
console.log(result2)
console.log(result3)
