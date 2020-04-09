//gram certain part of html code------------------------------------------
const pare = document.querySelector('body > div > p:nth-child(1)')
console.log(pare)

//grab p and print each paragraphs-----------------------------------------

const pare =document.querySelectorAll('p')


pare.forEach(pares =>{
    console.log(pares)
})

console.log(pare[2])

//connect with element tag and class names--------------------------------
const paraName = document.getElementsByTagName('p')
const paraName = document.getElementsByClassName('error')
console.log(paraName)

console.log(paraName)

//grab p text and change it inot CodingNewBie-----------------------------
const para = document.querySelector('p')
para.innerText = 'CodingNewBie'
console.log(para.innerText)

//add CodingNewBie to each p in web---------------------------------------

const paras = document.querySelectorAll('p')
paras.forEach(para => {
    console.log(para.innerText)
    para.innerText += 'CodingNewBie'
})

//insert <h2> into web---------------------------------------------------
let paraName = document.querySelector('.content')
paraName.innerHTML += '<h2>Welcome to my web</h2>'
console.log(paraName.innerHTML)

//Print each names in web(Index page)------------------------------------
let paraName = document.querySelector('.content')
const userNames = ['CodingNewBie', 'Google', 'YouTube', 'Chrome']
userNames.forEach(person => {
      paraName.innerHTML += `<h1> Hello ${person}</h1>`
})