const R = require('ramda')

const products = [
  {name: 'Jeans', price: 80, category: 'clothes'},
  {name: 'Hoodie', price: 30, category: 'clothes'},
  {name: 'Jacket', price: 130, category: 'clothes'},
  {name: 'Card', price: 32, category: 'games'},
  {name: 'iPhone', price: 312, category: 'electronics'},
  {name: 'Sauce pan', price: 112, category: 'housewares'},
]

const pLens = R.lensProp('price')
const applyDiscount = R.curry((perc, amt) => amt - (amt * (perc / 100)))

// const adjustPrice = R.over(pLens, applyDiscount(50))

// R.when
// R.unless
// const adjustPrice = R.ifElse(
  // R.propEq('category', 'clothes'),
  // R.over(pLens, applyDiscount(30)),
  // R.identity
// )

const adjustPrice = R.cond([
  [R.propEq('category', 'clothes'), R.over(pLens, applyDiscount(30))],
  [R.propEq('category', 'games'), R.over(pLens, applyDiscount(50))],
  [R.T, R.identity]
])


const result = R.map(adjustPrice, products)

console.log(result)
