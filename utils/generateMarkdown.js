// generateMarkdown.js

// Function to format the license name for the badge URL
function formatLicenseName(license) {
  const licenseMap = {
    'MIT': 'MIT',
    'GPLv3': 'GPL_3.0',
    'Apache 2.0': 'Apache_2.0',
    'BSD 3-Clause': 'BSD_3--Clause',
    'None': ''
  };
  return licenseMap[license] || '';
}

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const formattedLicense = formatLicenseName(license);
  if (!formattedLicense) return '';
  return `![License](https://img.shields.io/badge/license-${formattedLicense}-blue.svg)`;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') return '';
  return `\n* [License](#license)\n`;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') return '';
  return `## License

This project is licensed under the ${license} license.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

${renderLicenseSection(data.license)}

## Questions

If you have any questions about the project, please feel free to contact me:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;