// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![license](https://img.shields.io/badge/license-MIT-brightgreen)`
  }
  if (license === "APACHE") {
    return `![license](https://img.shields.io/badge/license-APACHE-brightgreen)`
    }
  if (license === "GNU") {
    return `![license](https://img.shields.io/badge/license-GNU-brightgreen)`
  }
    if (license === "none") {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  1. [Description](#description)
  2. [User Story](#user-story)
  3. [Acceptance Criteria](#acceptance-criteria)
  4. [Github Repository](#github-repository)
  5. [Gitignore](#gitignore-details)

  ## Description
  ${data.description}
  ## User Story
  ${data.userstory}
  ## Acceptance Criteria
  ${data.acceptancecriteria}
  ## Github Repository
  ${data.github}
  ## Gitignore Details
  ${data.gitignore}
`;
}

module.exports = generateMarkdown;
