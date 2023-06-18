// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use your project',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can other developers contribute to this?',

    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe any tests you have created for your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license you will use?',
        choices: ['MIT', 'GPLv2', 'Apache', 'Other'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err){
            console.log(err);
        } else {
            console.log('File created successfully!')
        }
    });
}

// TODO: Create a function to initialize app
async function init() {
    try {
    const answers = await inquirer.prompt(questions);
    const readmeContent =  
        
`# ${answers.title}

${answers.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${answers.installation}

## Usage
        
${answers.usage}

## License

This project is licensed under the ${answers.license} license

## Contributing

${answers.contribution}

## Tests

${answers.tests}

## Questions

If you have any questions, you can reach out to me on [GitHub](http://github.com/${answers.username}) or via email: ${answers.email}        
`;
    writeToFile('README.md', readmeContent);
    } catch (err) {
        console.log(err)
    }
}

// Function call to initialize app
init();

