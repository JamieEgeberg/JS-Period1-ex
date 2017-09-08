var fs = require('fs');
var path = require('path');

var dirname = process.argv[2];
var ext = process.argv[3];

file = fs.readdir(dirname, function(err, files) {
  for (i = 0; i < files.length; i++) {
    //console.log(path.extname(files[i]));
    //console.log(ext);
    if (path.extname(files[i])==="."+ext) {
      console.log(files[i]);
    }
  }
});