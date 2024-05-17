// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') return '';
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
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
  
  This project is licensed under the ${license} license.`
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
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
  
  ## Countribution
  
  ${data.contribution}
  
  ## Tests
  
  ${data.tests}
  
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  
  ## Questions

  If you have any questions about the project, feel free to contact me:

  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
      `;
}

module.exports = generateMarkdown;
