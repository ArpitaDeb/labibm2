function conditionalSum(values, condition) {
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    if (condition === "even" && values[i] % 2 === 0) {
      total += values[i];
    } else if (condition === "odd" && values[i] % 2 !== 0) {
      total += values[i];
    }
  }
  return total;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
if (age < 13) {
  return "Elementary School";
} else if ((age >= 13) && (age <= 18)) {
  return "Secondary School";
} else {
  return "Lighthouse Labs";
}
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));
const whichSchool  = function (age) {
  if (age < 13) {
  return "Elementary School";
  } else if ((age >= 13) && (age <= 18)) {
   return "Secondary School";
  } else {
   return "Lighthouse Labs";
  }
}
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));