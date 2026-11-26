# README Generator

A small Node.js command-line tool that asks you questions about a project and writes a formatted `README.md` from your answers.

## Status

Coursework project. Checked 2026-11-26 on Windows with Node 26. `npm ci` succeeds and the tool starts and shows its first prompt; a full question run was not repeated. No automated tests.

## What it does

- **Asks 15 questions** with Inquirer: title, description, screenshot path, deployed link, license, dependencies, features, technologies, GitHub username, email, contributors, testing, video link, usage and installation.
- **Builds the README** from a template in `utils/generateMarkdown.js`, with a table of contents, a license badge and section, and a "Questions" section linking to your email and GitHub profile.
- **Licenses:** MIT, Apache 2.0, Boost 1.0, MPL 2.0, BSD 2, BSD 3, or none.

## Tech stack

Node.js (ES modules) and Inquirer 8.

## Run it

Needs Node.js.

```bash
npm install
npm start
```

The tool writes `README.md` into the current working directory, **replacing any README already there**. `npm start` always runs from this project's folder, so it overwrites this repo's own README. To generate a README somewhere else, run the tool from that folder instead:

```bash
cd path/to/your-project
node path/to/07-Readme-Gen/index.js
```

There is no automated test suite.

## Known rough edge

- The section anchors in the generated table of contents do not all match their headings.

## What I learned / built

- Building an interactive CLI with Inquirer prompts and handling the answers with promises.
- Splitting a program into an entry point and a template module, and writing files with Node's `fs` and `path`.
- Generating Markdown from a template string, including conditional pieces such as the license badge.
