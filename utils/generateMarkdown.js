// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license.replace(' ', '_')}-blue.svg)`;
  }
  return "";
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
This project is licensed under the ${license} license.`;
  }}


// TODO: Create a function to generate markdown for README
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n${renderLicenseBadge(data.license)}
## Description
${data.description}
## Deployed Application URL
${data.link}
## Screenshot
![alt-text](${data.screenshot})
## Table of Contents
${renderLicenseLink(data.license)}
* [Features](#features)
* [Languages & Dependencies](#languagesanddependencies)
* [How to Use This Application](#howtouse)
* [Contributors](#contributors)
* [Testing](#testing)
* [Walkthrough Video](#walkthrough-video)
* [Questions](#questions)
## Features
${data.features}
## Languages & Dependencies
${data.require}
${renderLicenseSection(data.license)}
## Technologies Used:
${data.technologies}
## Contributors
${data.contributors}
## Testing
${data.test}
## Usage
${data.usage}
## Installation
${data.installation}
## Walkthrough Video
[Watch here](${data.video})
## Questions
Please send your questions [here](mailto:${data.email}) or visit [GitHub/${data.creator}](https://github.com/${data.creator}).`;
}

export default generateMarkdown;
