const express = require("express");
const app = express();
//const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 4004;
const fs = require("fs");
const uuid = require("uuid/v1");
const db = fs.readFileSync("./db/db.json");
const dbJson = JSON.parse(db);

app.use("/uploads", express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

// Sending Full Data on the first connection
io.on("connection", socket => {
  //console.log("New client connected");
  socket.emit("dataUpdated", dbJson);

  socket.on("addNewGroup", addNewGroupData => {
    // console.log(addNewGroupData);
    addNewGroup(addNewGroupData);
    // my send user is offline now
  });

  socket.on("disconnect", () => {
    // my send user is offline now
  });
});

// Adding New Group Data
const addNewGroup = addNewGroupData => {
  console.log(addNewGroupData);
  dbJson.groups.push({
    id: uuid(),
    group_name: addNewGroupData.group_name,
    group_description: addNewGroupData.group_description,
    group_image: addNewGroupData.group_image
  });

  //if.writeFile(`${group_name}.jpg`,)

  fs.writeFile("db/db.json", JSON.stringify(dbJson, null, 2), err => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
  console.log(dbJson);
};

server.listen(port, () => console.log(`Listening on port ${port}`));
