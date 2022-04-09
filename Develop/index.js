const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");


const questions = [{
      type: "input",
      name: "githubUsername",
      message: "What is your GitHub username?",
      validate: githubUsernameInput => {
        if (githubUsernameInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username.");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please provide an email address.");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter a project title");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "description",
      message: "Please write a description of your project.",
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please write a description of your project.");
          return false;
        }
      }
    },
    {
      type: "list",
      name: "license",
      message: "What license does your project use?",
      choices: ["None", "Apache 2.0", "MIT", "GPL v3.0"],
      validate: licenseInput = () => {
        if (licenseInput) {
          return true;
        } else {
          console.log("Please select one of the four options.");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "installation",
      message: "What steps are required to install your project?",
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log("Please provide installation steps.");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide example usages.",
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log("Please provide a use for this application.")
        }
      }
    },
    {
      type: "list",
      name: "tests",
      message: "How do you test this project?",
      choices: ["npm test", "mvn test", "gradle test", "make test", "other"],
      validate: testsInput => {
        if (testsInput) {
          return true;
        } else {
          console.log("Please explain how to test this project.");
          return false;
        }
      }
    },
    {
      type: "checkbox",
      name: "technologies",
      message: "Please select the technologies used in this application.",
      choices: ["JavaScript", "Java", "Python", "C#", "C++", "Ruby", "HTML", "jQuery", "CSS", "Bootstrap", "Node.JS", "React.js", "Angular/Angular.js"],
      },
      {
        type: "input",
        name: "contributions",
        message: "What are the guidelines for contributing to this project?",
        validate: contributionsInput => {
          if (contributionsInput) {
            return true;
          } else {
            console.log("Please provide guidelines for contributions");
            return false;
          }
        }
      }
    ];


    const writeToFile = fileContent => {
      return new Promise((resolve, reject) => {
        fs.writeFile(`./generatedREADME.md`, fileContent, err => {
          if (err) {
            reject(err);
            return;
          }
          resolve({
            ok: true
          });
        });
      });
    };


    function init() {
      inquirer.prompt(questions)
        .then(function(answer) {
          console.log(answer);
          var fileContent = generateMarkdown(answer);
          writeToFile(fileContent)
        });
    }

    init();

    module.exports = questions;
