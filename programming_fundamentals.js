//********************************** */
// SECTION 1: PROGRAMMING FUNDAMENTALS
//********************************** */

//********************************** */
// COMMON PROGRAMMING PRINCIPLES
//********************************** */

//Read the linked article on programming principles, focus on the following nine:

// DRY - If you find that you're repeating the same long chunk of code multiple times, stop and use a loop, function, variable, etc.

// KISS - Avoid weird, complex code.

// Avoid creating a YAGNI - Don't add unneccessary stuff you don't need.

// Do the simplest thing that could possibly work - Look for the easiest option.

// Don't make me think - Write code that is easy for future, other editors to understand.

// Write code for the maintainer - Write code that is easy to fix and update.

// Single responsibility principle - Every piece should do one, well-definied thing.

// Avoid premature optimization - Focus on making your code work before making it work faster.

// Separation of concerns - Keep the things that do different things in different places.

//********************************** */
// ANSWER
//********************************** */

// Write a ~1 sentence summary for each one 
    // (see above)

// Which ones surprise you (if any)?
    // None. They make sense.

// Which one is currently giving you the most struggle?
    // I'm probably not doing the simplest thing that could possible work because I don't know enough.

//********************************** */
// COMMENTING CODE
//********************************** */
//Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:

//creating a function with parameter "l" for limit
const f = l => {
//establishing starting variables: sum of the even numbers = 0, previous number is 0, current number is 1, next number is 0
    let es = 0, p = 0, c = 1, n = 0
//creating a while loop that runs while the current number is less than or equal to the limit set in the argument
    while (c <= l) {
//changing the value of the next number (which is 0) to the current number plus the previous number
      n = c + p;
//changing the value of the previous number to the current number and the value of the 
      [c, p] = [n, c]
//
      es += (c % 2 === 0) ? c : 0
    }
    return es
  }
  
  console.log(f(55))