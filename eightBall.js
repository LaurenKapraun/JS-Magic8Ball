// Let User Input Username
let username = '';

/* 
If the user supplied a username, print Hello, username!

If not, just print Hello! 
*/
username ? console.log(`Hello, ${username}!`) : console.log('Hello!');

// Have user input a question
let userQuestion = 'Do I have a dog?';
// Print out User's question
console.log(userQuestion);

// Generate a whole random number
const randomNumber = Math.floor(Math.random() * 8);

// Create the eightBall, but leave it empty
let eightBall = '';

// Display eightBall responses based on the randomNumber that was generated
switch(randomNumber){
  case 0:
    eightBall = 'It is certain'
    break;
  case 1:
    eightBall = 'It is decidedly so'
    break;
  case 2:
    eightBall = 'Reply hazy try again'
    break;
  case 3: 
    eightBall = 'Cannot predict now'
    break;
  case 4:
    eightBall = 'Do not count on it'
    break;
  case 5:
    eightBall = 'My sources say no'
    break;
  case 6:
    eightBall = 'Outlook not so good'
    break;
  case 7:
    eightBall = 'Signs point to yes'
    break;
}

// Display the eight ball response
console.log(`The eight ball answered: ${eightBall}`);
