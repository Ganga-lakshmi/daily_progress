const fs = require('fs');
const readStream = fs.createReadStream('./docs/blog3.txt' ,{encoding :'utf8'});

const writeStream = fs.createWriteStream('./docs/blog4.txt');
// readStream.on('data',(chunk) => {
//     console.log('------- *****NEW CHUCNK ******* ----------');
//     // console.log(chunk);
//     console.log(chunk.toString());
//     writeStream.write('\n new chunk \n');
//     writeStream.write(chunk);
// });

//piping


readStream.pipe(writeStream);// everything read from blog 3 is piped to blog4

