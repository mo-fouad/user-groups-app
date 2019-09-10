const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 4004;
const db = require("./db/db");

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});


// Sending Full Data on the first connection
io.on("connection", socket => {
    //console.log("New client connected");
    socket.emit("dataUpdated", db);
    socket.on("disconnect", () => {
        // my send user is offline now
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
