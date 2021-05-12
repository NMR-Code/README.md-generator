// Markdown for README
function generateMD(data) {
    return `# ${data.title}
![video](demo.gif)
## Licensing: [![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)
    
## Table of Contents 
    
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Additional Info](#additional-info)

## Description:
${data.description}

## Installation:
${data.installation}

## Usage:
${data.usage}

## License:
${data.licensing}

## Contribution:
${data.contribution}

## Testing:
${data.test}

## Additional Info:
- Github: [${data.github}](https://github.com/${data.github})
- Email: ${data.email} `;
}

export default generateMD;