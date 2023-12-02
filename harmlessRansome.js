const noteText = "this is a secret note for you from a secret admirer";
const magazineText =
  "puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an  of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited";

function harmlessRansome(noteText, magazineText) {
  let magObj = {};
  let magText = magazineText.split(" ");
  for (let word of magText) {
    magObj[word] ? magObj[word]++ : (magObj[word] = 1);
  }

  noteTextArr = noteText.split(" ");

  for (let word of noteTextArr) {
    if (!magObj[word]) {
      return false;
    }
  }
  return true;
}

console.log(harmlessRansome(noteText, magazineText));
