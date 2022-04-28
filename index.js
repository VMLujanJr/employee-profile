const inquirer = require('inquirer');

const promptTeamManager = () => {
    console.log(`
+++++++++++++++++
   Team Manager
+++++++++++++++++
    `)
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'teamManager',
                message: "What is the team manager's name?"
            },
            {
                type: 'input',
                name: 'teamManagerId',
                message: "What is the team manager's employee ID?"
            },
            {
                type: 'input',
                name: 'teamManagerEmail',
                message: "What is the team manager's e-mail?"
            },
            {
                type: 'input',
                name: 'teamManagerPhone',
                message: "What is the team manager's office number?"
            },
            {
                type: 'list',
                name: 'addPerson',
                message: 'Who would you like to add to the team portfolio?',
                choices: ['Add an Engineer.', 'Add an Intern.', 'Niether? You are done.']
            }
        ]);
};

promptTeamManager();