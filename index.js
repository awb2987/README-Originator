const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown'); // Import the generateMarkdown function

// Create an array of questions for the user to supply
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide your project usage information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide your project contributing guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide your project test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'GPL', 'Apache', 'BSD', 'No License'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
    },
];

// Function to write the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('README.md has been generated!');
        }
    });
}

// Function to initialize the app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers); // Use the generateMarkdown function
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize the app
init();
