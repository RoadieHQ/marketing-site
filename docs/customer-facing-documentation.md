# Writing customer facing documentation

Customer facing documentation lives in markdown files in the `content/docs` directory.

New files created there will automatically be published on the `roadie.io/docs/` path. For example, the `content/docs/getting-started.md` file is published as [roadie.io/docs/getting-started/](https://roadie.io/docs/getting-started/).

Adding a markdown file does not automatically add it to the table of contents in the sidebar of the documentation. This can be done manually by editing `src/templates/Doc.js`.
