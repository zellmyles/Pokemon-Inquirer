var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'input',
      message: 'what is your trainer name?',
      name: 'trainerName'
    },
    {
      type: 'password',
      message: 'password:',
      name: 'trainerPassword'
    },
    {
      type: 'list',
      message: 'choose your first pokemon:',
      choices: ['Pikachu', 'Squirtle', 'Charmander', 'Ash'],
      name: 'trainerChoice'
    },
    {
      type: 'name',
      message: 'name your pokemon:',
      name: 'pokemonName'
    },
    {
      type: 'confirm',
      message: 'Are you sure?',
      default: true,
      name: 'trainerConfirm'
    },
  ])

  .then(answers => {
    // Use user feedback for... whatever!!
    if (answers.trainerConfirm) {
      console.log(`Hello ${answers.trainerName}, ${answers.pokemonName} is ready for battle.`);
    } else {
      console.log(`Thats ok ${answers.trainerName} come back when you're more sure.`);
    };
  })

  .catch(error => {
    console.log(error);
});
  

// let login = () => {
//   console.log('loggin in');
// };

// login();


// To see how this app works open your terminal and do "node app.js" 
//  input the fields that are prompt in the terminal. 