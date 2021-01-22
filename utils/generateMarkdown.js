
// function to generate markdown for README
function generateMarkdown(data) {

const readmeContent = 
`
# ${data.title}

[](https://img.shields.io/github/license/Kammielatay/read-me-generator)


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
Check out the deployed project by clicking the link below:

[Deployed Project](${data.githubURL})

---
### Installation
Clone this repositiory:

\`\`\`
git clone ${data.installation}
\`\`\`

Open in Integrated Terminal and run the code below:
\`\`\`
${data.install}
\`\`\`

---
### Demo/Usage

[demo](./assets/images/${data.demo})

---
### Credit
This project exists thanks to ${data.credit}

---
### License
Distributed under the ${data.licenses} License. See [Choose A License](https://choosealicense.com/) for more information.

---
### Tests

Open in Integrated Terminal and run the code below:

\`\`\`
${data.tests}
\`\`\`

---
### Questions
If you have any questions, please reach out to [${data.github}](https://github.com/${data.github})
`

return readmeContent;

}



module.exports = generateMarkdown;
