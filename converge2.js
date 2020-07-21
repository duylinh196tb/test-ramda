const R = require('ramda')

const shouldBeTrue = [6,3,4,2,5,1]
const shouldBeFalse = [3,4,5,2,1]

// const isFirstBiggest = xs => xs[0] === xs.sort((a,b) =>b-a)[0]
// const isFirstBiggest = R.converge(
  // R.equals, [
    // xs => xs[0],
    // xs=> xs.sort((a,b) => b-a)[0]
  // ])
//
//
const biggestItem =  R.compose(R.head, R.sort(R.descend(R.identity)))

const isFirstBiggest = R.converge(
  R.equals, [
    R.head,
    biggestItem
  ])

console.log(isFirstBiggest(shouldBeTrue))
console.log(isFirstBiggest(shouldBeFalse))
