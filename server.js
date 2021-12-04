const express = require("express");
const path = require("path");
const fs = require("fs");
var notes = require("./db/db.json");
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("./helpers/fsUtils");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

// Require routes, to map respond to our visitors
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Deleting notes by id

// app.delete("/api/notes/:id", (req, res) => {
//   const noteId = req.params.id;
//   console.log(noteId);
//   if (!noteId) {
//     res.status(400).json({ msg: `No note whit id of ${req.params.id}` });
//   } else {
//     const test = notes.filter((notes) => notes.id !== req.params.id);
//     writeToFile(path.join(__dirname, "./db/db.json"), test);
//     console.log(test);
//     res.json(test);
//   }
// });

// Starts the server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
