import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
CREATE TABLE IF NOT EXISTS quiztable (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT,
    answer1 TEXT,
    answer2 TEXT,
    answer3 TEXT,
    answer4 TEXT,
    image TEXT,
    correctAnswer TEXT
)
`);

  db.prepare(`INSERT INTO quiztable (question, answer1, answer2, answer3, answer4, image, correctAnswer) VALUES (?, ?, ?, ?, ?, ?, ?)`).run(
    "1. Which of the following is filmmaker Michael Bay known for?",
    "Rom Com",
    "Noir",
    "Explosions",
    "Westerns",
    "./CLIPS/1)Bay.jpg",
    "Explosions"
  );

  db.prepare(`INSERT INTO quiztable (question, answer1, answer2, answer3, answer4, image, correctAnswer) VALUES (?, ?, ?, ?, ?, ?, ?)`).run(
    "2. In 'The Princess Bride' (1987), what does the acronym 'R.O.U.S' stand for?",
    "Roads Over Useless Sidewalks",
    "Rodents of Unusual Size",
    "Really Oily Umami Salmon",
    "Relegated Once Under Subversive",
    "./CLIPS/2)bride.jpg",
    "Rodents of Unusual Size"
  );

  db.prepare(`INSERT INTO quiztable (question, answer1, answer2, answer3, answer4, image, correctAnswer) VALUES (?, ?, ?, ?, ?, ?, ?)`).run(
    "3. In 'Berserk, The Golden Age' (2012), what is the name of the group the protagonist joins?",
    "The Flaming Fists",
    "The Survey Corps",
    "The Phantom Troupe  ",
    "The Band of the Hawk",
    "./CLIPS/3)berserk.jpg",
    "The Band of the Hawk"
  );

  db.prepare(`INSERT INTO quiztable (question, answer1, answer2, answer3, answer4, image, correctAnswer) VALUES (?, ?, ?, ?, ?, ?, ?)`).run(
    "4. In 'Krull' (1983), what is the cyclops' curse?",
    "Born with the knowledge of when they will die",
    "Born with only one eye",
    "Food turns to sand in their mouths",
    "Hated and feared by all other living things on sight",
    "./CLIPS/4)krull.jpg",
    "Born with the knowledge of when they will die"
  );

  db.prepare(`INSERT INTO quiztable (question, answer1, answer2, answer3, answer4, image, correctAnswer) VALUES (?, ?, ?, ?, ?, ?, ?)`).run(
    "5. In 'Parasite' (2019), who is still hiding in the house at the end of the film?",
    "The Cleaner",
    "The cat",
    "The father",
    "Tim",
    "./CLIPS/5)parasite.jpg",
    "The father"
  );

  db.prepare(`INSERT INTO quiztable (question, answer1, answer2, answer3, answer4, image, correctAnswer) VALUES (?, ?, ?, ?, ?, ?, ?)`).run(
    "6. What does Darth Vader say next?",
    "I am the farter",
    "My name is Martha",
    "I am your father",
    "Would you rather",
    "./CLIPS/6)Vader.mp4",
    "I am your father"
  );

  db.prepare(`INSERT INTO quiztable (question, answer1, answer2, answer3, answer4, image, correctAnswer) VALUES (?, ?, ?, ?, ?, ?, ?)`).run(
    "7. In 'Stalker' (1979), what is said to be at the center of 'the zone'?",
    "A room that grants your sincerest wish",
    "A monolith of stone that grants great riches",
    "The meaning of life",
    "An escape",
    "./CLIPS/7)stalker.jpg",
    "A room that grants your sincerest wish"
  );

db.exec(`CREATE TABLE IF NOT EXISTS result_table (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  score_threshold INTEGER,
  message TEXT,
  message2 TEXT,
  image_path TEXT,
  audio_path TEXT
)
`);

db.prepare(`INSERT INTO result_table (score_threshold, message, message2, image_path, audio_path) VALUES (?, ?, ?, ?, ?)`).run(
  0,
  "You are Kevin Spacey",
  "You should be ashamed of youself. Take a good hard look in the mirror and try again >:(",
  "./CLIPS/Spacey.jpeg",
  "./CLIPS/EwTrim.mp3"
);

  db.prepare(`INSERT INTO result_table (score_threshold, message, message2, image_path, audio_path) VALUES (?, ?, ?, ?, ?)`).run(
    3,
    "You are Barry Keoghan",
    "You're a rising star, but not quite at the top yet. Give it another go!",
    "./CLIPS/Barry.jpeg",
    "./CLIPS/Alright.mp3"
  );

  db.prepare(`INSERT INTO result_table (score_threshold, message, message2, image_path, audio_path) VALUES (?, ?, ?, ?, ?)`).run(
    5,
    "You are Leonardo DiCaprio",
    "Great job, you're critically acclaimed! Now go for perfect!",
    "./CLIPS/Leo.jpeg",
    "./CLIPS/Woo.mp3"
  );

  db.prepare(`INSERT INTO result_table (score_threshold, message, message2, image_path, audio_path) VALUES (?, ?, ?, ?, ?)`).run(
    7,
    "You are Denzel Washington",
    "You are the GOAT actor, Perfect score!",
    "./CLIPS/Denzel.jpeg",
    "./CLIPS/GOAT.mp3"
  );





