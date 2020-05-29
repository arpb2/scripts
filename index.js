const inquirer = require('inquirer');

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
          console.log('load');
          
          break;
  
      default:
          console.log('Bye!');
          
          break;
  }  
})