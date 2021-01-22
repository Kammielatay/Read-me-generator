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
        message: 'Add a brief description of the project?',

    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process? (clone URL)',

    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be used to run depencencies?',

    },
    {
        type: 'input',
        name: 'demo',
        message: 'Please enter your demo file name?',

    },
    {
        type: 'list',
        name: 'licenses',
        message: 'What licenses are required for this project?',
        choices: ["MIT", "Apache", "ISC", "Unlicense"]
            
    
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Who were the contributors?',

    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command line should be ran in order to run a test?',

    },
    {
        type: 'input',
        name: 'questions',
        message: 'Where should people contact you for questions?',

    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',

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


