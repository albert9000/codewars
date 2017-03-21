function spinWords(words){
  var wordsArray = words.split(" ");
  var newWords = "";

  for(var word in wordsArray) {
    if(wordsArray[word].length >= 5) {
      var wordArray = wordsArray[word].split("");
      wordArray = wordArray.reverse();
      newWords = newWords + wordArray.join("") + " ";
    } else {
      newWords = newWords + wordsArray[word] + " ";
    }
  }

  return newWords.trim();
}
