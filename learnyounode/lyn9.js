
var net = require('net')
var port = process.argv[2];

function pad(n) { return n < 10 ? '0' + n : n }

var server = net.createServer(function (socket) {
    d = new Date();
    s = d.getFullYear() + "-"
        + pad(d.getMonth() + 1) + "-"
        + pad(d.getDate()) + " "
        + pad(d.getHours()) + ":"
        + pad(d.getMinutes()) + "\n";
    socket.write(s);
    socket.end();
});
server.listen(port)
