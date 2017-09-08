var http = require('http');

var results = [];
var count = 0;

function printResults() {
    for (var i = 0; i < 3; i++) {
        console.log(results[i])
    }
}

function httpGet(index) {
    http.get(process.argv[2 + index], function (request) {
        var result = "";
        request.setEncoding("utf8");
        request.on("data", function (data) {            
            result += data;
        });
        request.on("end", function () {
            
            results[index] = result;
            count++;
            if (count === 3) {
                printResults()
            }
        });
    })
}

for (var i = 0; i < 3; i++) {
    httpGet(i)
}
