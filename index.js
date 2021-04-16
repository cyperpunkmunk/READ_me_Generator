const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile)

function questionsUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: "Enter your project name:",
            validate: function (userInput) {
                return userInput.length < 1 ? console.log('Please enter your GitHub username.') : true;
            }
        },
        {
            type: 'input',
            name: 'username',
            message: "Enter your GitHub username:",
            validate: function (userInput) {
                return userInput.length < 1 ? console.log('Please enter your GitHub username.') : true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Email:",
            validate: function (userInput) {
                return userInput.length < 1 ? console.log('Please enter your GitHub username.') : true;
            }
        },
        {
            type: 'input',
            name: 'description',
            message: "Enter your Description:",
            validate: function (userInput) {
                return userInput.length < 1 ? console.log('Please enter your GitHub username.') : true;
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: "Instillation instructions:",
        },
        {
            type: 'input',
            name: 'usage',
            message: "Usage:",
            validate: function (userInput) {
                return userInput.length < 1 ? console.log('Please enter your GitHub username.') : true;
            }
        },
        {
            type: 'list',
            name: 'license',
            message: "License choice:",
            choices: ['The Do What the Fuck You Want to Public License','The Unlicense','SIL Open Font License 1.1'],
    
        },

    ])
};
async function init() {
    try {
        const answers = await questionsUser();
        const generateTxt = generateMarkdown(answers);
        await writeFileAsync('README.md', generateTxt);
        console.log('Completed!');
    } catch (err) {
        console.log(err);
    }
}
init()