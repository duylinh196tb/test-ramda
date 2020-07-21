const R = require('ramda')

const teams = [
  { name: 'Lions', score:5 },
  { name: 'Ate', score:4 },
  { name: 'Ulu', score:1 },
  { name: 'Xiron', score:6 },
  { name: 'Kate', score:2 },
]

const sortByScoreDesc = R.sort(R.descend(R.prop('score')))
const getName = R.prop('name')

// const getTopName = teams => {
  // const topTeam = R.head(sortByScoreDesc(teams))
  // const topName = R.prop('name', topTeam)
  // return topName
// }
// const getTopName = R.compose(getName, R.head, sortByScoreDesc)
const getTopName = R.pipe(sortByScoreDesc, R.head, getName)


const result = getTopName(teams)

console.log(result)
