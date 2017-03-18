function longest(s1, s2) {
	var myString = s1 + s2;
  var myArray = myString.split("");
  myArray = myArray.sort();

  var newString = '';
  var lastItem = '';

  for(var item in myArray) {
  	if(lastItem != myArray[item]) {
    	newString = newString + myArray[item];
    }
    lastItem = myArray[item];
  }

  return newString;
}
