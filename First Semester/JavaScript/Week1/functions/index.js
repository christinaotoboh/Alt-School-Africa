// let count = 0

// //function without parameters
// function addToCount() {
//     let localCount = 1

//     count = count + 1
//     localCount = localCount + 1

//     console.log("Count is: ", count)
//     console.log("Local Count is: ", localCount)

// }

// addToCount()




// //function with parameter
// function displayName(firstName, lastName) {
//     alert(firstName, lastName)
// }

// displayName("John", "Doe")
// displayName("Ade", "Johnson")




// //function with returns
// function getFullName(firstName, lastName) {
//     const fullName = firstName + " " + lastName
//     return fullName
// }

// let fullname = getFullName("John", "Doe")
// alert(fullname)




// //function expression
// const sayHello = function () {
//     console.log("Hello World")
// }

// sayHello()





// //callback functions
// function displayUser(displayType, showFullName, showUserName) {
//     if (displayType == "full") {
//         showFullName()
//     } else {
//         showUserName()
//     }
// }

// function showFullName() { alert("John Doe") }
// function showUserName() { alert("JohnDoe234") }

// displayUser("full", showFullName, showUserName)



// //Arrow functions
// let sum = (a, b) => a + b;
// let sayHelloWorld = () => alert("Hello World!");


// function getFullNames(firstName = "", lastName = "") {
//     const fullName = firstName + " " + lastName
//     return fullName
// }

// let fullname = getFullNames("Christian", "Otoboh")
// alert(fullname)

// function  twoNumbersAdd(number1=0, number2=0) {
//     const totalNumberAdded = number1 + number2
//     return totalNumberAdded
// }

// let total = twoNumbersAdd(10,30)
// console.log(total)

// function perfomerArithmetic(number1, number2, number3) {
//    const sumFirst = number1 + number2
//    const diffInNumber = sumFirst - number3
//    return diffInNumber
// }

// const totalNumber = perfomerArithmetic(10,10,5)
// console.log(totalNumber)

// function operation(number1, number2, operationType){
//     if (operationType == 'add') {
//        const result = number1 + number2
//        return result
//     }
//     else if ( operationType == "subtract") {
//         const result = number1 - number2
//         return result
//     }
//     else if (operationType == "multiply") {
//         const result = number1 * number2
//         return result
//     }
//     else if (operationType == "divide") {
//         const result = number1 / number2
//         return result
//     }
//     else{
//         alert("Operation is not supported")
//     }
// }

// const operationResult = operation(12,12,'divide')
// console.log(operationResult)


// //function Expression
// const sayHello = function(){
//     alert("Hello Christiana")
// }

// //Function declaration or keyword
// function sayHellos() {
//     alert("Hello World")
// }

// // Write a function that prints out a user name using the function expression method
//  const myName = function( firstName, lastName) {
//     alert(`My name is ${firstName + " " + lastName}`)
//  }

//  myName('Christiana', 'Otoboh')

// function myNames(firstName, lastName= " "){
//       alert(`My name is: ${firstName + " " + lastName}`)
// }
//  myName('Christine')


//Call back functions - functions are passed into functions as parameters

//Arrow functions are similar to function expression but with a little difference, the arrow function omits the function keyword

// function sum(){
//     let result = 20 + 30
//     console.log(`The reult is: ${result}`)
// }
// sum()

// Rewriting it using the arrow functions
// let sum = (a, b) => {
//    let result = a + b
//    console.log(`The result is: ${result}`)
// }
// sum(1,12)







