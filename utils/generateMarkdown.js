
// function to generate markdown for README
function generateMarkdown(data) {

const readmeContent = 
`
# ${data.title}

## Description
${data.description}

---
### Table of Contents
* [Project Links](#project links)
* [Installation](#installation)
* [Demo/Usage](#demo/usage)
* [Credit](#credit)
* [License](#license)
* [Test](#test)
* [Questions](#questions)

---
### Project Links
[Deployed Project](${data.githubURL})
[GitHub URL](${data.github})

---
### Installation
Clone this repositiory:

\`\`\`
git clone [${data.installation}](${data.installation})
\`\`\`

---
### Demo/Usage

[demo](./assets/images/${data.demo})

${data.usage}

---
### Credit
This project exists thanks to ${data.credit}

---
### License
Distributed under the ${data.license} License. See [Choose A License](https://choosealicense.com/) for more information.

---
### Tests

Open in Integrated Terminal and run the code below:

\`\`\`
npm install
node index.js
\`\`\`

---
### Questions
If you have any questions, please reach out to [${data.questions}](${data.questions}).
`

return readmeContent;

}



module.exports = generateMarkdown;
