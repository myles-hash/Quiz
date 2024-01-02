import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
CREATE TABLE IF NOT EXISTS quiztable (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT,
    answer1 TEXT,
    answer2 TEXT,
    answer3 TEXT,
    answer4 TEXT
)
`);

db.prepare(`INSERT INTO quiztable (question, answer1, answer2, answer3, answer4) VALUES (?, ?, ?, ?, ?)`).run(
    "Will this quiz be good?",
    "Yep",
    "Yes",
    "Maybe",
    "No"
  );