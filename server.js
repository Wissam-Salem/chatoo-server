let express = require("express");
let cors = require("cors");
let cookieParser = require("cookie-parser");
let { createServer } = require("http");
let { Server } = require("socket.io");
let connect = require("./db/db");
let app = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded());
app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true
}));
let server = createServer(app);
let io = new Server(server, {
    cors: {
        origin: true,
        credentials: true
    }
});
let userRegister = require("./routes/userRegister");
let authenticate = require("./routes/authenticate");
let userLogin = require("./routes/userLogin");
let addContact = require("./routes/addContact");
let userLogout = require("./routes/userLogout");
let getContact = require("./routes/getContact");
let changePfp = require("./routes/changePfp");

connect();

app.use("/", userRegister);
app.use("/", authenticate);
app.use("/", userLogin);
app.use("/", userLogout);
app.use("/", addContact);
app.use("/", getContact);
app.use("/", changePfp);

io.on("connection", (socket) => {
    console.log(`User ${socket.id} is connected`);
    socket.on("join_room", (data) => {
        console.log(data);
        socket.join(data)
    })
    socket.on("send_message", (data) => {
        console.log(data);
        socket.to(data.room).emit("recieve_message", data)
    });
});

server.listen(8080, () => {
    console.log("Running On Port 8080");
})