# Contributing to Astar Documentation

Thank you for your interest in contributing to the Astar documentation. This guide explains who can contribute, what standards apply, and the process for getting new integrations or tooling listed.

## Types of Contributions

| Type | Description |
| --- | --- |
| **Bug fix** | Correcting typos, broken links, or factually incorrect information |
| **Content update** | Updating outdated instructions, screenshots, or network parameters |
| **New tutorial** | Adding a step-by-step guide for using a feature or tool in the Astar ecosystem |
| **New integration** | Requesting that a partner project, protocol, or developer tool be documented |
| **Structural improvement** | Reorganizing content for clarity without changing the underlying information |

All contributions go through a pull request and require at least one approval from the Astar documentation team before merging.

## Partner and Tooling Inclusion

This section is specifically for teams or individuals who want to get a project, protocol, or tool documented in the Astar docs.

### Eligibility Criteria

Before opening a request, your project must meet all of the following:

- **Live on mainnet.** Your project must be deployed and functional on Astar EVM. Testnet-only projects are not accepted.
- **Actively maintained.** The project must show recent activity. Abandoned or deprecated projects will not be added and existing ones may be removed.
- **Not a duplicate.** The documentation you are proposing must not already exist or substantially overlap with existing content.
- **Factual and technical.** The documentation must describe how to use or integrate the product. Marketing copy, price information, and investment language are not accepted.
- **Authorized submission.** You must be an official representative of the project or have explicit permission to submit documentation on its behalf.

### The Two-Stage Process

New integration documentation follows a proposal-first workflow. A PR submitted without an approved issue will be closed.

#### Stage 1: Open an Integration Request Issue

Use the [New Integration Request](.github/ISSUE_TEMPLATE/new-integration-request.yml) issue template. You will be asked to provide:

- Project name and category
- Live deployment URL on Astar EVM
- Official website and GitHub repository (if open source)
- The section of the docs where your content belongs
- A factual description of what the project does

The documentation team will review the request within **5 business days** and respond with one of the following:

- **Approved**: You are invited to open a PR with the documentation
- **Needs more information**: The team will request clarification before making a decision
- **Declined**: The request does not meet the eligibility criteria; a reason will be provided

#### Stage 2: Open a Pull Request

Once your issue is approved, open a PR that:

- References the approved issue number in the description
- Follows the file structure and style guide described below
- Passes the automated CI build (`yarn build`)
- Uses the PR template checklist

### What Happens After Your PR Is Submitted

1. **Automated checks** run first: the build must pass and links must resolve
2. **Content review** by the documentation team checks accuracy, tone, and structure
3. **One approval** is required from a team member before merge
4. Once merged, the content appears on [docs.astar.network](https://docs.astar.network) within minutes

## Documentation Standards

### File Structure

Place new documentation files in the correct section of the `docs/` directory. Follow the existing hierarchy:

```
docs/
  build/          Developer tools, integrations, EVM/WASM guides
  use/            End-user guides: wallets, bridges, dApp staking
  learn/          Conceptual content: architecture, tokenomics
```

If you are unsure where your content belongs, ask in the linked issue before creating files.

### Page Structure

Every new page should include:

1. **Frontmatter** with at minimum `sidebar_position` and a `title`
2. **Overview paragraph** explaining what the page covers and who it is for
3. **Prerequisites** (if applicable) listing what the reader needs before starting
4. **Step-by-step content** using numbered lists for sequential actions
5. **Troubleshooting or notes** (if applicable) using Docusaurus admonition blocks (`:::info`, `:::caution`, `:::warning`)

### Writing Style

- Write in the **second person** ("you", "your") and **present tense**
- Use **active voice**: "Click the button" not "The button should be clicked"
- Keep sentences short. One idea per sentence
- Spell out acronyms on first use: "Decentralized Exchange (DEX)"
- Do not include prices, APY, TVL, or other figures that change over time
- Do not include referral links or promotional language

### Images

Always use the `<Figure>` component instead of standard markdown image syntax. This ensures proper rendering across all locales.

**Import at the top of the file:**
```jsx
import Figure from '/src/components/figure'
```

**Usage:**
```jsx
<Figure
  src={require('/docs/your-section/img/your-image.png').default}
  caption="A description of the image"
  width="100%"
/>
```

Use **absolute paths** for images. Relative paths will break when content is reorganized.

### Code Blocks

Always specify the language for syntax highlighting:

````markdown
```typescript
const example = "always add the language"
```
````

## Updating Existing Documentation

To report or correct outdated, incorrect, or incomplete content, open a [Content Update Request](.github/ISSUE_TEMPLATE/content-update-request.yml) issue. Include:

- The URL or file path of the page in question
- The current content that needs changing
- The proposed correction and a source or reference confirming it

For small corrections (typos, broken links), you may open a PR directly without an issue.

## Review SLA

| Action | Expected Response Time |
| --- | --- |
| New integration request issue review | 5 business days |
| Content update issue review | 3 business days |
| PR review after CI passes | 3 business days |

If you have not received a response within these timeframes, feel free to leave a comment on your issue or PR as a reminder.

## Questions

For questions about the contribution process, reach out via the [Astar Discord](https://discord.com/invite/astarnetwork) in the `#documentation` channel, or open a GitHub Discussion.
