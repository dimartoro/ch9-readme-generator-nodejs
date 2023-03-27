function githubLink(github){
  var g = github;
  if(g.indexOf('@') != 0){
    return g + ': is not a valid github user';
  }
  return 'https://github.com/' + g.substring(1,g.length);
}

function renderLicenseBadge(license) {
  const badges= {
    ISC:'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    MIT:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    MOZILLA:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    ODBL:'[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)',
  }
  return badges[license];
}

function renderLicenseLink(license) {
  const badges= {
    ISC:'[ISC](https://opensource.org/licenses/ISC)',
    MIT:'[MIT](https://opensource.org/licenses/MIT)',
    MOZILLA:'[MOZILLA](https://opensource.org/licenses/MPL-2.0)',
    ODBL:'[ODBL](https://opendatacommons.org/licenses/odbl/)',
  }
  return badges[license];
}

function renderLicenseSection(license) {
  if(license == null || license == undefined){
    return '';
  }
  
  return 'This app is licensed under ' + renderLicenseLink(license) + ' lincense';
}

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
- [VideoLink](#videolink)

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
${githubLink(data.github)}

## License
${renderLicenseSection(data.license)}

## VideoLink
https://drive.google.com/file/d/1Ic14KwgC7xy8tJC7A5SB_llg_hcsXhf1/view

`;
}

module.exports= generateMarkdown;
