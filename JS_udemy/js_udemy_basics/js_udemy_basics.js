//  The Ternary Operator 

let userAge = prompt("Please enter your age: ")

userAge >= 18 ? alert("Drink beer"): alert("Drink juice") 
let answerDrink = userAge >= 18 ? "Beer": "Juice"  //save the result into
console.log(answerDrink) // print it into console

if (userAge > 18){
    alert("Drink Beer")
}else{
    alert("Drink Juice")
}

// Switch

let userGrade = prompt("Enter your grade: ")

switch (userGrade){
    case "A":
        alert("Your have high scores in all subjects")
        break
    case "B":
        alert("You have to try a bit to be the best")
        break
    case "C":
        alert("Try hard")
        break
    default:
        alert("Please enter the available grade")
        break
}

// equlity operators

let height = "0"
if(height || height === 0){
    console.log("var is defined")
}else{
    console.log("var is not defined")
}

// 23 == '23' -> JS convert string ' 23 ' into number and comapre with 23 and result true
// 23 === 23 -> JS will not convert and says they are totaly different data types 

// concatanation way
let userAge = prompt("Please enter your age: ")
alert(`Hello, ${userAge}`)

// Functions

function userRet(){
    let userName = prompt("Enter your name: ")
    let userAge = prompt("Enter your age: ")
    let retCal = 65 - userAge
    alert(`${userName}, you have left ${retCal} years to retairments.`)

}

userRet()

// function expression
var whatDoyouDo = function(job, firstname){} 
// function declaration
function whatDoyouDo(job, firstname){} 

// Arrays

let userNames = ["Google", "YouTube", "CodingNewBie"]

let userYears = [2020, 2021, 2022]

userNames[3] = "Mozilla" // add element to index 3
userNames.push("Safari") // add element to end
userNames.unshift("Stackflow") // add element to beggining of array
userNames.pop() // delete element from end
userNames.indexOf("Google") // show the index of certain element
console.log(userNames.length)
console.log(userNames)

// Objects

var CodingNewBie = {
    name : "Azizbek",
    last : "Urinov",
    age  : 27,
    family : ["Abubakr", "Abdurauf", "Murodjon"],
    job : "student",
    isMarried : false,
    calcAge : function(){
        return 2020 - this.age
    }
}

let newVar = CodingNewBie.calcAge()
console.log(newVar)
console.log(CodingNewBie)
CodingNewBie.age = 26
console.log(CodingNewBie)
console.log(CodingNewBie.family[0])

let firstUser = {
    fullName : "Azizbek",
    surname : "Urinov", 
    age : 22,
    mass : 65,
    height : 1.6,
    bmi : function(){
        this.bmi_user_first = this.mass / (this.height * this.height)
    }
}

firstUser.bmi()

console.log(firstUser)

// LOOPS and ITERATIONS

let users = ["Azizbek", "Murodjon", "Abdurauf", 1998,"Alijon"]

// print list elements
for (let i = 0; i <users.length; i++){
    if (typeof users[i] !== 'number'){
        console.log(users[i])
        continue
    }
}


// to print vise version
for (let i = users.length - 1; i >=0; i--){
    console.log(users[i])
}