# Website

Welcome to Astar Docs GitHub Repo.

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Instructions on how to contribute to Astar Docs using local instance of Docusaurus engine

### Prereqs

  - Make sure `git` and `yarn` exist as commands in your terminal/vscode: [https://yarnpkg.com/](https://yarnpkg.com/)
  - Git/Github: understand what the following commands do
      - managing branches (`git checkout main` and `git checkout -b feat/your-new-branch`
      - Commits (`git add .` and `git commit`, `git push -u origin feat/your-new-branch`)
      - Creating PR in Github
      - maybe: stashing (`git stash` and `git stash pop` are your best friends)
  - Markdown basics
      - titles, subtitles
      - lists
      - hyperlinks

### Setup: First time only

  - Clone repo `git clone https://github.com/astarnetwork/astar-docs`
  - Install dependencies by running `yarn` (`cd astar-docs` , `yarn` )
  - `yarn start` - spin up realtime website

### New document / Modify existing docment --> Submit a PR
  
  -  Get latest version of docs locally
      - Make sure you’re on the main branch (`git checkout main`)
      - Pull the latest version of the docs (`git pull`)
      - Create a new branch (`git checkout -b feat/new-feature-name-here`)
  - Create/update the docs as you please
      - Spin up live docs (`yarn start`)
      - Add new page/tweaks/etc
      - When you’re happy with it, ensure `yarn build` runs without errors
  - PR and staging environment
      - Commit your changes and push the new branch up to Github (`git add .` and `git commit`, `git push -u origin feat/your-new-branch`)
      - Create New PR on Github (https://github.com/astarnetwork/astar-docs)
      - Once PR is up, **CICD** will automatically build you a unique staging link you can see progress of this on Actions tab in Github
      - Get feedback from team

### Deploy to production

    - When PR is ready for merge, merge it by clicking the button at the bottom saying **Merge and Close**
    - Should be soon available at `[https://docs.astar.network](https://docs.astar.network)`
    
### HELP SOMETHING IS BROKEN
    - Likely, a broken build got pushed to `main` somehow. Remove the commit from `main` and force push to `main`, reopen PR in a new PR

