var cardExport = require("./BasicCard.js");

function clozeCard(text, cloze, partial) {
    this.cloze = cloze;
    this.text = text;
    this.partial = partial;
}

var langCloze = new clozeCard(

    "False", 
    "JavaScript and Java are the same is False",
    "JavaScript and Java"

);

console.log(langCloze.cloze);
console.log(langCloze.text);
console.log(langCloze.partial);
