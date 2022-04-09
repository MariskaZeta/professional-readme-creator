const fs = require("fs");
const inquirer = require("inquirer");
const index = require("../index.js");

function renderLicenseBadge(license) {
  let badge = "";
  if (license === "MIT") {
    badge = "![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)"
  } else if (license === "Apache 2.0") {
    badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
  } else if (license === "GPL v3.0") {
    badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
  } else {
    badge = ""
  }
  return badge;
}


function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "MIT") {
    licenseLink = "https://choosealicense.com/licenses/mit/"
  } else if (license === "Apache 2.0") {
    licenseLink = "http://www.apache.org/licenses/LICENSE-2.0"
  } else if (license === "GPL v3.0") {
    licenseLink = "https://www.gnu.org/licenses"
  } else {
    licenseLink = ""
  }
  return licenseLink;
}


function renderLicenseSection(license) {
  let licenseSection = "";
  if (license === "None") {
    licenseSection = "";
  } else {
    licenseSection =
      `License: ${license} `
  }
  return licenseSection;
}

function getLicenseAnchorName(license) {
  console.log(license);

  license = license.replace(/\s/g, "-");
  license = license.replace(/\./g, "");
  license = license.toLowerCase();
  license = "license-" + license + "--";
  console.log(`tagname: ${license}`);
  return license;
}


function generateMarkdown(answer) {
  return ` # ${answer.title}

  ## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
  ### ${renderLicenseLink(answer.license)}

   ## Table of Contents:
   ###  [Installation](#installation)
   ###  [Description](#description)
   ###  [Usage](#usage)
   ###  [License](#${getLicenseAnchorName(answer.license)})
   ###  [Contributions](#contributions)
   ###  [Testing](#testing)
   ###  [Technologies](#technologies)
   ###  [Questions](#questions)
   ## Installation:
   ### ${answer.installation}
   ## Description:
   ### ${answer.description}
   ## Usage:
   ### ${answer.usage}
   ## Contributions:
   ### ${answer.contributions}
   ## Testing:
   ### Run the following commands in your terminal to test this app:
   ### ${answer.tests}
   ## Technologies:
   ### ${answer.technologies}
   ## Questions:
   ### If you have any questions, you may contact me at either
   ### Github: https://github.com/${answer.githubUsername}
   ### or
   ### Email: ${answer.email}
 `;
}

module.exports = generateMarkdown;
