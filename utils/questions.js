const questions = [
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
        type: "input",
        message: "Please enter any installation instructions for your project.",
        name: "installation"
    },
    {
        type: "input",
        message: "Please list the languages/tools that you used to develop your project.",
        name: "usage"
    },
    {
        type: "checkbox",
        message: "Please select any licenses for your project.",
        name: "licenses",
        choices: ["GNUAGPLv3", "GNUGPLv3", "GNULGPLv3", "MozillaPublicLicense2.0", "MITLicense", "BoostSoftwareLicense1.0", "TheUnlicense"]
    },
    {
        type: "input",
        message: "Please provide a link to your deployed application for the user to test",
        name: "tests"
    },
    {
        type: "input",
        message: "Please enter your email address to respond to any questions.",
        name: "questions"
    }
];

module.exports = {
    questions:questions
}