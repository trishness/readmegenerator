// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
   ## Purpose of this project : 
   ### ${data.description}
   ## Table of Contents:
   ### ${data.tableContents}
   ## Installation:
   ### ${data.installation}
   ## Licenses:
   ### ${data.licenses}
   ## Contributing:
   ### ${data.contributing}
   ## Tests:
   ### ${data.tests}
  `;
    // `# ${data.title}`
    // `Description: ## ${data.description}`

  }
  
  module.exports = generateMarkdown;
  
  //### ${data.title} would create an h3 of data, named title in the prompt function