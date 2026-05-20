function cap(inp) {
  return (inp[0].toUpperCase() + inp.slice(1));
}

function reverseString(inp) {
  return inp.split("").reverse().join("");
}

function Calculator() {

  const add = (a,b) => a+b;
  const subtract = (a,b) => a-b;
  const multiply = (a,b) => a*b;
  const divide = (a,b) => a/b;


  return {add, subtract, divide, multiply};
}

export {cap, reverseString, Calculator}