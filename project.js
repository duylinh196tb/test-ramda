const R = require('ramda')

const products = [
  {name: 'Jeans', price: 80, category: 'clothes'},
  {name: 'Hoodie', price: 30, category: 'clothes'},
  {name: 'Jacket', price: 130, category: 'clothes'},
  {name: 'Card', price: 32, category: 'games'},
  {name: 'iPhone', price: 312, category: 'electronics'},
  {name: 'Sauce pan', price: 112, category: 'housewares'},
]


// const getnameandprice = r.map(r.pick(['name', 'price']))
 const getNameAndPrice = R.project(['name', 'price'])

const result = getNameAndPrice(products)

console.log(result)
