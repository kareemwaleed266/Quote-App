const quotes = [
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  {
    author: "Bernard M. Baruch",
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  },
  {
    author: "Mae West",
    quote: "You only live once, but if you do it right, once is enough.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
];

var lastIndex = -1;
function generateRandom() {
  var index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (lastIndex === index);
  lastIndex = index;
  return index;
}

function addQuote() {
  const index = generateRandom();
  document.getElementById("block").style.padding = "10px";
  document.getElementById("quote").innerHTML = '"' + quotes[index].quote + '"';
  document.getElementById("author").innerHTML = quotes[index].author;
  console.log(quotes[index]);
}
