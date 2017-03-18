function divisors(integer) {
  var myArray = [];
  for(i = 2; i < integer; i++) {
    var myNumber = integer / i;
    if(myNumber % 1 == 0 && i != integer) {
      myArray.push(i);
    }
  }
  if(myArray.length < 1) {
    return integer + " is prime";
  } else {
    return myArray;
  }
};
