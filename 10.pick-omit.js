const R = require('ramda');

const product = {
  name: 'widget',
  price: 10,
  shippingWeight: '2 lbs'
}

// const getProps = R.pickAll(['name','price','shippingWeight'])
// const getProps = R.pickBy(val => Number(val))
// const getProps = R.pickBy((val, key) => R.contains('shipping', key))
const getProps = R.omit(['shippingWeight'])
const result = getProps(product)


console.log(result)
