// in this module file, we getting the data from the people file.
//for that we use require function. and inside parenthesis the directory of file, it is in same directory so (.), name is peopel
const xys = require('./people');

console.log(xys); // it gives empty 
//console.log(people); error people not defined 

//after export now its value is hello

//we can seperately
console.log(xys.people, xys.ages);

//effecient pattern getting above .
console.log('modern pattern');
const {people, ages} = require('./people');
console.log(people,ages);


//importing os module inbuilt
const os = require('os');
console.log(os.platform(), os.homedir());