var app = require('express')();
var http = require('http').Server(app);
const io = require('socket.io')(http);
const stock = require("./stock.js");
var cors = require('cors');
app.use(cors());

io.origins(['https://project-client.teachmeapp.me:443']);

var volvo = {
    name: "Volvo 740",
    rate: 1.002,
    variance: 0.6,
    startingPoint: 20,
};

var saab = {
    name: "Saab 900",
    rate: 1.002,
    variance: 0.3,
    startingPoint: 20,
};

var ford = {
    name: "Ford fiesta",
    rate: 1.002,
    variance: 0.5,
    startingPoint: 20,
};

var fiat = {
    name: "Fiat 500",
    rate: 1.002,
    variance: 0.4,
    startingPoint: 20,
};
var cakes = [volvo, saab, ford, fiat];



app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});

setInterval(function () {
    cakes.map((cake) => {
        cake["startingPoint"] = stock.getStockPrice(cake);
        return cake;
    });

    console.log(cakes);

    io.emit("stocks", cakes);
}, 5000);


http.listen(9000, function() {
    console.log('listening on *:9000');
});
