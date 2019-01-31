// Base Logic
// Word List (Row/Orbital)
var elementList = [
  // 1S
  "Hydrogen",
  "Helium",
  // 2S
  "Lithium",
  "Beryllium",
  // 2P
  "Boron",
  "Carbon",
  "Nitrogen",
  "Oxygen",
  "Fluorine",
  "Neon",
  // 3S
  "Sodium",
  "Magnesium",
  // 3P
  "Aluminum",
  "Silicon",
  "Phosphorus",
  "Sulfur",
  "Chlorine",
  "Argon"
  // 4S (Not Added)
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
