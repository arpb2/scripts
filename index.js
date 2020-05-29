const inquirer = require('inquirer');
const loadLevels = require('./load_levels');

inquirer.prompt([
   {
       type: 'list',
       name: 'mode',
       message: 'Select the mode to run',
       choices: ['Level loading', 'Quit']
   } 
]).then(answers => {
  switch (answers.mode) {
      case 'Level loading':
          loadLevels();
          
          break;
  
      default:
          console.log('Bye!');
          
          break;
  }  
}).catch(error => {
    if(error.isTtyError) {
        console.error('Unexpected error, try in another terminal')
    } else {
        console.error('Unexpected error')
    }
})
