const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');
const generateTemplate = require('../../../src/homepage-template');

// ...collect selectionInputs.
const team = [];

const manQuestions = [
    { type: "input", name: "managerName", message: "Please enter your name" },
    { type: "input", name: "managerId", message: "Please enter your id" },
    { type: "input", name: "managerEmail", message: "Please enter your email" },
    { type: "input", name: "managerNumber", message: "Please enter your office number" },
]

const EngQuestions = [
    { type: "input", name: "engineerName", message: "Please enter your name" },
    { type: "input", name: "engineerId", message: "Please enter your id" },
    { type: "input", name: "engineerEmail", message: "Please enter your email" },
    { type: "input", name: "engineerGithub", message: "Please enter your github username" },
]

const intQuestions = [
    { type: "input", name: "internName", message: "Please enter your name" },
    { type: "input", name: "internId", message: "Please enter your id" },
    { type: "input", name: "internEmail", message: "Please enter your email" },
    { type: "input", name: "internSchool", message: "Please enter your school name" },
]

class Logic {
    constructor() {
        //

    }

    initMenu() {
        console.log(`
        +++++++++++++++++
           Main Menu
        +++++++++++++++++
            `)
        
        return inquirer
            .prompt(
                {
                    type: 'list',
                    name: 'selection',
                    message: 'Who would you like to add?',
                    choices: ['Manager', 'Engineer', 'Intern', 'Finished']
                }
            )
            .then(selectionInput => {
                console.log(selectionInput, 'my selection');
                if (selectionInput.selection === "Manager") {
                    inquirer.prompt(manQuestions).then(selectionInput => {
                        const manager = new Manager(selectionInput.managerName, selectionInput.managerId, selectionInput.managerEmail, selectionInput.managerNumber);
                        team.push(manager);
                        return this.initMenu();
                    })
                }
                else if (selectionInput.selection === "Engineer") {
                    inquirer.prompt(EngQuestions).then(selectionInput => {
                        const engineer = new Engineer(selectionInput.engineerName, selectionInput.engineerId, selectionInput.engineerEmail, selectionInput.engineerGithub);
                        team.push(engineer);
                        return this.initMenu()
                    })
                }
                else if (selectionInput.selection === "Intern") {
                    inquirer.prompt(intQuestions).then(selectionInput => {
                        const intern = new Intern(selectionInput.internName, selectionInput.internId, selectionInput.internEmail, selectionInput.internSchool);
                        team.push(intern);
                        return this.initMenu()
                    })
                };
            })
    }

    /* initManager() {
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
                    type: 'confirm',
                    name: 'employeeConfirm',
                    message: 'Would you like to add an employee to the portfolio?',
                    default: false
                },
                {
                    type: 'list',
                    name: 'addPerson',
                    message: 'Who would you like to add to the team portfolio?',
                    choices: ['Add an Engineer.', 'Add an Intern.', 'Niether? You are done.'],
                    validate: selection => {
                        if (selection === 'Add an Engineer') {
                            console.log('engineer')
                        }
                        if (selection === 'Add an Intern') {
                            console.log('intern')
                        }
                        if (selection === 'Niether? You are done.') {
                            console.log('neither')
                        }
                    }
                }
            ])
            .then((userInputData) => {
                console.log(userInputData, 'RECEIVED THIS TEAM MANAGER INFO!');
                return userInputData;
            });
    }
 */
/*     initEngineer() {
        console.log(`
        +++++++++++++++++
           Engineer Info
        +++++++++++++++++
            `)
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'engineerName',
                    message: "What is the engineer's name?"
                },
                {
                    type: 'input',
                    name: 'engineerId',
                    message: "What is the engineer's employee ID?"
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: "What is the engineer's e-mail?"
                },
                {
                    type: 'input',
                    name: 'engineerGithub',
                    message: "What is the engineer's GitHub username?"
                }
            ])
            .then((userInputData) => {
                console.log(userInputData, 'RECEIVED THIS ENGINEER INFO!');
                return userInputData;
            });
    }

    initIntern() {
        console.log(`
        +++++++++++++++++
           Intern Info
        +++++++++++++++++
            `)
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'internName',
                    message: "What is the intern's name?"
                },
                {
                    type: 'input',
                    name: 'internId',
                    message: "What is the intern's employee ID?"
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: "What is the intern's e-mail?"
                },
                {
                    type: 'input',
                    name: 'internSchool',
                    message: "What is the intern's school name?"
                }
            ])
            .then((userInputData) => {
                console.log(userInputData, 'RECEIVED THIS INTERN INFO!');
                return userInputData;
            });
    } */
}

module.exports = Logic;