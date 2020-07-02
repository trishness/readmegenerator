// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.mood}
   purpose of this project : 
   # ${data.title}
  `;
  }
  
  module.exports = generateMarkdown;
  
  //### ${data.title} would create an h3 of data, named title in the prompt function