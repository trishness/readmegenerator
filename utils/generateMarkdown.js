// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
   ## Purpose of this project : 
   ${data.description}
   # Table of Contents:
   1. [Licenses](#licenses)
   2. [Contributing](#contributing)
   3. [Tests](#tests)
   4. [Questions](#questions)

   ## Installations required to run this project:
   ### Visit my GitHub and clone this repo, then install the following: ${data.installation}
   ## Licenses:

   ![license](https://img.shields.io/badge/license-${data.licenses}-green)

   ## Contributing:

  Thanks for your interest in contributing to ${data.title}!  

  ## How to submit changes

  Step 1: Fork

  Step 2: Branch

  Step 3: Write and Test Code

  Step 4: Commit

  Step 5: Rebase

  Step 6: Push & Open PR 

   ## Tests:
   Deployed link to application
   ### ${data.tests}
   ## Questions
  Do you have any questions about this project? Feel free to reach out to me via email or view my GitHub.
   ### ${data.questions}
   ### https://www.github.com/${data.username}
  `;
  }
  
  module.exports = generateMarkdown;
  
