# Shimpilot Sandbox

See how Shimpilot finds supported SDK changes—before connecting a repository.

Stripe + OpenAI fixtures · Public scan · No signup required




<p align="center"><sub>Inspect the source · See supported findings · Decide what to connect</sub></p>

# 👀 Start with the public scan

Run the scan without creating an account or installing the GitHub App. Shimpilot reports supported findings with affected files, line numbers, and rule evidence so you can inspect the result before granting repository access.

## What you can verify here

Static analysis of intentional Stripe and OpenAI compatibility fixtures

Finding evidence with source locations and version details

A real public scan against the repository shown on this page

What the public scan does not do

It does not install dependencies, run tests, or execute repository code.

It does not generate a migration, create a branch, or open a pull request.

It does not demonstrate Automatic mode or guarantee compatibility for every API usage.

[!NOTE]
A clean scan means no supported breaking pattern was found in the analyzed code. It is not a guarantee that every usage is compatible.

# 🧪 Try the connected workflow on a disposable copy

Use this repository as a template to try the connected workflow without granting access to a production repository.

Create your copy: Select Use this template above and choose your GitHub account or organization.

Choose access: Sign in to Shimpilot and install the GitHub App for your copy only.

Run a scan: Select your copy and start in Manual mode.

Review the evidence: If a finding is supported and eligible, inspect the Draft PR, validation results, and GitHub CI before merging.

# ⚙️ Choose how migrations are handled

## Manual mode

## Automatic mode

Your team reviews the diff and GitHub checks, then decides whether to merge.

An eligible migration may merge without human approval after the required safety gates pass.

Shimpilot may prepare a Draft PR after applicable validation completes.

## Plan, rule, validation, required CI, current PR head, and repository protection are checked before merge.

You keep the merge decision.

If a required condition cannot be verified, Shimpilot stops for review or blocks the migration.

# [!IMPORTANT]
Automatic mode is opt-in. Read the security overview and confirm your repository protections before enabling it.

#🔒 Access and execution boundaries

## Boundary

How this sandbox handles it

## Secrets

This repository contains test fixtures. Never add production credentials or secrets.

## GitHub access

Install the app only on your disposable copy and select only the repositories you intend to connect.

## Repository commands

Shimpilot worker-side command execution is disabled by default. GitHub Actions in your copy run in GitHub's environment under your workflow policy.

## Merge behavior

Manual mode waits for your review. Automatic mode checks eligibility, validation, CI, repository state, and protection gates before it can merge.

Questions about access? Read how Shimpilot handles security before connecting a repository.

# 📌 Public migration proof

No public migration PR is linked yet. We’ll add a proof link only when the PR, changed files, and validation evidence are available for public inspection.

For now, the public scan above is the independently inspectable product evidence.

<details>
<summary><strong>Run the fixture checks locally</strong></summary>

```npm ci```
```npm run typecheck```
```npm run build```

</details>

<p align="center"><strong>Built for safer SDK upgrades.</strong><br />
MIT licensed · <a href="LICENSE">View license</a> · <a href="https://shimpilot.com">Visit Shimpilot</a></p>
