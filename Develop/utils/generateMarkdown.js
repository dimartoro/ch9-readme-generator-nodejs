// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges= {
    ISC:'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    MIT:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    MOZILLA:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    ODBL:'[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)',
  }
  return badges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const badges= {
    ISC:'[ISC](https://opensource.org/licenses/ISC)',
    MIT:'[MIT](https://opensource.org/licenses/MIT)',
    MOZILLA:'[MOZILLA](https://opensource.org/licenses/MPL-2.0)',
    ODBL:'[ODBL](https://opendatacommons.org/licenses/odbl/)',
  }
  return badges[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == null || license == undefined){
    return '';
  }
  
  return 'This app is licensed under ' + renderLicenseLink(license) + ' lincense';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

  ${renderLicenseBadge(data.license)}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Email](#email)
- [GitHub](#github)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Email
Contact me with additional questions at this email address:\r\n
${data.email}

## GitHub
${data.github}

## License
${renderLicenseSection(data.license)}

`;
}

module.exports= generateMarkdown;
