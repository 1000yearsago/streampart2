const fs = require('fs');
const { Transform } = require('stream');

const upperCase = new Transform({
    transform(chunk, encoding, callback) {
      const data = chunk.toString().split(' ');
      const result = data.map(word => word.charAt(0).toUpperCase() + word.slice(1));
      this.push(result.join(' '));
      callback();
    }
  });

  const readStream = fs.createReadStream('streampart2/text.txt', 'utf8');
  const writeStream = fs.createWriteStream('streampart2/newtext.txt', 'utf8');
  readStream.pipe(upperCase).pipe(writeStream);