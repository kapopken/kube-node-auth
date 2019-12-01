
const yaml = require('js-yaml');
const fs   = require('fs');


function readFile(fileName) {
    try {
        var doc = yaml.safeLoad(fs.readFileSync(fileName, 'utf8'));
       console.log('Read file', fileName);  
        console.log(doc);
        return doc;
      } catch (e) {
          console.log('could not read file');
        console.log(e);
      }
}
module.exports.readFile = readFile;