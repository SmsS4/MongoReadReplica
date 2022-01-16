// Parse Server Cloud Code
// https://docs.parseplatform.org/cloudcode/guide/
// also see https://blog.back4app.com/2016/04/06/parse-open-source-workarounds/

import path from 'path';
import fs from 'fs';

export default () => {
  const cloud = (folderName, callback) => {
    // iterate over the files in this directory
    fs.readdirSync(folderName)
      .forEach(async file => {
        if (file == "index.js") return; // don't include this file
        if (file.indexOf(".js") == -1) return; // don't include non javascript files

        var cloudFunction = await import(folderName + "/" + file); // import the cloud function
        if (callback) {
          // remove the '.js' extension
          var functionName = file.replace(".js", "");
          callback(functionName, cloudFunction.default);
        }
      });
  };

  const __dirname = path.dirname(new URL(import.meta.url).pathname);
  cloud(path.resolve(__dirname + "/triggers/"));
}