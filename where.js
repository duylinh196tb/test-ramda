const R = require('ramda')

const products = [
  {name: 'Jeans', price: 80, category: 'clothes'},
  {name: 'Hoodie', price: 30, category: 'clothes'},
  {name: 'Jacket', price: 130, category: 'clothes'},
  {name: 'Card', price: 32, category: 'games'},
  {name: 'iPhone', price: 312, category: 'electronics'},
  {name: 'Sauce pan', price: 112, category: 'housewares'},
]

const predicate = R.where({
  category: R.equals('clothes'),
  price: R.lt(R.__, 90)
})

const getResults = R.pipe(R.filter(predicate), R.pluck('name'))
const result = getResults(products)

console.log(result)
