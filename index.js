const inquirer = require('inquirer');

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
        name: "user-story",
    },
    {
        type: "input",
        message: "What is the defined acceptance criteria?",
        name: "acceptance-criteria",
    },
    {
        type: "input",
        message: "What is your Github repository info",
        name: "Github",
    },
    {
        type: "input",
        message: "What is in your git ignore?",
        name: "Gitignore",
    },
])
    .then((response) =>

        
        
        fs.writeFile('README.md', JSON.stringify(response.generateHTMLfile), (err) => {
            err ? console.error(err) : console.log('Success! Your responses have been logged to a file')
        }));