var generateMarkdown = require("./utils/generateMarkdown");
var fs = require("fs");
var inquirer = require("inquirer");
var questions = require("./utils/questions").questions;

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error){
        if (error) throw error;
        console.log("success");
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        
     .then(function(response){
        console.log(response);

        writeToFile("readMe.md", generateMarkdown(response))

    })
}

// function call to initialize program
init();
