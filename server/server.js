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

app.use("/uploads", express.static("uploads"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

// Sending Full Data on the first connection
io.on("connection", socket => {
  //console.log("New client connected");
  socket.emit("dataUpdated", dbJson);

  socket.on("addNewGroup", addNewGroupData => {
    socket.emit(addNewGroup(addNewGroupData));
  });

  socket.on("disconnect", () => {
    // my send user is offline now
  });
});

// Adding New Group Data
addNewGroup = addNewGroupData => {
  // Adding Slug to the Group name .. so it can be used in Routing
  addNewGroupData.group_slug = addNewGroupData.group_name
    .toLowerCase()
    .replace(/ /g, "-");

  // check if slug is Exists
  if (
    dbJson.groups.some(group => {
      return group.group_slug === addNewGroupData.group_slug;
    })
  ) {
    console.log("GroupAlreadyExits");
    return "GroupAlreadyExits";
  } else {
    dbJson.groups.push({
      id: uuid(),
      group_slug: addNewGroupData.group_slug,
      group_name: addNewGroupData.group_name,
      group_description: addNewGroupData.group_description,
      group_image: `http://localhost:4004/uploads/${addNewGroupData.group_slug}.jpg`
    });
    fs.writeFileSync(
      `uploads/${addNewGroupData.group_slug}.jpg`,
      addNewGroupData.group_image,
      "base64",
      function(err) {
        console.log("err", err);
      }
    );
    fs.writeFileSync("db/db.json", JSON.stringify(dbJson, null, 2), err => {
      console.log("The file has been saved!");
    });
    console.log("GroupHasAdded");
    return "GroupHasAdded";
  }
};

server.listen(port, () => console.log(`Listening on port ${port}`));
