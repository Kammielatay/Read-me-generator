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
        name: 'table-of-contents',
        message: 'Please provide content for the table of content?',

    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process?',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will this project be used?',

    },
    {
        type: 'input',
        name: 'license',
        message: 'What licenses are required for this project?',

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who were the contributors',

    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can users test this project',

    },
    {
        type: 'input',
        name: 'questions',
        message: 'Where should people contact you for questions?',

    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success'))

}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response => 
        writeToFile('README.md', generateMarkdown(response)));

}

// function call to initialize program
init();


