const fs = require('fs');
const path = require('path');
const file = fs.createWriteStream(path.join(__dirname, 'text.txt'));

process.stdout.write('Hi, please write text and press enter text\n');
process.stdin.on('data', (data) => {
  // file.write(data);
  if (data.toString().trim() === 'exit') {
    process.exit();
  }
  fs.appendFile(path.join(__dirname, 'text.txt'), data, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
});

process.on('SIGINT', endCommand);

function endCommand() {
  process.stdout.write('File was written\n');
  process.exit();
}
