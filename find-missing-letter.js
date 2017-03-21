function findMissingLetter(myArray) {
  var alpha = Array.from("abcdefghijklmnopqrstuvwxyz");

  if(!alpha.includes(myArray[0])) {
    alpha = alpha.join().toUpperCase().split(",");
  }

  var myIndex = alpha.indexOf(myArray[0]);
  var newArray = [];

  for(var i = myIndex; i <= myArray.length + myIndex; i++) {
    newArray.push(alpha[i]);
  }

  var result = newArray.filter(function(x) { return myArray.indexOf(x) < 0 }).toString();
  return result;
}
