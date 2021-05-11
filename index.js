'use strict';
const fs = require('fs');
const chalk = require('chalk');
const inquirer = require('inquirer');
const generateMD = require("./utils/generateMD")

// Welcome message
const welcome = [{
    type: 'confirm',
    prefix: '\b',
    name: 'welcome',
    message: chalk.cyanBright(`Thanks for using my README.md generator! You will be presented with options for your README's sections and their respective contents. To begin hit 'y' or enter.`),

}, ];

// Markdown tips
const startText = chalk.cyanBright(`\n
-------------------------
        MD Syntax
-------------------------
Italic: *text*   
Bold:   **text**  
Links:  [title](https://www.example.com)
Image:  ![alt text](example.jpg)
\n`);

// Success message
const generated = chalk.cyanBright(`
Your README Generated! It's in the "generatedReadMe" folder
//-------------------------------------------------------// 
`);

//Questions for README
const questions = [{
        type: 'input',
        name: 'title',
        message: `Project Title?`,
    },
    {
        type: 'input',
        name: 'github',
        message: `Input GitHub username:`,

    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    },
    {
        type: 'input',
        name: 'description',
        message: `Write a description of your project`,

    },
    {
        type: 'confirm',
        name: 'install',
        message: `Do you want to add any installation notes?`,

    },
    {
        type: 'input',
        name: 'installNotes',
        message: `Please add your installation notes`,
        when: function(answers) {
            return answers.install;
        }
    },
    {
        type: 'confirm',
        name: 'usage',
        message: `Do you want to provide the user usage information?`,
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: `Please add your usage info`,
        when: function(answers) {
            return answers.usage;
        }
    },
    {
        type: 'confirm',
        name: 'contributions',
        message: `Do you want to add any notes on contributing to the repo?`,
    },
    {
        type: 'input',
        name: 'contributorNotes',
        message: `Please add information about contributions:`,
        when: function(answers) {
            return answers.contrib;
        }
    },
    {
        type: 'confirm',
        name: 'test',
        message: `Do you want to add instructions for running tests?`,
    },
    {
        type: 'input',
        name: 'testNotes',
        message: `Please add your instructions for running tests`,
        when: function(answers) {
            return answers.test;
        }
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'Which open source license would you like to use? ',
        choices: ['Apache 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'GNU AGPLv3.0', 'GNU GPLv2.0', 'GNU GPLv3.0', 'MIT', 'Mozilla Public 2.0'],
    },
    {
        type: 'confirm',
        name: 'credits',
        message: `Would you like to add any credits to the repo?`,
    },
    {
        type: 'input',
        name: 'creditData',
        message: `Please add your credits`,
        when: function(answers) {
            return answers.credits;
        }
    },

];


//Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your markdown file has been created and stored in the folder.')
    });
}

//Async Function to initialize the generator
const init = async() => {
    try {
        await inquirer.prompt(welcome);
        console.log(startText);
        const data = await inquirer.prompt(questions);
        writeToFile('README.md', generateMD(data));
    } catch (err) {
        console.log(err);
    }
}

//Function call to initialize program
init();