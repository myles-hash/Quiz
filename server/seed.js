import Database from "better-sqlite3";
const db = new Database("database.db");
//db.exec(`DROP TABLE quiztable;`) // delete table dev tool
db.exec(`
CREATE TABLE IF NOT EXISTS quiztable (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT,
    answer1 TEXT,
    answer2 TEXT,
    answer3 TEXT,
    answer4 TEXT,
    image TEXT
)
`);

  db.prepare(`INSERT INTO quiztable (question, answer1, answer2, answer3, answer4, image) VALUES (?, ?, ?, ?, ?, ?)`).run(
    "1. Which of the following is filmmaker Michael Bay known for?",
    "Rom Com",
    "Noir",
    "Explosions",
    "Westerns",
    "./CLIPS/1)Bay.jpg"
  );

  db.prepare(`INSERT INTO quiztable (question, answer1, answer2, answer3, answer4, image) VALUES (?, ?, ?, ?, ?, ?)`).run(
    "2. In 'The Princess Bride' (1987), what does the acronym 'R.O.U.S' stand for?",
    "Roads Over Useless Sidewalks",
    "Rodents of Unusual Size",
    "Really Oily Umami Salmon",
    "Relegated Once Under Subversive",
    "./CLIPS/2)bride.jpg"
  );

  db.prepare(`INSERT INTO quiztable (question, answer1, answer2, answer3, answer4, image) VALUES (?, ?, ?, ?, ?, ?)`).run(
    "3. In 'Berserk, The Golden Age' (2012), what is the name of the group the protagonist joins?",
    "The Flaming Fists",
    "The Survey Corps",
    "The Phantom Troupe  ",
    "The Band of the Hawk",
    "./CLIPS/3)berserk.jpg"
  );

  db.prepare(`INSERT INTO quiztable (question, answer1, answer2, answer3, answer4, image) VALUES (?, ?, ?, ?, ?, ?)`).run(
    "4. In 'Krull' (1983), what is the cyclops' curse?",
    "Born with the knowledge of when they will die",
    "Born with only one eye",
    "Food turns to sand in their mouths",
    "Hated and feared by all other living things on sight",
    "./CLIPS/4)krull.jpg"
  );

  db.prepare(`INSERT INTO quiztable (question, answer1, answer2, answer3, answer4, image) VALUES (?, ?, ?, ?, ?, ?)`).run(
    "5. In 'Parasite' (2019), who is still hiding in the house at the end of the film?",
    "The Cleaner",
    "The cat",
    "The father",
    "Tim",
    "./CLIPS/5)parasite.jpg"
  );

  db.prepare(`INSERT INTO quiztable (question, answer1, answer2, answer3, answer4, image) VALUES (?, ?, ?, ?, ?, ?)`).run(
    "6. What does Darth Vader say next?",
    "I am the farter",
    "My name is Martha",
    "I am your father",
    "Would you rather",
    "./CLIPS/6)Vader.mp4"
  );

  db.prepare(`INSERT INTO quiztable (question, answer1, answer2, answer3, answer4, image) VALUES (?, ?, ?, ?, ?, ?)`).run(
    "7. In 'Stalker' (1979), what is said to be at the center of 'the zone'?",
    "A room that grants your sincerest wish",
    "A monolith of stone that grants great riches",
    "The meaning of life",
    "An escape",
    "./CLIPS/7)stalker.jpg"
  );
