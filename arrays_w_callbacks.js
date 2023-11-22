//****************************************** */
// SECTION 3: ARRAY METHODS WITH CALLBACKS
//****************************************** */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']


// The first question is for the numbers array. The second question is for the words array. You don't have to write an answer to the thought questions.


// EVERY
// Determine if every number is greater than or equal to 0
console.log(nums.every(num => num >= 0))

// determine if every word shorter than 8 characters
console.log(panagram.every(pan => pan.length < 8))

// FILTER
// filter the array for numbers less than 4
console.log(nums.filter(num => num < 4))

// filter words that have an even length
console.log(panagram.filter(pan => pan.length % 2 === 0))

// FIND
// Find the first value divisible by 5
console.log(nums.find(num => num % 5 === 0))

// find the first word that is longer than 5 characters
console.log(panagram.find(pan => pan.length > 5))
    //None of them are longer than 5 characters

// FIND INDEX
// find the index of the first number that is divisible by 3
console.log(nums.findIndex(num => num % 3 === 0))

// find the index of the first word that is less than 2 characters long
console.log(panagram.findIndex(pan => pan.length < 2))
    //None of them are shorter than 2 characters

// FOR EACH
// console.log each value of the nums array multiplied by 3
nums.forEach(num => {
    console.log(num*3)
})

// console.log each word with an exclamation point at the end of it
panagram.forEach(pan => {
    console.log(pan + "!")
})

// MAP
// make a new array of each number multiplied by 100
const newArr = nums.map(num => num *100)
console.log(newArr)

// make a new array of all the words in all uppercase
const newPan = panagram.map(pan => pan.toUpperCase())
console.log(newPan)


// SOME
// Find out if some numbers are divisible by 7
console.log(nums.some(num => num % 7 === 0))

// Find out if some words have the letter a in them
console.log(panagram.some(pan => pan.includes("a")))
