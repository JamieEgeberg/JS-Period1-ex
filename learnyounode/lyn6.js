var http = require('http');

var url = process.argv[2];

http.get(url,function(reponse) {
    reponse.setEncoding("utf8");
    reponse.on("data", console.log);
    reponse.on("error",  console.error);
  });