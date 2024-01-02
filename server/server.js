import Database from "better-sqlite3";
const db = new Database("database.db");

import express from "express";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());

app.get("/quiz", (request, response) => {
  let qAndAs = [];

  qAndAs = db.prepare("SELECT * FROM quiztable").all();

  response.json(qAndAs);
});

app.get("/",(request,response) => {
    response.json('Looking at root route!')
});

app.listen(8080, () => {
    console.log("Server 8080 is working!");
})
