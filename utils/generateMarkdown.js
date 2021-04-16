// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  switch (answers.license){
    case 'The Do What the Fuck You Want to Public License':
      answers.license = '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'
      break;
    case 'The Unlicense':
      answers.license = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
      break;
    case 'SIL Open Font License 1.1':
      answers.license = '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)'
      break;
    default:
      answers.license = '';
  }


return `# ${answers.projectName}

## Description
  
${answers.description}

# License

${answers.license}

## Installation

${answers.installation}
  
## Usage

${answers.usage}

## Contributions

* ${answers.username}
  
## Tests



## Questions

https://github.com/${answers.username}

# For additional questions reach me here

${answers.email}`;

}

module.exports = generateMarkdown;

