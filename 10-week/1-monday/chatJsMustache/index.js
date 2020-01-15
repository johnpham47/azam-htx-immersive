const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path')


app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.engine("mustache", mustacheExpress());
app.set("views", "./views");

app.set("view engine", "mustache");

app.get('/', function (req, res) {
    res.render('chat')
});

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg)
    })
    socket.on('connectUser', function (username) {
        socket.username = username[3];
        io.emit('chat message', `${socket.username} has connected!`)
    })

})

http.listen(3000, function () {
    console.log('Listening on 3000')
})