

function basicCard(front, back) {
    this.front = front;
    this.back = back;
}

var lang = new basicCard("JavaScript and Java are the same", "False");

console.log(lang.front);
console.log(lang.back);

module.exports = basicCard;