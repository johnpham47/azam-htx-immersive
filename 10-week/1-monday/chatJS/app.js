const express = require('express')
const app = express()
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path')

app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

const VIEWS_PATH = path.join(__dirname, "/public");
app.set("public", VIEWS_PATH);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg)
    })

})

http.listen(3000, function () {
    console.log('Listening on 3000')
})