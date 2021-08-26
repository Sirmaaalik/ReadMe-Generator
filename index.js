// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./potential-enigma/Develop/utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: projectInput => {
            if(projectInput) {
                return true;
            } else {
                console.log('Please input project title:')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'description',
        message: 'Enter a description:',
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            } else {
                console.log('Please input a description:')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions here:',
        validate: installInput => {
            if(installInput) {
                return true;
            } else {
                console.log('Please input installing instructions:')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Usage information:',
        validate: usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log('Please input usage information:')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Contribution Guidelines',
        validate: contributeInput => {
            if(contributeInput) {
                return true;
            } else {
                console.log('Please input contribution guidelines:')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'test',
        message: 'Test instructions',
        validate: testInput => {
            if(testInput) {
                return true;
            } else {
                console.log('Please input testing instructions:')
                return false;
            }
        }
    },

    {
        type: 'list',
        name: 'license',
        message: '',
        choices: ['GNU GPLv3', 'Apache', 'Apache 2.0', 'MIT', 'ISC', 'none']
    },

    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username',
        validate: githubInput => {
            if(githubInput) {
                return true;
            } else {
                console.log('Please type your Github username:')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please type your email address correctly:')
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file 
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            reject(err);
            return;
        }
    
        resolve({
            ok: true,
            message: 'File created!'
        });
        });
    });
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        return generateMarkdown (answers);
    })
    .then(readme => {
        return writeToFile (readme);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    })
}

// Function call to initialize app
init();
