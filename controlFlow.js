// Control Flows in js are mainly For Loop/While Loop/ Do While Loop/ If /else if / else
//To repeat certain type of operation or to check as a condition.
for(let i=1 ; i<5; i++){
    console.log(`Here is he ${i}`)

}
console.log('Loop finished')
//Exercise_Simple For loop--------------------------------------------------------

const names= ['shoun', 'mario', 'CodingNewBie']
i = 0 

for (let i = 0; i < names.length; i++){
    
}

while(i < names.length){
    console.log(names[i])
}
//While exercise print numbers in range 1 to 5------------------------------------
let i =0
while(i<5){
    console.log('in loop', i)
    i++
}
//Exercise List Do/While----------------------------------------------------------
const userNames = ['CodingNewBie', 'Google', 'Youtube', 'Chrome']
let i = 3

do{
    console.log(userNames[i])
    i++
}while(i < userNames.length);
//If condition-------------------------------------------------------------------
const userAge = 20
if(userAge === 20){
    console.log('Welcome')
}
//Exercise_list_lenth-------------------------------------------------------------
const userNames = ['CodingNewBie', 'Google', 'Youtube', 'Chrome']

if(userNames.length > 3){
    console.log('They are a lot.')
}
//Exercise_User information--------------------------------------------------------
let userName = prompt('Enter your name:')
let userAge = prompt('Enter your age:')
let userGmail = prompt('Enter your Gmail:')
let userPassword =prompt('Enter you password:')
let userpasswordConfirmation = prompt('Enter your password again to confirm:')

let usergmailCinfirm = userGmail.includes('@')

if (userName.length > 20){
    console.log('Please enter characters between 0 to 20.')
}else if(userAge < 20 ){
    console.log('Your age is not enough.')
}else if(usergmailCinfirm == false){
    console.log('Invalid gmail')
}else if(userPassword.length < 10){
    console.log('This password week.')
}else if(userpasswordConfirmation != userPassword){
    console.log('Sorry your password didnot match.')
}else{
    alert('you are welcome')
}
//Exercise_Switch/case/default-----------------------------------------------------
let userGrade = prompt('Enter your grade: ')

switch(userGrade){
    case "A":
        alert('You got a A.')
        break;
    case "B":
        alert('You got a B.')
        break;
    case "C":
        alert('You got a C.')
        break;
    default:
        alert('Please enter valid grade to evaulate.')
}
