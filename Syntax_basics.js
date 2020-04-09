//Syntax Basics of JS

alert('My name is CodingNewBie')
//----------------------------------------------------------------------------
let userName = 'CodingNewBie'
userName = 'Ali'
alert(userName)
const newLocal = 'CodingNewBie'
//----------------------------------------------------------------------------
const userName = newLocal
userName = 'Ali'
alert(userName)

//Print in console------------------------------------------------------------
console.log('hello,world')

//Some of the operations with js strings--------------------------------------
let firstName = 'CodingNewBie'
let lastName = 'Alijon'

let fullName = `${firstName} ${lastName}`

console.log(fullName[0])
console.log(fullName.length)

console.log(fullName.toUpperCase())
let resultCase = fullName.toLowerCase()
console.log(resultCase)
let resultIndex = firstName.indexOf('z')
console.log(resultIndex)
//Some of the operations with js strings---------------------------------------
let userEmail = 'urinovazizbek123456789@gmail.com'
let userIndex = userEmail.lastIndexOf('i')
// userIndex = userEmail.slice(0,10)
// userIndex = userEmail.substr(0,10)
userIndex = userEmail.replace('a', 'l')
console.log(userIndex)

//Numbers in Js---------------------------------------------------------------

let radius = 10
const pi = 3.14
let solutionArea = pi * radius**2
console.log(solutionArea)

//Some operations------------------------------------------------------------
let likes = 10
likes = likes + 1
likes ++ 
likes += 10
console.log(5 * 'likes')

//Some operations-----------------------------------------------------------------

let result = 'hello'+ likes
console.log(result)
//insert string and intiger-----------------------------------------------------

const title = 'best reads of 2040'
const author = 'CodingNewBie'
const likes = 30
let result = title + author + likes
let result = `The blog called ${title} by ${author} has ${likes} likes.`
console.log(result)

//Some operations---------------------------------------------------------------
let userNames = ['CodingNewBie', 'Google', 'YouTube', 'Chrome']
userNames[1] = 'Safari'
let userAges = [20,30,40,50]
let result = userNames.join('-')
let result = userNames.indexOf('CodingNewBie')
let result = userNames.push('Ab')
result = userNames.pop()

console.log(result)

//check in user gmail @ include or not-----------------------------------------
let userEmail = 'urinovazizbek123456789@gmail.com'
let result = userEmail.includes('@')
console.log(result)

//convert str into number-----------------------------------------------------
let userScore = '100'
userScore = Number(userScore)
console.log(userScore + 1)
console.log(typeof userScore)

//check user email-------------------------------------------------------------
let userName = prompt('Please enter your name: ')
let userEmail = prompt('Email/Gmail: ');
let checkEmail = userEmail.includes('@')

if (checkEmail == true){
    console.log(`Thank you ${userName}.`)
}else{
    console.log('Please enter available one.')
}