const inquirer = require('inquirer');

const generateMarkdown = require("./utils/generateMarkdown");

const fs = require('fs');

inquirer.prompt([
    {
        type: "input",
        message: 'What is the title of this project?',
        name: "title",
    },
    {
        type: "input",
        message: 'Describe the basics of this project',
        name: "description",
    },
    {
        type: "input",
        message: "What is the user story?",
        name: "userstory",
    },
    {
        type: "input",
        message: "What is the defined acceptance criteria?",
        name: "acceptancecriteria",
    },
    {
        type: "input",
        message: "What is your Github repository info",
        name: "github",
    },
    {
        type: "input",
        message: "What is in your git ignore?",
        name: "gitignore",
    },
    {
        type: "list",
        message: "What licenses are you using",
        choices: ["MIT", "APACHE", "GNU", "none"],
        name: "license",
    },
])
    .then((response) =>

        
        
        fs.writeFile('README.md', (generateMarkdown(response)), (err) => {
            err ? console.error(err) : console.log('Success! Your responses have been logged to a file')
        }));


