// Common String Methods

//let email = 'kingdomuwaoma@gmail.com'

// let result = email.lastIndexOf('o')

// console.log(result)
// console.log(email.length, answer)
//console.log(result.slice(0, 4))

//let result = email.substr(4, 10)

//let result = email.replace('n', 'u')



//console.log(result)

//let likes = 10

//likes++
//likes--
//likes += 15
//likes -= 5
//likes *= 2


//console.log(likes)

//let name = ['mario', 'Juli', 'Zulu']

//let result = name.includes('mario')

//console.log(result)

// for(let i = 1; i < 3; i++) {
//     console.log('in loop', i)
// }


// // if statements

// const age = 21

// if(age > 20) {
//     console.log('You are an old man')
// }

// const ninjas = ['gift', 'chris', 'future', 'china']

// if(ninjas.length > 3) {
//     console.log('Ooops! There are alot of ninjas')
// }

//logical && or || with if, if else and else statements
// const password = 'p@5o7'

// if(password.length < 5 ){
//     console.log('Weak password, please increase words')
// } else if (password.length > 8 && password.includes('@') || password.length >= 5) {
//     console.log('super strong password')
// }else {
//     console.log('Strong password')
// }

//Switch Statements

// const grade = 'D'

// switch(grade) {
//     case 'A': 
//         console.log('Your grade is A')
//         break
//     case 'B': 
//         console.log('Your grade is B')
//         break
//     case 'C': 
//         console.log('Your grade is C')
//         break
//     case 'D': 
//         console.log('Your grade is D')
//         break
//     case 'E': 
//         console.log('Your grade is E')
//     default:
//         console.log('This is not a valid score')

// }

// variables and block scope

// let age = 30

// if(true) {
//     let age = 20
//     let name = 'cruise'
//     console.log('inside 1st code block', age, name)

// if(true) {
//     let age = 50
//     console.log('inside 2nd block', age, name)
// }
// }

// console.log('outside code block', age, name)

 //Function declaration
// function greet(){
//     console.log('How are you?')
// }

// greet()


// //function expression
// const fight = function() {
//     console.log('Its time to fight')
// };
// fight()
// fight()

// Arguments and Parameters
// const fight = function(name = 'Brack', season = 'summer') {
//         console.log(`${name} is a very brave fighter, especially during the ${season}`)
//      };

//  fight('John Cena', '')
//  fight()

// const fight = function(name = 'Brack', season = 'summer') {
//     console.log(`${name} is a very brave fighter, especially during the ${season}`)
//  };

 //const calcArea = function(radius) {
   // return 3.142 * radius**2
   
//};

 //const area = calcArea(5)
 //console.log('area is :', area)

//arrow function

//  const calcArea = radius =>3.142 * radius**2;

// const area = calcArea(5)
//  console.log('area is :', area)

//Practice Arrow Function

/*const greet = function() {
    return 'hello, world'
}
const result = greet()
console.log(result)*/

// const greet = () => 'hello, world'

// const result = greet()
// console.log(result)

//Object Literals

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystalpalace@gmail.com',
//     location: 'berling',
//     blogs: ['my new story', 'how to get rich']
// }
// console.log(user)
// console.log(user.name)

// //user.age = 35

// console.log(user.age)

// console.log(user['location'])
// user[`name`] = 'mrep'
// //console.log(user.name)
// console.log(user['name'])

//How to add a method to an object
// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystalpalace@gmail.com',
//     location: 'berling',
//     blogs: ['my new story', 'how to get rich'],
//     login:function(){
//         console.log('you are logged in')
//     },
//     logout: function(){
//         console.log('you are logged out')
//     },
//     blogPost: function(){
//         console.log('This user has written:')
//         this.blogs.forEach(blog => {
//             console.log(blog)
//         })
//     }
// }

// //user.login(), user.logout()
// user.blogPost()

//Math object

// console.log(Math)
// console.log(Math.PI)
// console.log(Math.E)

// const area = 7.2463

// console.log(Math.round(area))
// console.log(Math.floor(area))
// console.log(Math.ceil(area))
// console.log(Math.trunc(area))

// const random = Math.random()

// console.log(random)

// console.log(Math.round(random * 100))

//Primitive values
// let scoreOne = 50
// let scoreTwo = scoreOne

// console.log(`scoreOne ${scoreOne}`, `scoreTwo ${scoreTwo}`)

// scoreOne = 100

// console.log(`scoreOne ${scoreOne}`, `scoreTwo ${scoreTwo}`)

//Reference values

// const userOne = {name: 'rby', age: 30}
// const userTwo = userOne

// console.log(userOne, userTwo)

// userTwo.name = 'Kings'

// console.log(userOne, userTwo)


const para = document.querySelector('p')

// console.log(para)

// console.log(para.innerHTML)

// para.innerHTML = ' goodbye world'

// const paras = document.querySelectorAll('p')

// paras.forEach(para => {
//     console.log(para.innerText)
//     para.innerText += 'new text'
// })

//const content = document.querySelector('.content')

// console.log(content.innerHTML)
// content.innerHTML = '<h3>This is a new text</h3>'
// console.log(content.innerHTML)

// const people = ['marios', 'joel', 'great']

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`
// })

// const content = document.querySelector('p')

// console.log(content.classList)
// content.classList.add('error')
// content.classList.remove('error')
// content.classList.add('success')

const testing = document.querySelectorAll('p')

console.log(testing)

// testing[0].classList.add('error')
// testing[1].classList.add('success')
// testing[3].classList.add('success')
// testing[4].classList.add('error')
// testing[6].classList.add('error')
// testing[7].classList.add('success')

testing.forEach(para => {
    if(para.innerText.includes('error')){
        para.classList.add('error')
    } 
    if(para.textContent.includes('success')){
        para.classList.add('success')
    }   
})

const title = document.querySelector('.title')

title.classList.toggle('swap')
title.classList.toggle('swap')
title.classList.toggle('swap')