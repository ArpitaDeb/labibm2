var bill; 
var tip;
var total;
bill = (10.25 + 3.99 + 7.15);
tip = (bill * 0.15);
total = bill + tip;
console.log(total);
//
function bmiCalculator(weight, height) {
    var bmi = weight/ Math.pow(height, 2);
    return Math.round(bmi);
}
var bmi = bmiCalculator(30, 1.2);
console.log(bmi);
//
function lifeInWeeks(age) {
    var yR = 90 - age;
    
    var x = yR * 365;
    var y= yR * 52;
    var z = yR * 12; 
    
    console.log(x,y,z);
}
lifeInWeeks(30);
//
var output = [];
var count= 1;

function fizzBuzz() {
    if ((count%3 === 0 && count%5 === 0)){
        output.push("fizzBuzz");
    }
    else if (count % 3 === 0){
        output.push("fizz");
    }
    else if (count % 5===0){
        output.push('Buzz');
    }
    else{output.push(count);}
    
    count++;
    console.log(output);
}



