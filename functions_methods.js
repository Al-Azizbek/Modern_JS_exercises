//functions in js user input and print message according to their age-------------
function userInfo(){
    let userName = prompt("enter your name:")
    let userSurname = prompt("please enter your surname:")
    let userGmail = prompt("Please enter your gmail:")
    let userAge = prompt("Please enter your age:")

    let userAgeCalculation = 2020 - userAge
    alert(`Hello ${userName} ${userSurname}. Your gmail is ${userGmail} and you were born in ${userAgeCalculation}. `)
    switch (userAge){
        case 20:
            console.log('You are old young.')
        case 19:
            console.log('You are young.')
        case 18:
            console.log('You are too young.')
        default:
            console.log('You are baby.')     
    }
}

userInfo()

//Simple example-------------------------------------------------------
const circuleRadius = function(){
    userName = prompt('Enter:')
    console.log(`${userName}`)

}
circuleRadius()

//Simple example with arrow function-----------------------------------
const circuleRadius = ()=>{
    userName = prompt('Enter:')
    console.log(`${userName}`)

}
circuleRadius()

//Simple example with arrow function------------------------------------
const calculateRadius = (radius) =>{
    return 3.14 * radius
}
const area = calculateRadius(5)
console.log(area)

//Simple example with arrow function-------------------------------------
function userName(radius){
    return radius*10
}
console.log(userName)

//ForEach example-------------------------------------------------------
let userNames = ['CodingNewBie', 'YouTube', 'Google']

userNames.forEach(function(person){
    console.log(person)
})
