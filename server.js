const express = require("express");
const path = require("path");
const fs = require("fs");
// const { readFromFile, readAndAppend } = require("../helpers/fsUtils");

const app = express();
const PORT = 5000;

app.use(express.static("public"));
app.use(express.json());

// Require routes, to map respond to our visitors
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Deleting notes by id

// app.delete("/notes/:id", (req, res) => {
//   const noteid = req.params.id;
//   console.log(noteid);
//   if (userIndex === -1) return res.status(404).json({});

//   users.splice(userIndex, 1);
//   res.json(users);
// });

// Starts the server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
