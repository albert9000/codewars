function squareDigits(num){
  //may the code be with you
  //Need to take the number given and break it apart into individual ints
  //This will need to be a string so I can grab the character
  var myString = String(num);

  //my empty variable
  var myAnswer = '';

  for(i = 0; i < myString.length; i++) {
    var myDigit = Number(myString.charAt(i));
    var mySquare = String(myDigit * myDigit);
    myAnswer = myAnswer + mySquare;
  }
  //I've got my concated string and I'm ready to render it as a number
  return Number(myAnswer);
}
