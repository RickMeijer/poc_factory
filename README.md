# Proof of concept factory

This work in progress aims to deliver a software suite that's easy to work with.

It has the following aims:

- Platform agnostic (support for vue/react/solidjs/svelte).
- Easy(-ier) package version management.
- (almost) Fully typed
- Eslint & Prettier working out of the box, using (mostly) the same ruleset for each project
- vscode configured properly for every developer using this
- Linting on staged files.
- Userfriendly CLI
- Full e2e/integration testing suite (playwright)

## Start

Clone the repo, run `npm install && npm start`, and follow the on-screen instructions.

## Troubleshooting

_ERROR: node_modules/.bin/ts-node: Permission denied_
The ts-node executable is installed without execution rights.
Run `chmod +x node_modules/.bin/ts-node` to fix this.
