// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
  ${data.description}


  ## Table of Contents:
  * [Installation](#install)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [Questions](#questions)
<br>
# Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # License
  ${data.license}
  # Test
  ${data.test}
  # Contributing
  ${data.contribute}
  # Questions
  If you have any question you can contact here: 
  ${data.githubUserame}
  ${data.email}](https://github.com/${data.username})


`;
}

module.exports = generateMarkdown;
