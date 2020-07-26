import axios from 'axios';

let one = ""
let two = ""
let three = ""

const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);

axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
  const responseOne = responses[0]
  const responseTwo = responses[1]
  const responesThree = responses[2]
  // use/access the results 
})).catch(errors => {
  // react on errors.
})