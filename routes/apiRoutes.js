const path = require("path");
const express = require("express");
const uniqid = require("uniqid");
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");

module.exports = (app) => {
  // Get list of  notes
  app.get("/api/notes", (req, res) =>
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
  );

  //POST api to receive a new note to save on the request body

  app.post("/api/notes", (req, res) => {
    const { title, text } = req.body;
    // If all the required properties are present
    if (title && text) {
      // Variable for the object we will save
      const newNote = {
        title,
        text,
        id: uniqid(),
      };

      readAndAppend(newNote, "./db/db.json");

      const response = {
        status: "success",
        body: newNote,
      };

      console.log(response);
      res.status(201).json(response);
    } else {
      res.status(500).json("Error in posting review");
    }
  });
};
