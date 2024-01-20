const path = require('path');
const fullPath = path.join(__dirname, 'secret-folder');

const fs = require('fs/promises');

// const fileList = await fs.readdir(fullPath);
// console.log(fileList);
async function readFolder(dir) {
  try {
    const files = await fs.readdir(dir);
    for (const file of files) {
      const extension = path.extname(file);
      const name = path.parse(file).name;
      const stat = await fs.stat(dir + '/' + file);
      if (stat.isFile()) {
        console.log(
          `${name} - ${extension.replace('.', '')} - ${Number(
            stat.size / 1024,
          ).toFixed(2)}kb`,
        );
      }
    }
  } catch (err) {
    console.error(err);
  }
}
readFolder(fullPath);
// async function readFiles(dirname) {
//   try {
//     const files = await fs.readdir(dirname);
//     for (const file of files) {
//       const extension = path.extname(file);
//       const name = path.parse(file).name;
//       const stat = await fs.stat(dirname + '/' + file);
//       if (stat.isFile()) {
//         console.log(
//           `${name} - ${extension.replace('.', '')} - ${Number(
//             stat.size / 1024,
//           ).toFixed(2)}kb`,
//         );
//       }
//     }
//   } catch (err) {
//     console.error(err);
//   }
// }

// readFiles(folderPath);
