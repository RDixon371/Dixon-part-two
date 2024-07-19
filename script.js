let playerName = prompt("Welcome to GC mini golf! What is your name?");
let holeCount = Number(prompt("Hi, " + playerName + "! Would you like to play 3 or 6 holes?"));
let total = 0;
let par = holeCount * 3;
for (let i = 0; i < holeCount; i++) {
   let strokes = Number( prompt("How many putts for hole " + (i + 1) + "? (par: 3)"));
   total += strokes
}
let score = total -= par;
if (score > 0) {
    console.log("Nice try " + playerName + "... Your total par was:+" + score);
} else if (score < 0) {
    console.log("Great job, " + playerName + "! Your total par was:-" + Math.abs(score));
} else {
    console.log("Good game, " + playerName + ". Your total par was: 0");
}