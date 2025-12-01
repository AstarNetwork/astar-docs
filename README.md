# Astar Network Documentation

Welcome to Astar Documentation GitHub Repository! 🗂️

This website is built using [**Docusaurus**](https://docusaurus.io/), a modern static website generator.

## Prerequisites

Before you begin, make sure the following tools are installed on your system:

* [**Git**](https://git-scm.com/downloads)
* [**Node.js**](https://nodejs.org/en) - version 22.17.0 or greater
* [**Yarn**](https://yarnpkg.com/) - version 4.9.2 or greater

You can verify your installations by running:
```bash
git --version
node --version
yarn --version
```

## How to Contribute

Choose your contribution path based on whether you are a member of the Astar Collective Github Organization or an external contributor:

<details>
<summary><b>Organization Contributors (Astar Collective)</b></summary>

If you are part of the Astar organization on GitHub and have write access to the repository, follow these steps:

### Step 1: Set Up Your Local Environment

Clone the repository and navigate to it:
```bash
git clone https://github.com/astarnetwork/astar-docs
cd astar-docs
```

Ensure you are on the main branch and have the latest version:
```bash
git checkout main
git pull
```

### Step 2: Create a New Branch

Create a new feature branch for your changes:
```bash
git checkout -b feat/your-feature-name
```

Install dependencies using yarn:
```bash
yarn install
```

**💡 TIP:** Use descriptive branch names like `feat/update-tokenomics` or `fix/broken-links`.

### Step 3: Make Your Changes

Start the local development server to preview your changes in real-time:
```bash
yarn start
```

This command will launch a local server (typically at `http://localhost:3000`) where you can see your changes as you edit the documentation.

Make your edits to the documentation files. You should be familiar with:

* **Markdown basics:** titles, subtitles, lists, hyperlinks, code blocks
* **File structure:** understanding where different documentation sections are located

### Step 4: Test Your Changes

Before committing, ensure the documentation builds without errors:
```bash
yarn build
```

If the build completes successfully, you are ready to commit your changes.

### Step 5: Commit and Push Your Changes

Add your changes and create a commit with a descriptive message:
```bash
git add .
git commit -m "Description of your changes"
```

Push your branch to GitHub:
```bash
git push -u origin feat/your-feature-name
```

**💡 TIP:** If you need to temporarily save your work without committing, use `git stash` and later restore with `git stash pop`.

### Step 6: Create a Pull Request

1. Go to https://github.com/astarnetwork/astar-docs
2. Create a new Pull Request from your feature branch to `main`
3. Provide a detailed description of your changes
4. Once the PR is created, CI/CD will automatically generate a unique staging link for review
5. You can monitor the build progress in the Actions tab on GitHub
6. Wait for feedback from the team

</details>

<details>
<summary><b>External Contributors (Community Members)</b></summary>

If you are not part of the Astar organization on GitHub, you will need to fork the repository first before making contributions.

### Step 1: Fork the Repository

1. Go to https://github.com/astarnetwork/astar-docs
2. Click the **Fork** button in the top-right corner
3. This creates a copy of the repository under your GitHub account

### Step 2: Set Up Your Local Environment

Clone your forked repository (replace `YOUR-USERNAME` with your GitHub username):
```bash
git clone https://github.com/YOUR-USERNAME/astar-docs
cd astar-docs
```

Add the original repository as an upstream remote to keep your fork synchronized:
```bash
git remote add upstream https://github.com/astarnetwork/astar-docs
```

### Step 3: Create a New Branch

Ensure you have the latest changes from the original repository:
```bash
git checkout main
git pull upstream main
```

Create a new feature branch for your changes:
```bash
git checkout -b feat/your-feature-name
```

Install dependencies using yarn:
```bash
yarn install
```

### Step 4: Make Your Changes

Start the local development server to preview your changes in real-time:
```bash
yarn start
```

This command will launch a local server (typically at `http://localhost:3000`) where you can see your changes as you edit the documentation.

Make your edits to the documentation files. You should be familiar with:

* **Markdown basics:** titles, subtitles, lists, hyperlinks, code blocks
* **File structure:** understanding where different documentation sections are located

### Step 5: Test Your Changes

Before committing, ensure the documentation builds without errors:
```bash
yarn build
```

If the build completes successfully, you are ready to commit your changes.

### Step 6: Commit and Push Your Changes

Add your changes and create a commit with a descriptive message:
```bash
git add .
git commit -m "Description of your changes"
```

Push your branch to your forked repository:
```bash
git push -u origin feat/your-feature-name
```

### Step 7: Create a Pull Request

1. Go to your forked repository on GitHub (https://github.com/YOUR-USERNAME/astar-docs)
2. Click **Compare & pull request**
3. Ensure the base repository is `astarnetwork/astar-docs` and the base branch is `main`
4. Provide a detailed description of your changes
5. Submit the Pull Request
6. Once the PR is created, CI/CD will automatically generate a unique staging link for review
7. You can monitor the build progress in the Actions tab on GitHub
8. Wait for feedback from the Astar team

### Step 8: Keep Your Fork Updated

To keep your fork synchronized with the original repository:
```bash
git checkout main
git pull upstream main
git push origin main
```

</details>

## Working with Images

Please import and use the `<Figure/>` tag instead of `![image]` as this enables smoother translation of docs to other languages (automatic reference to original images, no need to copy images to translated subfolders) and automatically applies some styling such as line breaks.

**🧑🏻‍💻 Example as seen [here](https://github.com/AstarNetwork/astar-docs/blob/d530139ca7a5ab034a783981d313542e02fdfb54/docs/about/token-economics/inflationary-model.md).**

**Top of file:**
```javascript
import Figure from "/src/components/figure"
```

**Within the file:**
```javascript
<Figure caption="Tokenomics Model" src={require('/docs/about/token-economics/img/tokenomics_1.png').default } width="100%" />
```

**Important:** Please use absolute path to image (e.g. `/docs/about/token-economics/img/tokenomics_1.png` instead of `img/tokenomics_1.png`).

## HELP! Something is broken 🔍

Likely, a broken build got pushed to `main` somehow. Remove the commit from `main` and force push to `main`, reopen PR in a new PR.



## Deploy to Production

**For Organization Contributors Only:**

When a PR is ready for merge, click the button at the bottom saying **Merge and Close** and then **Confirm**.

After a few minutes you should see your changes updated on the production site at [**Astar Network Documentation**](https://docs.astar.network).