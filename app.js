/*
Name: Aline Vetrov
Title: JavaScript Ex1
Date: 08/01.2020
*/

//This is a line comment
let myFirstIntVar = 4
let myFirstFloat = 9.9
let myFirstBoolVar = false
let myNullVar = null
let myUndefined

console.log("Let's work with our variables")
console.log("____________________________\n")

console.log(myFirstIntVar)
console.log(myFirstBoolVar);
console.log(myFirstFloat);
console.log(myNullVar);
console.log(myUndefined);

let firstName = 'Aline'
let lastName = 'Vetrov'

console.log(firstName + ' ' + lastName);

//Reassign variables
let mySecondInt = 3
console.log(mySecondInt);
mySecondInt = 5
console.log(mySecondInt);

console.log("Addition");
let myAddition = myFirstIntVar + mySecondInt
console.log(myAddition);
console.log("~~~~~~~~~~~~~~~~~~~~");

console.log("Subtraction");
let mySubtraction = mySecondInt - myFirstIntVar
console.log(mySubtraction);
console.log("~~~~~~~~~~~~~~~~~~~~~~");

console.log("Mult");
let myMult = myFirstIntVar * mySecondInt
console.log(myMult);
console.log("~~~~~~~~~~~~~~~~~~~~~~");

console.log("Division");
let myDiv = myFirstIntVar / mySecondInt
console.log(myDiv);
console.log("~~~~~~~~~~~~~~~~~~~~~~");

console.log("Int + Float");
let floatAddition = myFirstIntVar + myFirstFloat
console.log(floatAddition);
console.log("~~~~~~~~~~~~~~~~~~~~~~");

console.log("Int - Float");
let floatSubtraction = myFirstIntVar - myFirstFloat
console.log(floatSubtraction);
console.log("~~~~~~~~~~~~~~~~~~~~~~");

console.log("Int / Int");
let intDiv = myFirstIntVar / mySecondInt
console.log(intDiv);
console.log("~~~~~~~~~~~~~~~~~~~~~~");

//implicit convert to int
let x = 4/2
console.log(x);
console.log("~~~~~~~~~~~~~~~~~~~~~~");

console.log("Mod no rem");
let modRes = 6 % 2
console.log(modRes);
console.log("~~~~~~~~~~~~~~~~~~~~~~");

console.log("Mod with rem");
modRes = 13 % 4
console.log(modRes);
console.log("~~~~~~~~~~~~~~~~~~~~~~");

console.log("++ starting at 3");
let a = 3;
a++;
console.log(a);
console.log();

console.log("-- starting at 7");
let b = 7;
b--;
b--;
console.log(b);
console.log();

console.log("compound -= 7 & 5");
let myForthInt = 7;
myForthInt -= 5;
/*
    Equivalent
    myForthInt = myForthInt - 5
*/
console.log(myForthInt);
