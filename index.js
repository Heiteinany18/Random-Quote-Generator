var quotes = [
  "The way get started is to quit talking and begin doing. <br> ~Walt Disney",
  "Opportunities don't happen, you create them",
  "Colours of the leaf changes with time, same is with humans",
  "Those who says it cannot be done should not interrupt the person doing it.",
  "My life my rules so, keep your nose out of my business",
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("qouteDisplay").innerHTML = quotes[randomNumber];
}
