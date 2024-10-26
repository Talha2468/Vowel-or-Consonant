var v = document.getElementById("v");
var c = document.getElementById("c");

function toAdd() {
  var add = document.getElementById("word").value.trim();
  var vowel = ["a", "e", "i", "o", "u"];
  
  var hasVowel = false;
  var hasConsonant = false;

  for (let i = 0; i < add.length; i++) {
    if (vowel.includes(add[i].toLowerCase())) {
      hasVowel = true;
      break;
    }
  }

  if (hasVowel) {
    v.innerText += (v.innerText ? ', ' : '') + add; 
  } else {
    hasConsonant = true;
    c.innerText += (c.innerText ? ', ' : '') + add; 
  }

  console.log(add);
  console.log("Vowel:", v.innerText);
  console.log("Consonant:", c.innerText);


  document.getElementById("word").value = '';
}
