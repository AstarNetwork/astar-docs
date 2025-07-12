# Astar Network Documentation

Welcome to Astar Documentation GitHub Repository! 🗂️

This website is built using [**Docusaurus**](https://docusaurus.io/), a modern static website generator.

## How to contribute using a local instance of the Docusaurus engine

### Method 1:

Make sure `git`, `node` and `yarn` exist as commands in your terminal or code editors like **Visual Studio Code**.

* [**Git**](https://git-scm.com/downloads)
* [**Node.js**](https://nodejs.org/en)
* [**Yarn**](https://yarnpkg.com/)

**🔖 NOTE:** Use a Node.js version equal to or greater than `22.17.0` and a Yarn version equal to or greater than `4.9.2`.

**Git/Github:** understand what the following commands do:

* Managing branches:
```bash

git checkout main
git checkout -b feat/your-new-branch

```
* Commits:
```bash

git add .
git commit -m "Your-message-here"

git push -u origin feat/your-new-branch

```

* Create a PR on GitHub and be as detailed as possible about your changes.

**💡 TIP:** Maybe stashing `git stash` and `git stash pop` will be your best friends.

- Markdown basics:
    - titles, subtitles
    - lists
    - hyperlinks

### Method 2:

Make sure `node` and `yarn` exist as commands in your terminal or VS Code and [**Github Desktop**](https://desktop.github.com/download/) is installed. All the `git` operations described below can also be found within the menu of the desktop application, and common operations are clearly visible on launch.

**New document / Modify existing document → Submit a PR ✅**
  
* Get latest version of docs locally

    * Clone repo → `git clone https://github.com/astarnetwork/astar-docs`
    * Move inside the repository → `cd astar-docs`
    * Make sure you’re on the main branch → `git checkout main`
    * Pull the latest version of the docs → `git pull`
    * Create a new branch → `git checkout -b feat/new-feature-name-here`
    * Install dependencies by running → `yarn` or `yarn install`

* Create/update the docs as you please

    * Start the local development server by running → `yarn start`
    * Add new page/tweaks/etc
    * When you’re happy with it, ensure `yarn build` runs without errors

* PR and staging environment

    * Commit your changes and push the new branch up to Github
    ```bash

    git add .
    git commit -m "Your-message-here"
        
    git push -u origin feat/your-new-branch

    ```

* Create a new PR on Github → https://github.com/astarnetwork/astar-docs

    * Once PR is up, **CI/CD** will automatically build you a unique staging link.
    * You can view the progress of this on the Actions tab on Github
    * Wait for feedback from the team

## Working with images

Please import and use the `<Figure/>` tag instead of `![image]` as this enables smoother translation of docs to other languages (automatic reference to original images, no need to copy images to translated subfolders) and automatically applies some styling such as line breaks.
    
**🧑🏻‍💻 Example as seen [here](https://github.com/AstarNetwork/astar-docs/blob/d530139ca7a5ab034a783981d313542e02fdfb54/docs/about/token-economics/inflationary-model.md).**
      
**Top of file:**
```bash

import Figure from "/src/components/figure"

```

**Within the file:**
```bash
    
<Figure caption="Tokenomics Model" src={require('/docs/about/token-economics/img/tokenomics_1.png').default } width="100%" /> 

```

* Please use absolute path to image (e.g. `/docs/about/token-economics/img/tokenomics_1.png` instead of `img/tokenomics_1.png`).

## Deploy to production

When a PR is ready for merge, click the button at the bottom saying **Merge and Close** and then **Confirm**.

After a few minutes you should see your changes updated on the production site at [**Astar Network Documentation**](https://docs.astar.network).
    
## HELP! Something is broken 🔍

Likely, a broken build got pushed to `main` somehow. Remove the commit from `main` and force push to `main`, reopen PR in a new PR.