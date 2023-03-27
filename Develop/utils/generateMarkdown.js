function githubLink(github){
  var github = github;
  if(github.indexOf('@') != 0){
    return github + ': is not a valid github user';
  }
  return 'https://github.com/' + github.substring(1,github.length);
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
    ISC:'[ISC](https://choosealicense.com/licenses/isc/)',
    MIT:'[MIT](https://choosealicense.com/licenses/mit/)',
    MOZILLA:'[MOZILLA](https://choosealicense.com/licenses/mpl-2.0/)',
    ODBL:'[ODBL](https://choosealicense.com/licenses/odbl-1.0/)',
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
