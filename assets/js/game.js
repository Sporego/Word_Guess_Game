// Word List
var elementList = [
  // S
  "Hydrogen",
  "Helium",
  // P
  "Lithium",
  "Beryllium",
  "Boron",
  "Carbon",
  "Nitrogen",
  "Oxygen",
  "Fluorine",
  "Neon",
  // D
  "Sodium",
  "Magnesium",
  "Aluminum",
  "Silicon",
  "Phosphorus",
  "Sulfur",
  "Chlorine",
  "Argon"
  // F (Not Added)
];

// Lives
var tryLimit = 10;
// Tracks Guessed Letters
var guessLibrary = [];
// Tracks Current Word Index
var wordIndex;
// Lives Left
var lives = 0;
// Win Counter
var wins = 0;
// Loss Counter
var losses = 0;
// Did game start?
var gameStarted = false;
// Did game end?
var gameFinished = false;
