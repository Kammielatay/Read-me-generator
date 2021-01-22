
// function to generate markdown for README
function generateMarkdown(data) {

const badges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    Unlicense: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
}

const readmeContent = 
`
# ${data.title}

![last-commit](https://img.shields.io/github/last-commit/Kammielatay/read-me-generator)
![issues](https://img.shields.io/github/issues/Kammielatay/read-me-generator)
${badges[data.licenses]}


## Description
${data.description}


## Table of Contents
* [Project](#project links)
* [Installation](#installation)
* [Demo/Usage](#demo/usage)
* [Credit](#credit)
* [License](#license)
* [Test](#test)
* [Questions](#questions)


## Project Links
Check out the deployed project by clicking the link below:

[Deployed Project](${data.githubURL})


## Installation
Clone this repositiory:

\`\`\`
git clone ${data.installation}
\`\`\`

Open in Integrated Terminal and run the code below:
\`\`\`
${data.install}
\`\`\`


## Demo/Usage

[demo](./assets/images/${data.demo})


## Credit
This project exists thanks to ${data.credit}


## License
Distributed under the ${data.licenses} License. See [Choose A License](https://choosealicense.com/) for more information.


## Tests

Open in Integrated Terminal and run the code below:

\`\`\`
${data.tests}
\`\`\`


### Questions
If you have any questions, please reach out to [${data.github}](https://github.com/${data.github})
`

return readmeContent;

}



module.exports = generateMarkdown;
