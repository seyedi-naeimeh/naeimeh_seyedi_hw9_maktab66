function isNumeric(val) {
  return /^-?\d+$/.test(val);
}

function StackCalc(str) {
  const list = str.split(" ");
  let stack = [];

  for (let i of list) {
    if (i === "") {
      return 0;
    } else if (isNumeric(i)) {
      stack.push(+i);
    } else if (i === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (i === "-") {
      stack.push(stack.pop() - stack.pop());
    } else if (i === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (i === "/") {
      stack.push(stack.pop() / stack.pop());
    } else if (i === "DUP") {
      //    let x=list.indexOf(i)-1
      stack.push(stack[list.indexOf(i) - 1]);
    } else if (i === "POP") {
      stack.push();
    } else {
      return "Invalid instruction:" + i;
    }
  }
  return stack.pop();
}

console.log(StackCalc(""));
console.log(StackCalc("5 6 +"));
console.log(StackCalc("3 DUP +"));
console.log(StackCalc("6 5 5 7 * - /"));
console.log(StackCalc("x y +"));

