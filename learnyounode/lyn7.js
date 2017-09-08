var http = require('http');

var url = process.argv[2];

var allData = "";

var dataHandle = (data) => {
    allData+=data;
}
var endHandle = () => {
    console.log(allData.length);
    console.log(allData);
}

http.get(url, function (response) {
    response.setEncoding("utf8");
    response.on("data", dataHandle);
    response.on("error", console.error);    
    response.on("end", endHandle);
});