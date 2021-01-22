const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',

    },
    {
        type: 'input',
        name: 'description',
        message: 'Add a short description of the project?',

    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process?',

    },
    {
        type: 'input',
        name: 'demo',
        message: 'Please enter your demo file name?',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will this project be used?',

    },
    {
        type: 'list',
        name: 'license',
        message: 'What licenses are required for this project?',
        choices: ['MIT', 'GNU', 'ISC'],
       
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Who were the contributors?',

    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can users test this project?',

    },
    {
        type: 'input',
        name: 'questions',
        message: 'Where should people contact you for questions?',

    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub URL?',

    },
    {
        type: 'input',
        name: 'githubURL',
        message: 'What is your GitHub "deployed repository URL"?',

    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success'))

}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(data => 
        writeToFile('sampleReadME.md', generateMarkdown(data)));

}

// function call to initialize program
init();


