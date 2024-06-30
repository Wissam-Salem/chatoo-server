let express = require("express");
let cors = require("cors");
let cookieParser = require("cookie-parser");
let { createServer } = require("http");
let { Server } = require("socket.io");

let app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(cors({
    origin: true
}));
let server = createServer(app);
let io = new Server(server, {
    cors: {
        origin: true
    }
});

io.on("connection", (socket) => {
    console.log(`User ${socket.id} is connected`);

    socket.on("send_message", (data) => {
        console.log(data.message);
        socket.broadcast.emit("recieve_message", {
            data
        })
    });

})

server.listen(8080, () => {
    console.log("Running On Port 8080");
})