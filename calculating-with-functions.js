function mySwitch(a, operator, b) {
  switch(operator) {
    case plus:
      return a + b;
      break;
    case minus:
      return a - b;
      break;
    case times:
      return a * b;
      break;
    default:
      return a / b;
  }
}

function zero(func) {
  if(func == undefined) {
    return 0;
  } else {
    return mySwitch(0, func[0], func[1]);
  }
}
function one(func) {
  if(func == undefined) {
    return 1;
  } else {
    return mySwitch(1, func[0], func[1]);
  }
}
function two(func) {
  if(func == undefined) {
    return 2;
  } else {
    return mySwitch(2, func[0], func[1]);
  }
}
function three(func) {
  if(func == undefined) {
    return 3;
  } else {
    return mySwitch(3, func[0], func[1]);
  }
}
function four(func) {
  if(func == undefined) {
    return 4;
  } else {
    return mySwitch(4, func[0], func[1]);
  }
}
function five(func) {
  if(func == undefined) {
    return 5;
  } else {
    return mySwitch(5, func[0], func[1]);
  }
}
function six(func) {
  if(func == undefined) {
    return 0;
  } else {
    return mySwitch(6, func[0], func[1]);
  }
}
function seven(func) {
  if(func == undefined) {
    return 7;
  } else {
    return mySwitch(7, func[0], func[1]);
  }
}
function eight(func) {
  if(func == undefined) {
    return 8;
  } else {
    return mySwitch(8, func[0], func[1]);
  }
}
function nine(func) {
  if(func == undefined) {
    return 9;
  } else {
    return mySwitch(9, func[0], func[1]);
  }
}

function plus(num) {return +num;}
function minus(num) {return -num}
function times(num) {return ["minus", num]}
function dividedBy(num) {return num}
