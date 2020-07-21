const R = require("ramda");

const text = `what to say
should we tell her
the things that went on there that day?
should we tell ger ablout it?
now, what SHOULD we do?
well...
what would YOU do
if your mother asked YOU`;

console.clear();

const matchWords = R.match(/\w+/g);
// const matchCounds = R.countBy(R.identity)
const matchCounds = R.countBy(R.toLower)
/* const results = R.compose(matchCounds, matchWords)(text) */
const results = R.compose(R.map(R.sortBy(R.identity)),R.invert,matchCounds, matchWords)(text)
console.log(results)
