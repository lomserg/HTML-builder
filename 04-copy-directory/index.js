// import modules

const fs = require('fs/promises');
const path = require('path');

const dirOrig = path.join(__dirname, 'files');
const dirCopy = path.join(__dirname, 'files-copy');

async function copyFolder(dirOrig, dirCopy) {
  try {
    await fs.rm(dirCopy, { recursive: true, force: true });
    await fs.mkdir(dirCopy, { recursive: true });

    const files = await fs.readdir(dirOrig);
    for (const file of files) {
      const name = path.parse(file).name;
      let pathFile = path.join(dirOrig, file);
      let pathFileCopy = path.join(dirCopy, file);
      const stat = await fs.stat(dirOrig + '/' + file);
      if (stat.isFile()) {
        await fs.copyFile(pathFile, pathFileCopy);
      }
    }
  } catch (err) {
    console.error(err);
  }
}
copyFolder(dirOrig, dirCopy);
