
function whoisPaying(names) {
   var numberOfPeople = names.length;
    var randomPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPosition];
 return randomPerson + " is going to buy lunch today!" ;
}
whoisPaying(names['Ar','Br','Cr','Dr']);
