const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');
const generateTemplate = require('../../../src/homepage-template');

// ...collect selectionInputs.
const teamData = [];

const managerPrompt = [
    { type: "input", name: "managerName", message: "Please enter your name" },
    { type: "input", name: "managerId", message: "Please enter your id" },
    { type: "input", name: "managerEmail", message: "Please enter your email" },
    { type: "input", name: "managerNumber", message: "Please enter your office number" },
]

const engineerPrompt = [
    { type: "input", name: "engineerName", message: "Please enter your name" },
    { type: "input", name: "engineerId", message: "Please enter your id" },
    { type: "input", name: "engineerEmail", message: "Please enter your email" },
    { type: "input", name: "engineerGithub", message: "Please enter your github username" },
]

const internPrompt = [
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
                console.log(selectionInput);
                if (selectionInput.selection === "Manager") {
                    console.log(`
                    ++++++++++++++++++
                       Manager Info
                    ++++++++++++++++++
                        `)
                    inquirer.prompt(managerPrompt).then(selectionInput => {
                        const manager = new Manager(selectionInput.managerName, selectionInput.managerEmail, selectionInput.managerId, selectionInput.managerNumber);
                        teamData.push(manager);
                        return this.initMenu();
                    })
                }
                else if (selectionInput.selection === "Engineer") {
                    console.log(`
                    +++++++++++++++++++
                       Engineer Info
                    +++++++++++++++++++
                        `)
                    inquirer.prompt(engineerPrompt).then(selectionInput => {
                        const engineer = new Engineer(selectionInput.engineerName, selectionInput.engineerEmail, selectionInput.engineerId, selectionInput.engineerGithub);
                        teamData.push(engineer);
                        return this.initMenu()
                    })
                }
                else if (selectionInput.selection === "Intern") {
                    console.log(`
                    +++++++++++++++++
                       Intern Info
                    +++++++++++++++++
                        `)
                    inquirer.prompt(internPrompt).then(selectionInput => {
                        const intern = new Intern(selectionInput.internName, selectionInput.internEmail, selectionInput.internId, selectionInput.internSchool);
                        teamData.push(intern);
                        return this.initMenu()
                    })
                }
                else {
                    return this.writeData(teamData);
                }
            });
    }
    writeData (receiveData) {
        const writeHtmlFile = generateTemplate(receiveData);
        
        console.log(writeHtmlFile, 'MY FILE...❗');

        fs.writeFile('./index.html', writeHtmlFile, (err) => {
            if (err) throw new Error(err);
        });

/*             .then(what => {
                console.log(what, 'what did i get?');

                const sendUserData = generateTemplate(teamData);
                console.log(sendUserData, 'inside my else statement');
                
                fs.writeFile('../../dist/index.html', sendUserData, (err) => {
                    if (err) throw new Error(err);
                });
            }) */

    }
}

module.exports = Logic;