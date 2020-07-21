// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//Create a function that give as many numbers of the Fibonacci sequence as an array
const fibonacci = (num) => {
    //Declare an array with the first two numbers of the Fib. sequence
    let fibArray = [1, 1];
    //Check to make sure the uer put in a number as an arg
    if (typeof num !== "number") {
        return "Please use a postitive number as the argument for the function fibonacci(num)."
    } else {
        //Make sure the user put in a positive whole number as an arg.
        if (num <= 0 && num % 1 !== 0) {
            return "Please use a postitive number as the argument for the function fibonacci(num).";
        //If the user only wants the first number, just give it to them because otherwise my logic will break
        } else if (num == 1) {
            return [1];
          //If the user just wans the first two numbers, I'll just return the array I started off with
          } else if (num == 2) {
              return [fibArray];
            //Now the real logic can begin
            } else {
                //Create a for loop that will create more additions to the Fib sequence and will iterate as many times as specified in the parameter
                for (let i = 0; i+2 < num; i++) {
                    let nextNum = fibArray[i] + fibArray[i+1];
                    //Push the new value to the array
                    fibArray.push(nextNum);
                }
              }

    }
    //return the array 
    return fibArray;
}
//Check to make sure the function works.
console.log("-----CHALLENGE 1-----");
console.log("This is the result of my function fibonacci(10):");
console.log(fibonacci(10));
console.log("The expected result is:");
console.log("[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]");
console.log("\n");



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//Create an array that takes a param of an array
const numFilter = (mixedArray) => {
    //filter through the array to grab only the odd numbers
    let numArray = mixedArray.filter(value => {
         return (typeof value == "number" && value % 2 !==0);
        })
    //sort the number array given by the filter
    let numSortedArray = numArray.sort((a,b) => a-b)    
    //return the sorted number array
    return numSortedArray;
}
//Check to see that the function works
console.log("-----CHALLENGE 2-----");
console.log("This is the result of my function numFilter(fullArr1):");
console.log(numFilter(fullArr1));
console.log("The expected result is:");
console.log("[-9, 9, 7, 199]");
console.log("\n");
console.log("This is the result of my function numFilter(fullArr2):");
console.log(numFilter(fullArr1));
console.log("The expected result is:");
console.log("[-9, 9, 7, 199]");
console.log("\n");


// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

//Create a function that takes any string as an argument. 
const getMiddleChar = (string) => {
    if (typeof string == "string") {
        //If the lenght of the string is just one.
        if (string.length == 0) {
            return "";
        } else if (string.length == 1){
            return string;
          } else {
            //Get the length of the argument string
            let stringLength = string.length;
            //If the string's length is even...
            if (stringLength % 2 == 0) {
                //Grab the first of the two middle chars
                let firstChar = string.charAt((stringLength/2)-1);
                //Grab the second of the two middle chars
                let secondChar = string.charAt(stringLength/2);
                //Combine the chars to make a string ot return
                let middleChars = firstChar + secondChar;
                return middleChars;
                    
                //Else, if the string's length is odd  
              } else {
                  //Grab the middle letter of the string
                  let middleChar = string.charAt(Math.floor(stringLength/2));
                  return middleChar;
                }
        }
    //If the user didn't use a string as a param 
    } else {
        return "Please us a string as the param for the function getMiddleChar()"
    }
}
//Check to make sure the function works
console.log("-----CHALLENGE 3-----");
console.log("This is the result of my function getMiddleChar(middleLetters1):");
console.log(getMiddleChar(middleLetters1));
console.log("The expected result is:");
console.log("l");
console.log("\n");
console.log("This is the result of my function getMiddleChar(middleLetters2):");
console.log(getMiddleChar(middleLetters2));
console.log("The expected result is:");
console.log("oc");
console.log("\n");




// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

//Declare a class called Sphere, 
class Sphere {
    //Give the class a constructor that takes the argument of radius and units
    constructor(radius, units = "units") {
        this.radius = radius;
        this.units = units;
    }
    //Give the class a method that canluates its volume and returns it
    getArea() {
        let area = 4*(3.1415)*(this.radius)*(this.radius);
        return ` ${area} ${this.units} cubed`;
    }
}
//Test to make sure the class and its components work
let mySphere1 = new Sphere(4);
let mySphere2 = new Sphere(6, "inches");
let mySphere3 = new Sphere(8, "cm");

console.log("-----CHALLENGE 4-----");
console.log("This is the result of creating a three new Sphere objects:");
console.log("mySphere1:"); 
console.log(mySphere1); 
console.log("\n");
console.log("mySphere2:"); 
console.log(mySphere2); 
console.log("\n");
console.log("mySphere3:"); 
console.log(mySphere3); 
console.log("\n");
console.log(`The expected area of myShere1 is 201.056 units squared. The output area is ${mySphere1.getArea()}.`);
console.log(`The expected area of myShere2 is 452.376 inches squared. The output area is ${mySphere2.getArea()}.`);
console.log(`The expected area of myShere3 is 804.224 cm squared. The output area is ${mySphere3.getArea()}.`);
console.log("\n");

// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

//Declare a function that takes an array as an argument
const accumulatingSum = (array) => {
    //Declare a variable that hold the acumulating sum
    let currentSum;
    //If the length of the arg array is greater than 0...
    if (array.length > 0){
        //Set calue of currentSum to 0 and .map() through the array and add the current elements value to the accumulaing sum and push the new value to the new array crated by .map()
        currentSum = 0;
        let newArray = array.map(value => {
            currentSum += value;
            return currentSum;
        })
        return newArray;
    } else {//Return the empty array
      return array.map(value => {
        return currentSum + value;
      })
    }
} 
//Test to make sure the function works
console.log("-----CHALLENGE 5-----");
console.log("This is the result of my function accumulatingSum(numbersToAdd1):");
console.log(accumulatingSum(numbersToAdd1));
console.log("The expected result is:");
console.log("[2, 6, 51, 60]");
console.log("\n");
console.log("This is the result of my function accumulatingSum(numbersToAdd2):");
console.log(accumulatingSum(numbersToAdd2));
console.log("The expected result is:");
console.log("[0, 7, -1, 11]");
console.log("\n");
console.log("This is the result of my function accumulatingSum(numbersToAdd3):");
console.log(accumulatingSum(numbersToAdd3));
console.log("The expected result is:");
console.log("[]");
console.log("\n");
