var generateMarkdown = require("./utils/generateMarkdown");
var fs = require("fs");
var inquirer = require("inquirer");

var myData={
    title:"Welcome to my readme",
    name:"WHatever"
}
// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error){
        if (error) throw error;
        console.log("success");
    })
}

// function to initialize program
function init() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Please enter a description of your project.",
            name: "description"
        },
        {
            type: "confirm",
            message: "Would you like to include a Table of Contents?",
            name: "tableContents"
        },
        {
            type: "input",
            message: "Please enter any installation instructions for your project.",
            name: "installation"
        },
        {
            type: "checkbox",
            message: "Please select any licenses for your project.",
            name: "licenses",
            choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"]
        },
        {
            type: "confirm",
            message: "Were there any other Contributing parties?",
            name: "contributing"
        },
        {
            type: "input",
            message: "Did you perform any tests on your project? If so, please describe them.",
            name: "tests"
        },
        {
            type: "confirm",
            message: "Would you like to receive questions pertaining to your project?",
            name: "questions"
        }
    ]) .then(function(response){
        console.log(response);
        

        writeToFile("readMe.md", generateMarkdown(response))

    })
    // writeToFile("readMe.md", generateMarkdown(myData));
}

// function call to initialize program
init();
