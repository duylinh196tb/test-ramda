const R = require("ramda")

const personXXX = {
  id:1,
  name: 'Joe'
}

const generateUrl = id => `https://img.social.facebook.com/avatar/${id}.png`
const getUrlFromPerson = R.compose(generateUrl, R.propOr('default', 'id'))
const getUpdatedPersion = R.converge(R.assoc('avatar'), [getUrlFromPerson, R.identity])
const result = getUpdatedPersion(personXXX)

console.log(result)
