// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "Please name your Project.",
    },
    {
      type: "input",
      name: "description",
      message: "Please describe the purpose and functionality of this project.",
    },
    {
      type: "input",
      name: "screenshot",
      message: "Please provide the relative path to the image you want to use as the screenshot."
    },
    {
      type: "input",
      name: "link",
      message: "Please provide a URL where a user can access your deployed application."
    },
    {
      type: "list",
      name: "license",
      message: "Please select a license applicable to this project.",
      choices: ["MIT", "APACHE 2.0", "Boost 1.0", "MPL 2.0", "BSD 2", "BSD 3", "none"],
    },
    {
      type: "input",
      name: "require",
      message: "List any project dependencies here.",
    },
    {
      type: "input",
      name: "features",
      message: "List some cool features about this project here.",
    },
    {
      type: "input",
      name: "technologies",
      message:
        "State the languages or technologies associated with this project.",
    },
    {
      type: "input",
      name: "creator",
      message: "Write your GitHub username.",
    },
    {
      type: "input",
      name: "email",
      message: "Provide a valid email address.",
    },
    {
      type: "input",
      name: "contributors",
      message: "Please list any contributors. (Use GitHub usernames)",
      default: "",
    },
    {
      type: "input",
      name: "test",
      message: "Provide walkthrough of required tests if applicable.",
    },
    {
      type: "input",
      name: "video",
      message: "Please provide a URL to a video walkthrough of your project.",
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide usage.",
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide installation.",
    },

  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Gen README.md File...", responses.usage);
      writeToFile("./README.md", generateMarkdown({ ...responses }));
    });
  }

// Function call to initialize app
init();

// https://youtu.be/Ka0rxP4GhA0
// https://github.com/PHTMGatt/07-NodeJS.git