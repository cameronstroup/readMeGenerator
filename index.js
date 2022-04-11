// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter your title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "githubUserame",
    message: "What is your github User name?",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
    validate: (email) => {
      if (email) {
        return true;
      } else {
        console.log("Please enter your your email");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Briefly describe your project:",
    validate: (description) => {
      if (description) {
        return true;
      } else {
        console.log("Please write a description of your project!");
        return false;
      }
    },
  },

  {
    type: "list",
    name: "license",
    message: "What licenses would you like to add?",
    choices: ["MIT", "Academic", "APACHE", "GNU", "ISC", "MIT", "Mozilla"],
  },
  {
    type: "input",
    name: "usage",
    message: "What is this project usage for?",
  },
  {
    type: "input",
    name: "installation",
    message: "Describe the installation process if any: ",
  },
  {
    type: "input",
    name: "tests",
    message: "Is there a test included?",
  },

  {
    type: "input",
    name: "contribute",
    message: "Who helped you on the project?, if no one just press enter",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((readmeData) => {
    writeToFile("readMe.md", generateMarkdown({ ...readmeData }));
  });
}

// Function call to initialize app
init();
