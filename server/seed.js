import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
CREATE TABLE IF NOT EXISTS quiztable (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT,
    answerone TEXT,
    answertwo TEXT,
    answerthree TEXT,
    answerfour TEXT
)
`);

db.prepare(`INSERT INTO quiztable (question, answerone, answertwo, answerthree, answerfour) VALUES (?, ?, ?, ?, ?)`).run(
    "Will this quiz be good?",
    "Yes",
    "Maybe",
    "Perhaps",
    "No"
  );