// utils/generateMarkdown.js

// Function to return a license badge based on the desired license type
function renderLicenseBadge(license) {
  if (license === 'No License') return ''; // No badge because no license chosen
  return `![License](https://img.shields.io/badge/license-${license.replace(' ', '%20')}-blue.svg)`;
}

// Function to return the license link in the README
function renderLicenseLink(license) {
  if (license === 'No License') return ''; // No link because no license chosen
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPL': 'https://opensource.org/licenses/GPL-3.0',
    'Apache': 'https://opensource.org/licenses/Apache-2.0',
    'BSD': 'https://opensource.org/licenses/BSD-3-Clause'
  };
  return licenseLinks[license];
}

// Function to return the license section of the README
function renderLicenseSection(license) {
  if (license === 'No License') return ''; // No license section because no license chosen
  return `## License
This project is licensed under the [${license}](${renderLicenseLink(license)}) License.`;
}

// Function to generate markdown for the README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions about this app, please contact me on [GitHub](https://github.com/${data.github}) or email me at ${data.email}.
`;
}

// Export the generateMarkdown function
module.exports = generateMarkdown;
