const inquirer = require('inquirer');
const loadLevels = require('./load_levels');
const mockUsers = require('./mock_users');

require('dotenv').config();

inquirer.prompt([
  {
    type: 'list',
    name: 'mode',
    message: 'Select the mode to run',
    choices: ['Level loading', 'User mocking', 'Quit'],
  },
]).then((answers) => {
  switch (answers.mode) {
    case 'Level loading':
      loadLevels();

      break;
    case 'User mocking':
      mockUsers();

      break;
    default:
      console.log('Bye!');

      break;
  }
}).catch((error) => {
  if (error.isTtyError) {
    console.error('Unexpected error, try in another terminal');
  } else {
    console.error('Unexpected error');
  }
});
